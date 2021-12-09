// Importing the styles
import "./style.scss";

// Importing resources
import { ReactComponent as ImageContainerPic1 } from "../../../resources/image-upload-pic-1.svg";
import { styled, Button, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

// Importing redux stuffs
import { connect } from "react-redux";
import { openImageAction } from "../../../redux/ImageContainerComponent/imageComponentActions";

const Input = styled("input")({
  display: "none",
});

// Functional component
const NoImageComponent = (props) => {
  const { openImage } = props;

  // For opening an image file
  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        openImage(reader);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="no-image-main-container">
      <h2>Select an image to edit.</h2>
      <ImageContainerPic1 id="image-container-pic-1" />
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={imgHandler}
          />
          <Button variant="contained" component="span" id="open-image-button">
            <div className="image-button-container">
              <FontAwesomeIcon icon={faFolderOpen} />
              <span id="open-image-text">Open an Image</span>
            </div>
          </Button>
        </label>
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    read_image_file: state.read_image_file,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openImage: (readImageFile) => dispatch(openImageAction(readImageFile)),
  };
};

// Default export of the component
export default connect(mapStateToProps, mapDispatchToProps)(NoImageComponent);
