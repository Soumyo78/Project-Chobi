import "./style.scss";
import { useState } from "react";
import NoImageComponent from "./NoImageComponent";
import { ReactComponent as LoadingImage } from "../../resources/loading-pic.svg";
import { Button, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getDateTime } from "../../global";

const ImageContainerComponent = () => {
  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 1) {
        setUploadedImg(<LoadingImage />);
      }

      const onDownload = () => {
        const link = document.createElement("a");
        link.download = `chobi_${getDateTime()}`;
        link.href = document.getElementById("uploaded-pic").src;
        link.click();
      };

      if (reader.readyState === 2) {
        setUploadedImg(
          <div className="image-with-btn-container">
            <img src={reader.result} alt="selected" id="uploaded-pic" />
            <div className="btn-container">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<FontAwesomeIcon icon={faTrash} />}
                  onClick={() =>
                    setUploadedImg(<NoImageComponent onChange={imgHandler} />)
                  }
                  color="error"
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  endIcon={<FontAwesomeIcon icon={faDownload} />}
                  color="success"
                  onClick={onDownload}
                >
                  Download
                </Button>
              </Stack>
            </div>
          </div>
        );
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const [uploadedImg, setUploadedImg] = useState(
    <NoImageComponent onChange={imgHandler} />
  );

  window.onbeforeunload = function () {
    return "Image will be lost if you leave the page, are you sure?";
  };

  return (
    <div className="image-main-container">
      <div className="image-holder">{uploadedImg}</div>
    </div>
  );
};

export default ImageContainerComponent;
