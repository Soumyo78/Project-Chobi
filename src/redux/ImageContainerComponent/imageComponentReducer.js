// Importing actions
import { DELETE_IMAGE, OPEN_IMAGE } from "./imageComponentActions";

// Importing components
import NoImageComponent from "../../components/ImageContainerComponent/NoImageComponent";
import ImageComponent from "../../components/ImageContainerComponent/ImageComponent";

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
      // Reloading the page on image delete
      window.location.reload(true);
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
