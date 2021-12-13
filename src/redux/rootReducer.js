// Importing redux stuffs
import { combineReducers } from "redux";

// Importing reducers
import imageComponentReducer from "./ImageContainerComponent/imageComponentReducer";
import drawerComponentReducer from "./DrawerComponent/drawerComponentReducer";

// Default export of the component
export default combineReducers({
  imageComponentReducer,
  drawerComponentReducer,
});
