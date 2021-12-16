// Importing actions
import {
  CHANGE_BRIGHTNESS,
  CHANGE_CONTRAST,
  CHANGE_SATURATION,
  CHANGE_GRAYSCALE,
  CHANGE_SEPIA,
  CHANGE_HUE_ROTATE,
  CHANGE_BLUR,
} from "../SliderComponent/sliderComponentActions";

// Importing components
import { drawerItems } from "../../components/DrawerComponent/drawerItems";

// Initial state
const drawerOptionsInitialState = {
  brightnessOption: {
    index: 0,
    option: "brightness",
    value: drawerItems[0].value,
  },
  contrastOption: {
    index: 1,
    option: "contrast",
    value: drawerItems[1].value,
  },
  saturationOption: {
    index: 2,
    option: "saturate",
    value: drawerItems[2].value,
  },
  grayscaleOption: {
    index: 3,
    option: "grayscale",
    value: drawerItems[3].value,
  },
  sepiaOption: {
    index: 4,
    option: "sepia",
    value: drawerItems[4].value,
  },
  hueRotateOption: {
    index: 5,
    option: "hue-rotate",
    value: drawerItems[5].value,
  },
  blurOption: {
    index: 6,
    option: "blur",
    value: drawerItems[6].value,
  },
};

// Reducer
const drawerComponentReducer = (state = drawerOptionsInitialState, action) => {
  switch (action.type) {
    case CHANGE_BRIGHTNESS:
      return {
        ...state,
        brightnessOption: {
          index: 0,
          option: "brightness",
          value: action.payload.value,
        },
      };

    case CHANGE_CONTRAST:
      return {
        ...state,
        contrastOption: {
          index: 1,
          option: "contrast",
          value: action.payload.value,
        },
      };

    case CHANGE_SATURATION:
      return {
        ...state,
        saturationOption: {
          index: 2,
          option: "saturate",
          value: action.payload.value,
        },
      };

    case CHANGE_GRAYSCALE:
      return {
        ...state,
        grayscaleOption: {
          index: 3,
          option: "grayscale",
          value: action.payload.value,
        },
      };

    case CHANGE_SEPIA:
      return {
        ...state,
        sepiaOption: { index: 4, option: "sepia", value: action.payload.value },
      };

    case CHANGE_HUE_ROTATE:
      return {
        ...state,
        hueRotateOption: {
          index: 5,
          option: "hue-rotate",
          value: action.payload.value,
        },
      };

    case CHANGE_BLUR:
      return {
        ...state,
        blurOption: { index: 6, option: "blur", value: action.payload.value },
      };

    default:
      return state;
  }
};

// Default export of the reducer function
export default drawerComponentReducer;
