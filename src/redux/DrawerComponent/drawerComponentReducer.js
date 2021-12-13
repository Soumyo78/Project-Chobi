// Importing actions
import {
  CHANGE_BRIGHTNESS,
  CHANGE_CONTRAST,
  CHANGE_SATURATION,
  CHANGE_GRAYSCALE,
  CHANGE_SEPIA,
  CHANGE_HUE_ROTATE,
  CHANGE_BLUR,
} from "../DrawerComponent/drawerComponentActions";

// Importing components
import { drawerItems } from "../../components/DrawerComponent/drawerItems";

// Initial state
const drawerOptionsInitialState = {
  options: drawerItems,
  selectedOption: "brightness",
};

// Reducer
const drawerComponentReducer = (state = drawerOptionsInitialState, action) => {
  switch (action.type) {
    case CHANGE_BRIGHTNESS:
      return {
        ...state,
        selectedOption: "brightness",
      };

    case CHANGE_CONTRAST:
      return {
        ...state,
        selectedOption: "contrast",
      };

    case CHANGE_SATURATION:
      return {
        ...state,
        selectedOption: "saturate",
      };

    case CHANGE_GRAYSCALE:
      return {
        ...state,
        selectedOption: "grayscale",
      };

    case CHANGE_SEPIA:
      return {
        ...state,
        selectedOption: "sepia",
      };

    case CHANGE_HUE_ROTATE:
      return {
        ...state,
        selectedOption: "hue-rotate",
      };

    case CHANGE_BLUR:
      return {
        ...state,
        selectedOption: "blur",
      };

    default:
      return state;
  }
};

// Default export of the reducer function
export default drawerComponentReducer;
