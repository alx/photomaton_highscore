(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Webcam"] = factory(require("react"));
	else
		root["Webcam"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/react-webcam.tsx":
/*!******************************!*\
  !*** ./src/react-webcam.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Webcam; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\nfunction hasGetUserMedia() {\n    return !!((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ||\n        navigator.webkitGetUserMedia ||\n        navigator.mozGetUserMedia ||\n        navigator.msGetUserMedia);\n}\nclass Webcam extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n        super(props);\n        this.ctx = null;\n        this.state = {\n            hasUserMedia: false\n        };\n    }\n    componentDidMount() {\n        if (!hasGetUserMedia())\n            return;\n        const { state } = this;\n        Webcam.mountedInstances.push(this);\n        if (!state.hasUserMedia && !Webcam.userMediaRequested) {\n            this.requestUserMedia();\n        }\n    }\n    componentDidUpdate(nextProps) {\n        const { props } = this;\n        if (JSON.stringify(nextProps.audioConstraints) !==\n            JSON.stringify(props.audioConstraints) ||\n            JSON.stringify(nextProps.videoConstraints) !==\n                JSON.stringify(props.videoConstraints)) {\n            this.requestUserMedia();\n        }\n    }\n    componentWillUnmount() {\n        const { state } = this;\n        const index = Webcam.mountedInstances.indexOf(this);\n        Webcam.mountedInstances.splice(index, 1);\n        Webcam.userMediaRequested = false;\n        if (Webcam.mountedInstances.length === 0 && state.hasUserMedia) {\n            if (this.stream.getVideoTracks && this.stream.getAudioTracks) {\n                this.stream.getVideoTracks().map(track => track.stop());\n                this.stream.getAudioTracks().map(track => track.stop());\n            }\n            else {\n                this.stream.stop();\n            }\n            if (state.src) {\n                window.URL.revokeObjectURL(state.src);\n            }\n        }\n    }\n    getScreenshot() {\n        const { state, props } = this;\n        if (!state.hasUserMedia)\n            return null;\n        const canvas = this.getCanvas();\n        return (canvas &&\n            canvas.toDataURL(props.screenshotFormat, props.screenshotQuality));\n    }\n    getCanvas() {\n        const { state, props } = this;\n        if (!this.video) {\n            return null;\n        }\n        if (!state.hasUserMedia || !this.video.videoHeight)\n            return null;\n        if (!this.ctx) {\n            const canvas = document.createElement(\"canvas\");\n            const aspectRatio = this.video.videoWidth / this.video.videoHeight;\n            let canvasWidth = props.minScreenshotWidth || this.video.clientWidth;\n            let canvasHeight = canvasWidth / aspectRatio;\n            if (props.minScreenshotHeight &&\n                canvasHeight < props.minScreenshotHeight) {\n                canvasHeight = props.minScreenshotHeight;\n                canvasWidth = canvasHeight * aspectRatio;\n            }\n            canvas.width = canvasWidth;\n            canvas.height = canvasHeight;\n            this.canvas = canvas;\n            this.ctx = canvas.getContext(\"2d\");\n        }\n        const { ctx, canvas } = this;\n        if (ctx) {\n            if (props.mirrored) {\n                ctx.translate(canvas.width, 0);\n                ctx.scale(-1, 1);\n            }\n            else {\n                ctx.translate(0, 0);\n                ctx.scale(1, 1);\n            }\n            ctx.imageSmoothingEnabled = props.imageSmoothing;\n            ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);\n        }\n        return canvas;\n    }\n    requestUserMedia() {\n        const { props } = this;\n        navigator.getUserMedia =\n            navigator.mediaDevices.getUserMedia ||\n                navigator.webkitGetUserMedia ||\n                navigator.mozGetUserMedia ||\n                navigator.msGetUserMedia;\n        const sourceSelected = (audioConstraints, videoConstraints) => {\n            const constraints = {\n                video: typeof videoConstraints !== \"undefined\" ? videoConstraints : true\n            };\n            if (props.audio) {\n                constraints.audio =\n                    typeof audioConstraints !== \"undefined\" ? audioConstraints : true;\n            }\n            navigator.mediaDevices\n                .getUserMedia(constraints)\n                .then(stream => {\n                Webcam.mountedInstances.forEach(instance => instance.handleUserMedia(null, stream));\n            })\n                .catch(e => {\n                Webcam.mountedInstances.forEach(instance => instance.handleUserMedia(e));\n            });\n        };\n        if (\"mediaDevices\" in navigator) {\n            sourceSelected(props.audioConstraints, props.videoConstraints);\n        }\n        else {\n            const optionalSource = id => ({ optional: [{ sourceId: id }] });\n            const constraintToSourceId = constraint => {\n                const { deviceId } = constraint;\n                if (typeof deviceId === \"string\") {\n                    return deviceId;\n                }\n                if (Array.isArray(deviceId) && deviceId.length > 0) {\n                    return deviceId[0];\n                }\n                if (typeof deviceId === \"object\" && deviceId.ideal) {\n                    return deviceId.ideal;\n                }\n                return null;\n            };\n            // @ts-ignore: deprecated api\n            MediaStreamTrack.getSources(sources => {\n                let audioSource = null;\n                let videoSource = null;\n                sources.forEach(source => {\n                    if (source.kind === \"audio\") {\n                        audioSource = source.id;\n                    }\n                    else if (source.kind === \"video\") {\n                        videoSource = source.id;\n                    }\n                });\n                const audioSourceId = constraintToSourceId(props.audioConstraints);\n                if (audioSourceId) {\n                    audioSource = audioSourceId;\n                }\n                const videoSourceId = constraintToSourceId(props.videoConstraints);\n                if (videoSourceId) {\n                    videoSource = videoSourceId;\n                }\n                sourceSelected(optionalSource(audioSource), optionalSource(videoSource));\n            });\n        }\n        Webcam.userMediaRequested = true;\n    }\n    handleUserMedia(err, stream) {\n        const { props } = this;\n        if (err || !stream) {\n            this.setState({ hasUserMedia: false });\n            props.onUserMediaError(err);\n            return;\n        }\n        this.stream = stream;\n        try {\n            if (this.video) {\n                this.video.srcObject = stream;\n            }\n            this.setState({ hasUserMedia: true });\n        }\n        catch (error) {\n            this.setState({\n                hasUserMedia: true,\n                src: window.URL.createObjectURL(stream)\n            });\n        }\n        props.onUserMedia();\n    }\n    render() {\n        const { state, props } = this;\n        const { audio, onUserMedia, onUserMediaError, screenshotFormat, screenshotQuality, minScreenshotWidth, minScreenshotHeight, audioConstraints, videoConstraints, imageSmoothing, mirrored, style = {} } = props, rest = __rest(props, [\"audio\", \"onUserMedia\", \"onUserMediaError\", \"screenshotFormat\", \"screenshotQuality\", \"minScreenshotWidth\", \"minScreenshotHeight\", \"audioConstraints\", \"videoConstraints\", \"imageSmoothing\", \"mirrored\", \"style\"]);\n        const videoStyle = mirrored ? Object.assign(Object.assign({}, style), { transform: `${style.transform || \"\"} scaleX(-1)` }) : style;\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"video\", Object.assign({ autoPlay: true, src: state.src, muted: audio, playsInline: true, ref: ref => {\n                this.video = ref;\n            }, style: videoStyle }, rest)));\n    }\n}\nWebcam.defaultProps = {\n    audio: true,\n    imageSmoothing: true,\n    mirrored: false,\n    onUserMedia: () => { },\n    onUserMediaError: () => { },\n    screenshotFormat: \"image/webp\",\n    screenshotQuality: 0.92,\n};\nWebcam.mountedInstances = [];\nWebcam.userMediaRequested = false;\n\n\n//# sourceURL=webpack://Webcam/./src/react-webcam.tsx?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://Webcam/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ })["default"];
});