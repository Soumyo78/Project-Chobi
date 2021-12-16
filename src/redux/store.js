// Importing redux stuffs
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Importing the root reducer
import rootReducer from "./rootReducer";

// Store Creator Function
const storeCreator = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};

// Default export of store creator function
export default storeCreator;
