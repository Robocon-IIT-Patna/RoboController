import React, { useState, useEffect } from "react";
import { useSliderContext } from "./SliderProvider";

const SendData = () => {
  const { getSliderValues } = useSliderContext();
  const [isSending, setIsSending] = useState(false);
  const sendAllSliderValues = async (allSliderValues) => {
    try {
      const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allSliderValues),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending slider values:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isSending) {
        const allSliderValues = getSliderValues();
        sendAllSliderValues(allSliderValues);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isSending, getSliderValues]);

  const handleToggleSending = () => {
    setIsSending((prevIsSending) => !prevIsSending);
  };

  return (
    <div>
      <button
        className={
          isSending ? "start-button red-btn" : "start-button success-btn"
        }
        onClick={handleToggleSending}
      >
        {isSending ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default SendData;
