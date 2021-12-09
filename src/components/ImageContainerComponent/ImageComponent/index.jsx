// Importing style
import "./style.scss";

// Importing react stuffs
import { useState, useEffect } from "react";

// Importing resources
import { Button, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";

// Importing the components
import { getDateTime, onDownload } from "../../../global";
import SliderComponent from "../../SliderComponent";

// Importing redux stuffs
import { connect } from "react-redux";
import { deleteImageAction } from "../../../redux/ImageContainerComponent/imageComponentActions";

//Importing resources
import LoadingImage from "../../../resources/loading-pic.gif";

const ImageComponent = (props) => {
  // Creating useState for uploaded image
  const [uploadImg, setUploadImg] = useState(LoadingImage); // Default image has been set to loading image
  const { deleteImage, read_image_file } = props;

  // Changing the loading image with uploaded image
  useEffect(() => {
    setUploadImg(read_image_file.result);
  }, [read_image_file]);

  return (
    <div className="image-btn-slider-main-container">
      <div className="image-with-btn-container">
        <img src={uploadImg} alt="selected" id="uploaded-pic" />
        <div className="btn-container">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faTrash} />}
              onClick={deleteImage}
              color="error"
            >
              Delete
            </Button>
            <Button
              variant="contained"
              endIcon={<FontAwesomeIcon icon={faDownload} />}
              color="success"
              onClick={() =>
                onDownload(`chobi_${getDateTime()}`, "uploaded-pic")
              }
            >
              Download
            </Button>
          </Stack>
        </div>
      </div>
      <SliderComponent />
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
    deleteImage: () => dispatch(deleteImageAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageComponent);
