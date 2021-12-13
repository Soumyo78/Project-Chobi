// Action Types
const CHANGE_BRIGHTNESS = "CHANGE_BRIGHTNESS";
const CHANGE_CONTRAST = "CHANGE_CONTRAST";
const CHANGE_SATURATION = "CHANGE_SATURATION";
const CHANGE_GRAYSCALE = "CHANGE_GRAYSCALE";
const CHANGE_SEPIA = "CHANGE_SEPIA";
const CHANGE_HUE_ROTATE = "CHANGE_HUE_ROTATE";
const CHANGE_BLUR = "CHANGE_BLUR";

// Action Creators
const changeBrightnessAction = () => {
  return {
    type: CHANGE_BRIGHTNESS,
    payload: "For changing the image brightness.",
  };
};

const changeContrastAction = () => {
  return {
    type: CHANGE_CONTRAST,
    payload: "For changing the image contrast.",
  };
};

const changeSaturationAction = () => {
  return {
    type: CHANGE_SATURATION,
    payload: "For changing the image saturation.",
  };
};

const changeGrayscaleAction = () => {
  return {
    type: CHANGE_GRAYSCALE,
    payload: "For changing the image grayscale.",
  };
};

const changeSepiaAction = () => {
  return {
    type: CHANGE_SEPIA,
    payload: "For changing the image sepia.",
  };
};

const changeHueRotateAction = () => {
  return {
    type: CHANGE_HUE_ROTATE,
    payload: "For changing the image hue rotate.",
  };
};

const changeBlurAction = () => {
  return {
    type: CHANGE_BLUR,
    payload: "For changing the image blur.",
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
