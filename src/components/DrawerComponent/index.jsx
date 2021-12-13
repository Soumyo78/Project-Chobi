// Importing resources
import "./style.scss";

// Importing react stuffs
import ReactDOM from "react-dom";

// Importing redux stuffs
import { useSelector, useDispatch } from "react-redux";
import {
  changeBrightnessAction,
  changeContrastAction,
  changeSaturationAction,
  changeGrayscaleAction,
  changeSepiaAction,
  changeHueRotateAction,
  changeBlurAction,
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

const drawerWidth = 200;

// Functional component
const DrawerComponent = () => {
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

    console.log(document.querySelector(".selected-active").id)
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
            {["About"].map((text, index) => (
              <ListItem
                button
                key={text}
                id={`${text.toLowerCase()}-drawer-item`}
                onClick={onClickAppBarItem}
                className={"app-drawer-item"}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="font-awesome-icon"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faImage}
                      className="font-awesome-icon"
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

// Default export of the component
export default DrawerComponent;
