import cv2
import datetime
import os
import base64
import json
import re
from pathlib import Path
from collections import Counter
from dd_client import DD
from flask import Flask, request, send_from_directory, jsonify

host = 'localhost'
port = 1912
path = '/api/deepdetect'

service = {
    "sname": "detection_600",
    "parameters_input": {
    },
    "parameters_mllib": {
        "gpu": True
    },
    "parameters_output": {
        "confidence_threshold": 0.2,
        "bbox": True
    }
}

dd = DD(host, port, 0, path)
dd.set_return_format(dd.RETURN_PYTHON)

static_file_dir = os.path.dirname(os.path.realpath(__file__))
app = Flask(__name__, static_url_path='')

@app.route('/', methods=['GET'])
def serve_dir_directory_index():
    return send_from_directory(static_file_dir, 'index.html')

@app.route('/dist/<path:filename>', methods=['GET'])
def serve_file_in_dir(filename):
    return send_from_directory(os.path.join('.', 'dist'), filename)

@app.route('/highscores/<path:filename>', methods=['GET'])
def serve_highscore_in_dir(filename):
    return send_from_directory(os.path.join('.', 'highscores'), filename)

@app.route('/thumbs/<path:filename>', methods=['GET'])
def serve_thumbs_in_dir(filename):
    return send_from_directory(os.path.join('.', 'thumbs'), filename)

@app.route('/highscore', methods=['POST'])
def styleAndReturnBase64():

    body = request.get_json()
    data = [body["screenshot"]]

    try:

        response = dd.post_predict(
            service["sname"],
            data,
            service["parameters_input"],
            service["parameters_mllib"],
            service["parameters_output"]
        )

    except:

        response = {
            'error': 'DeepDetect service not available'
        }

    try:
        classes = response['body']['predictions'][0]['classes']

        # Filter classes on most common category
        mainCat = Counter([i['cat'] for i in classes]).most_common(1)[0]
        classes = [i for i in classes if i['cat'] == mainCat[0]]

        # only keep most common category in response predictions
        response['body']['predictions'][0]['classes'] = classes

        # check if highscore for this class and score already exists
        existingHighscore = len(sorted(Path('./highscores').glob(
            '{category}_{score}_*'.format(
                category=mainCat[0],
                score=str(mainCat[1])
            )
        ))) > 0

        if not existingHighscore:

            highscorePath = Path(
                './highscores/{category}_{score}_{epoch}.jpg'.format(
                    category=mainCat[0],
                    score=str(mainCat[1]),
                    epoch=int(datetime.datetime.now().timestamp())
                )
            )

            decoded = base64.b64decode(body['screenshot'])

            # save new highscore image
            image_file = open(str(highscorePath), 'wb')
            image_file.write(decoded)
            image_file.close()

            # save response json file next to saved highscore image
            with open(str(highscorePath).replace('.jpg', '.json'), 'w') as outfile:
                json.dump(response, outfile)

            # create new image with overlayed bounding boxes
            img = cv2.imread(str(highscorePath))

            for prediction in classes:
                bbox = prediction['bbox']

                try:

                    cv2.rectangle(
                        img,
                        (int(bbox['xmin']),int(bbox['ymax'])),
                        (int(bbox['xmax']),int(bbox['ymin'])),
                        (0, 0, 0),
                        5
                    )

                    cv2.rectangle(
                        img,
                        (int(bbox['xmin']),int(bbox['ymax'])),
                        (int(bbox['xmax']),int(bbox['ymin'])),
                        (255, 255, 255),
                        3
                    )


                except:
                    pass

            # remove older highscores
            for p in Path("./thumbs/").glob("{category}*.jpg".format(category=mainCat[0])):
                p.unlink()

            # Save highscore thumb with bounding boxes
            cv2.imwrite(str(highscorePath).replace('highscores', 'thumbs'), img)

    except Exception as e:
        # print(e)
        pass

    # Sort by score highscores available in thumbs folder
    sortedHighscores = sorted(
        Path('./thumbs').iterdir(),
        key=lambda t: int(re.search(r"_(\d+)_", str(t)).group(1)),
        reverse=True
    )

    # Fill highscrore image paths in response object
    response['highscores'] = [
        str(i)
        for i in sortedHighscores
        if str(i).endswith('.jpg')
    ]

    return jsonify(response)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
