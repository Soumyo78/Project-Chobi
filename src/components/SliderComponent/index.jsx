// Importing the styles
import "./style.scss";

// Importing resources
import { Box, Slider } from "@mui/material";

// Functional component
const SliderComponent = (props) => {
  const { defaultValue, minValue, maxValue, unit } = props;

  // Creating on hover value with unit
  const valueLabelFormat = (value) => {
    let scaledValue = value;
    return `${scaledValue} ${unit ? unit : ""}`;
  }

  const onSliderChange = ({target}) =>{
    console.log(target.value)
  }

  return (
    <div className="slider-main-component">
      <Box width={500}>
        <Slider
          classes="slider"
          defaultValue={defaultValue}
          valueLabelFormat={valueLabelFormat}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={minValue}
          max={maxValue}
          onChange={onSliderChange}
        />
      </Box>
    </div>
  );
};

// Default export of the component
export default SliderComponent;
