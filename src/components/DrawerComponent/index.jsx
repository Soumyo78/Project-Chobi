import "./style.scss";
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

const DrawerComponent = () => {
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
            {[
              "Brightness",
              "Contrast",
              "Saturation",
              "Grayscale",
              "Sepia",
              "Hue Rotate",
              "Blur",
            ].map((text, index) => (
              <ListItem button key={text} id={`${text.toLowerCase()}-drawer-item`}>
                <ListItemIcon>
                  {index === 0 ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : index === 1 ? (
                    <FontAwesomeIcon icon={faAdjust} />
                  ) : index === 2 ? (
                    <FontAwesomeIcon icon={faEyeDropper} />
                  ) : index === 3 ? (
                    <FontAwesomeIcon icon={faTintSlash} />
                  ) : index === 4 ? (
                    <FontAwesomeIcon icon={faPalette} />
                  ) : index === 5 ? (
                    <FontAwesomeIcon icon={faSyncAlt} />
                  ) : index === 6 ? (
                    <FontAwesomeIcon icon={faBraille} />
                  ) : (
                    <FontAwesomeIcon icon={faImage} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["About"].map((text, index) => (
              <ListItem button key={text} id={`${text.toLowerCase()}-drawer-item`}>
                <ListItemIcon>
                  {index === 0 ? (
                    <FontAwesomeIcon icon={faInfoCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faImage} />
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

export default DrawerComponent;
