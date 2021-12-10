// Importing actions
import { DELETE_IMAGE, OPEN_IMAGE } from "./imageComponentActions";

// Importing components
import NoImageComponent from "../../components/ImageContainerComponent/NoImageComponent";
import ImageComponent from "../../components/ImageContainerComponent/ImageComponent";

// Importing react stuffs
import ReactDOM from "react-dom";

// Initial state
const uploadImgInitialState = {
  read_image_file: null,
  imageHolderComponent: <NoImageComponent />,
};

// Reducer
const imageComponentReducer = (state = uploadImgInitialState, action) => {
  switch (action.type) {
    case OPEN_IMAGE:
      return {
        read_image_file: action.payload.readImageFile,
        imageHolderComponent: <ImageComponent />,
      };

    case DELETE_IMAGE:
      ReactDOM.findDOMNode(
        document.querySelector(".selected-active")
      ).classList.remove("selected-active");

      // Getting all the elements of class name 'app-drawer-item'
      let elements = document.getElementsByClassName("app-drawer-item");
      // setting pointer events none for each element
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.pointerEvents = "none";
        element.style.opacity = 0.6;
      }
      return {
        read_image_file: null,
        imageHolderComponent: <NoImageComponent />,
      };

    default:
      return state;
  }
};

// Default export of the reducer function
export default imageComponentReducer;
