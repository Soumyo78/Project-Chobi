// Action Types
const SELECT_BRIGHTNESS = "SELECT_BRIGHTNESS";
const SELECT_CONTRAST = "SELECT_CONTRAST";
const SELECT_SATURATION = "SELECT_SATURATION";
const SELECT_GRAYSCALE = "SELECT_GRAYSCALE";
const SELECT_SEPIA = "SELECT_SEPIA";
const SELECT_HUE_ROTATE = "SELECT_HUE_ROTATE";
const SELECT_BLUR = "SELECT_BLUR";

// Action Creators
const selectBrightnessAction = () => {
  return {
    type: SELECT_BRIGHTNESS,
    payload: "For selecting the image brightness.",
  };
};

const selectContrastAction = () => {
  return {
    type: SELECT_CONTRAST,
    payload: "For selecting the image contrast.",
  };
};

const selectSaturationAction = () => {
  return {
    type: SELECT_SATURATION,
    payload: "For selecting the image saturation.",
  };
};

const selectGrayscaleAction = () => {
  return {
    type: SELECT_GRAYSCALE,
    payload: "For selecting the image grayscale.",
  };
};

const selectSepiaAction = () => {
  return {
    type: SELECT_SEPIA,
    payload: "For selecting the image sepia.",
  };
};

const selectHueRotateAction = () => {
  return {
    type: SELECT_HUE_ROTATE,
    payload: "For selecting the image hue rotate.",
  };
};

const selectBlurAction = () => {
  return {
    type: SELECT_BLUR,
    payload: "For selecting the image blur.",
  };
};

// Named export of the components
export {
  SELECT_BRIGHTNESS,
  SELECT_CONTRAST,
  SELECT_SATURATION,
  SELECT_GRAYSCALE,
  SELECT_SEPIA,
  SELECT_HUE_ROTATE,
  SELECT_BLUR,
  selectBrightnessAction,
  selectContrastAction,
  selectSaturationAction,
  selectGrayscaleAction,
  selectSepiaAction,
  selectHueRotateAction,
  selectBlurAction,
};
