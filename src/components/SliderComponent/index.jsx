// Importing the styles
import "./style.scss";

// Importing resources
import { Box, Slider } from "@mui/material";

// Import redux stuff
import { useSelector, useDispatch } from "react-redux";
import {
  changeBrightnessAction,
  changeContrastAction,
  changeSaturationAction,
  changeGrayscaleAction,
  changeSepiaAction,
  changeHueRotateAction,
  changeBlurAction,
} from "../../redux/SliderComponent/sliderComponentActions";


import { drawerItems } from "../DrawerComponent/drawerItems";

// Functional component
const SliderComponent = (props) => {
  const { selectedOptionIndex } = props;

  const drawerOptionState = useSelector(
    (state) => state.drawerComponentReducer.options
  );

  const dispatch = useDispatch();

  // Creating on hover value with unit
  const valueLabelFormat = (value) => {
    let scaledValue = value;
    return `${scaledValue} ${
      drawerOptionState[selectedOptionIndex].unit
        ? drawerOptionState[selectedOptionIndex].unit
        : ""
    }`;
  };

  const onSliderChange = ({ target }) => {
    switch (selectedOptionIndex) {
      case 0:
        dispatch(changeBrightnessAction(target.value));
        drawerOptionState[0].value = target.value;
        console.log(drawerOptionState[0].value)
        console.log(drawerItems[0].value)
        break;
      case 1:
        dispatch(changeContrastAction(target.value));
        drawerOptionState[1].value = target.value;
        break;
      case 2:
        dispatch(changeSaturationAction(target.value));
        drawerOptionState[2].value = target.value;
        break;
      case 3:
        dispatch(changeGrayscaleAction(target.value));
        drawerOptionState[3].value = target.value;
        break;
      case 4:
        dispatch(changeSepiaAction(target.value));
        drawerOptionState[4].value = target.value;
        break;
      case 5:
        dispatch(changeHueRotateAction(target.value));
        drawerOptionState[5].value = target.value;
        break;
      case 6:
        dispatch(changeBlurAction(target.value));
        drawerOptionState[6].value = target.value;
        break;
    }
  };

  return (
    <div className="slider-main-component">
      <Box width={500}>
        <Slider
          key={`slider-${drawerOptionState[selectedOptionIndex].property}`}
          classes="slider"
          defaultValue={drawerOptionState[selectedOptionIndex].value}
          valueLabelFormat={valueLabelFormat}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={drawerOptionState[selectedOptionIndex].range.min}
          max={drawerOptionState[selectedOptionIndex].range.max}
          onChange={onSliderChange}
        />
      </Box>
    </div>
  );
};

// Default export of the component
export default SliderComponent;
