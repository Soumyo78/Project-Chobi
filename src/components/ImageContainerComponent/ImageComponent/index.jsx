// Importing style
import "./style.scss";

// Importing react stuffs
import { useState, useEffect } from "react";

// Importing resources
import { Button, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";

// Importing the components
import { get_confirmation } from "../../../global";
import SliderComponent from "../../SliderComponent";
import ModalComponent from "../../ModalComponent";

// Importing redux stuffs
import { connect } from "react-redux";
import { deleteImageAction } from "../../../redux/ImageContainerComponent/imageComponentActions";

//Importing resources
import LoadingImage from "../../../resources/loading-pic.gif";

const ImageComponent = (props) => {
  const { deleteImage, read_image_file } = props;

  // Creating useState for uploaded image
  const [uploadImg, setUploadImg] = useState(LoadingImage); // Default image has been set to loading image

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);

  // Changing the loading image with uploaded image
  useEffect(() => {
    setUploadImg(read_image_file.result);
    document
      .getElementById("brightness-drawer-item")
      .classList.add("selected-active");

    // Getting all the elements of class name 'app-drawer-item'
    let elements = document.getElementsByClassName("app-drawer-item");
    // setting pointer events visible for each element
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.style.pointerEvents = "visible";
      element.style.opacity = 1;
    }
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
              onClick={() => get_confirmation(deleteImage)}
              color="error"
            >
              Delete
            </Button>
            <Button
              variant="contained"
              endIcon={<FontAwesomeIcon icon={faDownload} />}
              color="success"
              onClick={handleModalOpen}
            >
              Download
            </Button>
          </Stack>
        </div>
        <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
