import "./style.scss";
import { ReactComponent as ImageContainerPic1 } from "../../../resources/image-upload-pic-1.svg";
import { styled, Button, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Input = styled("input")({
  display: "none",
});

const NoImageComponent = () => {
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

export default NoImageComponent;
