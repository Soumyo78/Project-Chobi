// Importing the styles
import "./App.scss";

// Importing the components
import DrawerComponent from "./components/DrawerComponent";
import ImageContainerComponent from "./components/ImageContainerComponent";
import NavbarComponent from "./components/NavbarComponent";

// Importing redux stuffs
import storeCreator from "./redux/store";
import { Provider } from "react-redux";

//Calling the store creator function
const store = storeCreator();

// Functional component
const App = () => {
  return (
    <Provider store={store}>
      <div className="app-main-container">
        <NavbarComponent />
        <div className="drawer-image-container">
          <DrawerComponent />
          <ImageContainerComponent />
        </div>
      </div>
    </Provider>
  );
};

// Default export of the component
export default App;
