import "./style.scss";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

const NavbarComponent = () => {
  return (
    <div className="navbar-main-container">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            ছবি (Chobi) - Photo Editor
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarComponent;
