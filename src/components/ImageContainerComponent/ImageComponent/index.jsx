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
import { useSelector, useDispatch } from "react-redux";
import { deleteImageAction } from "../../../redux/ImageContainerComponent/imageComponentActions";

//Importing resources
import LoadingImage from "../../../resources/loading-pic.gif";

const ImageComponent = () => {
  const dispatch = useDispatch();

  // Getting states
  const read_image_file = useSelector(
    (state) => state.imageComponentReducer.read_image_file
  );
  const drawerOptionState = useSelector(
    (state) => state.drawerComponentReducer
  );

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
        <img src={uploadImg} alt="selected" id="uploaded-pic" style={{filter: "brightness(200%)"}} />
        <div className="btn-container">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faTrash} />}
              onClick={() =>
                get_confirmation(() => dispatch(deleteImageAction()))
              }
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

      {/* Rendering conditionally according to selected option */}
      {drawerOptionState.selectedOption === "brightness" ? (
        <SliderComponent
          defaultValue={drawerOptionState.options[0].value}
          minValue={drawerOptionState.options[0].range.min}
          maxValue={drawerOptionState.options[0].range.max}
          unit={drawerOptionState.options[0].unit}
        />
      ) : drawerOptionState.selectedOption === "contrast" ? (
        <SliderComponent
          defaultValue={drawerOptionState.options[1].value}
          minValue={drawerOptionState.options[1].range.min}
          maxValue={drawerOptionState.options[1].range.max}
          unit={drawerOptionState.options[1].unit}
        />
      ) : drawerOptionState.selectedOption === "saturation" ? (
        <SliderComponent
          defaultValue={drawerOptionState.options[2].value}
          minValue={drawerOptionState.options[2].range.min}
          maxValue={drawerOptionState.options[2].range.max}
          unit={drawerOptionState.options[2].unit}
        />
      ) : drawerOptionState.selectedOption === "grayscale" ? (
        <SliderComponent
          defaultValue={drawerOptionState.options[3].value}
          minValue={drawerOptionState.options[3].range.min}
          maxValue={drawerOptionState.options[3].range.max}
          unit={drawerOptionState.options[3].unit}
        />
      ) : drawerOptionState.selectedOption === "sepia" ? (
        <SliderComponent
          defaultValue={drawerOptionState[4].value}
          minValue={drawerOptionState[4].range.min}
          maxValue={drawerOptionState[4].range.max}
          unit={drawerOptionState.options[4].unit}
        />
      ) : drawerOptionState.selectedOption === "hue-rotate" ? (
        <SliderComponent
          defaultValue={drawerOptionState.options[5].value}
          minValue={drawerOptionState.options[5].range.min}
          maxValue={drawerOptionState.options[5].range.max}
          unit={drawerOptionState.options[5].unit}
        />
      ) : drawerOptionState.selectedOption === "blur" ? (
        <SliderComponent
          defaultValue={drawerOptionState.options[6].value}
          minValue={drawerOptionState.options[6].range.min}
          maxValue={drawerOptionState.options[6].range.max}
          unit={drawerOptionState.options[6].unit}
        />
      ) : (
        <SliderComponent defaultValue={50} minValue={0} maxValue={100} />
      )}
    </div>
  );
};

export default ImageComponent;
