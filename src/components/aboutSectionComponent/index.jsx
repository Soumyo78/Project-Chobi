// Importing resources
import "./style.scss";
import { Box, Modal } from "@mui/material";
import DeveloperImage from "../../resources/about-developer-pic.jpg";
import GitHubIcon from "../../resources/github-icon.png";
import LinkedInIcon from "../../resources/linkedin-icon.png";
import EmailIcon from "../../resources/email-icon.png";
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

const AboutSectionComponent = (props) => {
  const { openAboutSection, handleCloseAboutSection } = props;

  return (
    <Modal
      open={openAboutSection}
      onClose={handleCloseAboutSection}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>ছবি (Chobi) - A Simple Photo Editor</h2>
        <div className="about-description-container">
          <div id="version-text">version: 0.1.0</div>
          <div id="about-chobi-text">
            This is simple image manipulating application built using ReactJs,
            Material UI, Redux.
          </div>
          <div className="about-developer-container">
            <div id="about-developer-text">About Developer:</div>
            <div className="developer-img-text-container">
              <img
                src={DeveloperImage}
                alt="developer's picture"
                id="developer-image"
              />
              <div className="developer-about-section-text">
                Hello, I am Soumyo Roy, I am from west Bengal, India. Currently
                I am working as back-end software developer at Alien Brains.
                Still learning Full Stack Development.
              </div>
            </div>
            <div className="contact-developer-container">
              <a
                href="https://github.com/Soumyo78"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={GitHubIcon}
                  alt="developer's github account"
                  className="about-developer-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/soumyo-roy-712662176/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={LinkedInIcon}
                  alt="developer's linkedin account"
                  className="about-developer-icon"
                />
              </a>
              <a href="mailto:soumyo78@yahoo.com">
                <img
                  src={EmailIcon}
                  alt="developer's email account"
                  className="about-developer-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AboutSectionComponent;
