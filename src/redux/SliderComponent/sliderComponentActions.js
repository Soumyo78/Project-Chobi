// Action Types
const CHANGE_BRIGHTNESS = "CHANGE_BRIGHTNESS";
const CHANGE_CONTRAST = "CHANGE_CONTRAST";
const CHANGE_SATURATION = "CHANGE_SATURATION";
const CHANGE_GRAYSCALE = "CHANGE_GRAYSCALE";
const CHANGE_SEPIA = "CHANGE_SEPIA";
const CHANGE_HUE_ROTATE = "CHANGE_HUE_ROTATE";
const CHANGE_BLUR = "CHANGE_BLUR";

// Action Creators
const changeBrightnessAction = (value) => {
  return {
    type: CHANGE_BRIGHTNESS,
    payload: {value: value},
  };
};

const changeContrastAction = (value) => {
  return {
    type: CHANGE_CONTRAST,
    payload: {value: value},
  };
};

const changeSaturationAction = (value) => {
  return {
    type: CHANGE_SATURATION,
    payload: {value: value},
  };
};

const changeGrayscaleAction = (value) => {
  return {
    type: CHANGE_GRAYSCALE,
    payload: {value: value},
  };
};

const changeSepiaAction = (value) => {
  return {
    type: CHANGE_SEPIA,
    payload: {value: value},
  };
};

const changeHueRotateAction = (value) => {
  return {
    type: CHANGE_HUE_ROTATE,
    payload: {value: value},
  };
};

const changeBlurAction = (value) => {
  return {
    type: CHANGE_BLUR,
    payload: {value: value},
  };
};

// Named export of the components
export {
  CHANGE_BRIGHTNESS,
  CHANGE_CONTRAST,
  CHANGE_SATURATION,
  CHANGE_GRAYSCALE,
  CHANGE_SEPIA,
  CHANGE_HUE_ROTATE,
  CHANGE_BLUR,
  changeBrightnessAction,
  changeContrastAction,
  changeSaturationAction,
  changeGrayscaleAction,
  changeSepiaAction,
  changeHueRotateAction,
  changeBlurAction,
};
