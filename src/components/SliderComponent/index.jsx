// Importing the styles
import "./style.scss";

// Importing resources
import { Box, Slider } from "@mui/material";

// Functional component
const SliderComponent = () => {
  return (
    <div className="slider-main-component">
      <Box width={500}>
        <Slider
          classes="slider"
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
};

// Default export of the component
export default SliderComponent;
