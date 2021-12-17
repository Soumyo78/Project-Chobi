// Importing styles
import "./style.scss";

// Importing react stuffs
import ReactDOM from "react-dom";
import { useState } from "react";

// Importing redux stuffs
import { useSelector, useDispatch } from "react-redux";
import {
  selectBrightnessAction,
  selectContrastAction,
  selectSaturationAction,
  selectGrayscaleAction,
  selectSepiaAction,
  selectHueRotateAction,
  selectBlurAction,
} from "../../redux/DrawerComponent/drawerComponentActions";

// Importing resources
import {
  Drawer,
  ListItem,
  List,
  Divider,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faImage,
  faAdjust,
  faEyeDropper,
  faTintSlash,
  faPalette,
  faSyncAlt,
  faBraille,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

// Importing components
import AboutSectionComponent from "../aboutSectionComponent";

const drawerWidth = 200;

// Functional component
const DrawerComponent = () => {
  const [openAboutSection, setOpenAboutSection] = useState(false);
  const handleOpenAboutSection = () => setOpenAboutSection(true);
  const handleCloseAboutSection = () => setOpenAboutSection(false);

  const dispatch = useDispatch();

  const appBarOptions = useSelector(
    (state) => state.drawerComponentReducer.options
  );

  const onClickAppBarItem = (e) => {
    // Getting the element with class name 'selected-active' and remove the class
    ReactDOM.findDOMNode(
      document.querySelector(".selected-active")
    ).classList.remove("selected-active");

    // Applying the class 'selected-active' to the target element
    let element = e.currentTarget;
    element.classList.add("selected-active");

    switch (document.querySelector(".selected-active").id) {
      case "brightness-drawer-item":
        dispatch(selectBrightnessAction());
        break;
      case "contrast-drawer-item":
        dispatch(selectContrastAction());
        break;
      case "saturate-drawer-item":
        dispatch(selectSaturationAction());
        break;
      case "grayscale-drawer-item":
        dispatch(selectGrayscaleAction());
        break;
      case "sepia-drawer-item":
        dispatch(selectSepiaAction());
        break;
      case "hue-rotate-drawer-item":
        dispatch(selectHueRotateAction());
        break;
      case "blur-drawer-item":
        dispatch(selectBlurAction());
        break;
      default:
        console.log("This is the default case for drawer component.");
        break;
    }
  };

  return (
    <div className="drawer-main-container">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {appBarOptions.map((optionItem, index) => (
              <ListItem
                button
                key={optionItem.property}
                id={`${optionItem.property.toLowerCase()}-drawer-item`}
                onClick={onClickAppBarItem}
                className={"app-drawer-item"}
              >
                <ListItemIcon disabled={true}>
                  {index === 0 ? (
                    <FontAwesomeIcon
                      icon={faSun}
                      className="font-awesome-icon"
                    />
                  ) : index === 1 ? (
                    <FontAwesomeIcon
                      icon={faAdjust}
                      className="font-awesome-icon"
                    />
                  ) : index === 2 ? (
                    <FontAwesomeIcon
                      icon={faEyeDropper}
                      className="font-awesome-icon"
                    />
                  ) : index === 3 ? (
                    <FontAwesomeIcon
                      icon={faTintSlash}
                      className="font-awesome-icon"
                    />
                  ) : index === 4 ? (
                    <FontAwesomeIcon
                      icon={faPalette}
                      className="font-awesome-icon"
                    />
                  ) : index === 5 ? (
                    <FontAwesomeIcon
                      icon={faSyncAlt}
                      className="font-awesome-icon"
                    />
                  ) : index === 6 ? (
                    <FontAwesomeIcon
                      icon={faBraille}
                      className="font-awesome-icon"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faImage}
                      className="font-awesome-icon"
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={optionItem.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key="about"
              id={"about-drawer-item"}
              onClick={handleOpenAboutSection}
              className={"app-drawer-about"}
            >
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="font-awesome-icon"
                />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <AboutSectionComponent
        openAboutSection={openAboutSection}
        handleCloseAboutSection={handleCloseAboutSection}
      />
    </div>
  );
};

// Default export of the component
export default DrawerComponent;
