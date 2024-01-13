import React from "react";
import SliderContainer from "./SliderContainer";
import { SliderProvider } from "./SliderProvider";
import SendData from "./SendData";

const SliderWrapper = () => {
  const sliders1 = [
    { id: "pSpeed1", name: "Speed 1" },
    { id: "pSpeed2", name: "Speed 2" },
    { id: "pSpeed3", name: "Speed 3" },
  ];
  const sliders2 = [
    { id: "m1", name: "M1" },
    { id: "m2", name: "M2" },
    { id: "m3", name: "M3" },
    { id: "m4", name: "M4" },
  ];
  const sliders3 = [
    { id: "tSpeed1", name: "Speed 1" },
    { id: "tSpeed2", name: "Speed 2" },
    { id: "angle", name: "Angle" },
  ];
  return (
    <SliderProvider>
      <div className="slider-root-container">
        <div className="slider-parent-container">
          <div className="start-button-container">
            <SendData />
          </div>
          <div className="slider-flexbox">
            <SliderContainer containerName="Pick" sliders={sliders1} />
            <SliderContainer containerName="Drive" sliders={sliders2} />
            <SliderContainer containerName="Throw" sliders={sliders3} />
          </div>
        </div>
      </div>
    </SliderProvider>
  );
};

export default SliderWrapper;
