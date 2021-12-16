// Importing the styles
import "./style.scss";

// Importing redux stuffs
import { useSelector } from "react-redux";

// Functional component
const ImageContainerComponent = () => {
  const imageHolderComponent = useSelector(state => state.imageComponentReducer.imageHolderComponent)

  // It will show a warning alert every time user wants to leave or reload the page
  // window.onbeforeunload = function () {
  //   return "Image will be lost if you leave the page, are you sure?";
  // };

  return (
    <div className="image-main-container">
      <div className="image-holder">{imageHolderComponent}</div>
    </div>
  );
};

// Default export of the component
export default ImageContainerComponent;
