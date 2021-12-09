// Importing the styles
import "./style.scss";

// Importing redux stuffs
import { connect } from "react-redux";

// Functional component
const ImageContainerComponent = (props) => {
  const { imageHolderComponent} = props;

  // It will show a warning alert every time user wants to leave or reload the page
  window.onbeforeunload = function () {
    return "Image will be lost if you leave the page, are you sure?";
  };

  return (
    <div className="image-main-container">
      <div className="image-holder">{imageHolderComponent}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageHolderComponent: state.imageHolderComponent,
  };
};


// Default export of the component
export default connect(mapStateToProps)(ImageContainerComponent);
