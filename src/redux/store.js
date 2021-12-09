// Importing redux stuffs
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Importing the reducers
import imageComponentReducer from "./ImageContainerComponent/imageComponentReducer";

// Store Creator Function
const storeCreator = () => {
  return createStore(
    imageComponentReducer,
    applyMiddleware(logger)
  );
};

// Default export of store creator function
export default storeCreator;
