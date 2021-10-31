import "./App.scss";
import DrawerComponent from "./components/DrawerComponent";
import ImageContainerComponent from "./components/ImageContainerComponent";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  return (
    <div className="app-main-container">
      <NavbarComponent />
      <div className="drawer-image-container">
        <DrawerComponent />
        <ImageContainerComponent />
      </div>
    </div>
  );
};

export default App;
