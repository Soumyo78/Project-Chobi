// Importing actions
import {
  SELECT_BRIGHTNESS,
  SELECT_CONTRAST,
  SELECT_SATURATION,
  SELECT_GRAYSCALE,
  SELECT_SEPIA,
  SELECT_HUE_ROTATE,
  SELECT_BLUR,
} from "../DrawerComponent/drawerComponentActions";

// Importing components
import { drawerItems } from "../../components/DrawerComponent/drawerItems";

// Initial state
const drawerOptionsInitialState = {
  options: drawerItems,
  selectedOption: "brightness",
  selectedOptionIndex: 0,
};

// Reducer
const drawerComponentReducer = (state = drawerOptionsInitialState, action) => {
  switch (action.type) {
    case SELECT_BRIGHTNESS:
      return {
        ...state,
        selectedOption: "brightness",
        selectedOptionIndex: 0,
      };

    case SELECT_CONTRAST:
      return {
        ...state,
        selectedOption: "contrast",
        selectedOptionIndex: 1,
      };

    case SELECT_SATURATION:
      return {
        ...state,
        selectedOption: "saturate",
        selectedOptionIndex: 2,
      };

    case SELECT_GRAYSCALE:
      return {
        ...state,
        selectedOption: "grayscale",
        selectedOptionIndex: 3,
      };

    case SELECT_SEPIA:
      return {
        ...state,
        selectedOption: "sepia",
        selectedOptionIndex: 4,
      };

    case SELECT_HUE_ROTATE:
      return {
        ...state,
        selectedOption: "hue-rotate",
        selectedOptionIndex: 5,
      };

    case SELECT_BLUR:
      return {
        ...state,
        selectedOption: "blur",
        selectedOptionIndex: 6,
      };

    default:
      return state;
  }
};

// Default export of the reducer function
export default drawerComponentReducer;
