// Importing styles
import "./style.scss";
import { Box, Button, Modal } from "@mui/material";

// Importing components
import { getDateTime, onDownload } from "../../global";

const style = {
  position: "absolute",
  top: "50%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComponent = (props) => {
  const { modalOpen, setModalOpen } = props;
  const handleClose = () => setModalOpen(false);

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-download-text">Choose a format to download</div>
        <div className="download-btn-container">
          <Button
            variant="contained"
            onClick={() => {
              onDownload("jpeg", `chobi_${getDateTime()}`, "uploaded-pic");
              setModalOpen(false);
            }}
          >
            Download as JPEG
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              onDownload("png", `chobi_${getDateTime()}`, "uploaded-pic");
              setModalOpen(false);
            }}
          >
            Download as PNG
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

// Default export od component
export default ModalComponent;
