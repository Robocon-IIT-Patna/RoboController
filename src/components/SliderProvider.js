import React, { useState, useContext } from "react";

const SliderContext = React.createContext();
const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSlider context must be used within a Slider Provider");
  }
  return context;
};

const SliderProvider = ({ children }) => {
  const initilizeSlider = {
    pSpeed1: 50,
    pSpeed2: 50,
    pSpeed3: 50,
    m1: 50,
    m2: 50,
    m3: 50,
    m4: 50,
    tSpeed1: 50,
    tSpeed2: 50,
    angle: 50,
  };

  const [sliderValues, setSliderValues] = useState(initilizeSlider);

  const updateSliderValue = (sliderId, value) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [sliderId]: value,
    }));
  };

  const getSliderValues = () => {
    return sliderValues;
  };

  return (
    <SliderContext.Provider
      value={{ sliderValues, updateSliderValue, getSliderValues }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export { SliderProvider, useSliderContext, SliderContext };
