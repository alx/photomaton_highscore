# Photomaton Highscore

Raise in highscore leaderboard by showing many object of the same class:

- 2 faces => 2 points
- 10 faces => 10 points
- 25 toys => 25 points
- ...

`thumbs` folder is versionable, feel free to push your highscores in a pull-request!

## Requirements

```bash
sudo apt update
sudo apt install python3-opencv

pip3 install -r requirements.txt
```

## Usage

```bash
export FLASK_APP=main.py && python3 -m flask run
```

## DeepDetect

By default, python script will connect on `detection_600` service running on a locally installed [DeepDetect Platform](https://www.deepdetect.com).

```python
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
```
