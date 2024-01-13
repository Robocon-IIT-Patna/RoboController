import Slider from "./Slider";
import { useSliderContext } from "./SliderProvider";

const SliderContainer = ({ containerName, sliders }) => {
  const { sliderValues, updateSliderValue } = useSliderContext();
  const handleSliderChange = (sliderId, value) => {
    updateSliderValue(sliderId, value);
  };
  return (
    <div className="slider-container">
      <div className="slider-title">
        <h2>{containerName}</h2>
      </div>
      <div className="sliders">
        {sliders.map((slider) => (
          <Slider
            key={slider.id}
            label={`${slider.name}`}
            value={sliderValues[slider.id] || 50}
            onChange={(newValue) => handleSliderChange(slider.id, newValue)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderContainer;
