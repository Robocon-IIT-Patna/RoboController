import React, { useState, useEffect } from "react";

const TriggerButtons = () => {
  const [buttonStates, setButtonStates] = useState({
    pick: false,
    drive: false,
    launch: false,
  });

  const handleClick = (id) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  useEffect(() => {
    const sendRequest = async (id, value) => {
      try {
        const response = await fetch("http://localhost:4000/trigger", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(buttonStates),
        });

        const data = await response.json();
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    };
    sendRequest();
  }, [buttonStates]);
  return (
    <div className="trigger-container">
      <button
        className="trigger-button warning-btn"
        onClick={() => handleClick("pick")}
      >
        {buttonStates["pick"] ? "Release" : "Pick"}
      </button>
      <button
        className={
          buttonStates.drive
            ? "trigger-button red-btn"
            : "trigger-button success-btn"
        }
        onClick={() => handleClick("drive")}
      >
        {buttonStates["drive"] ? "Stop" : "Start"}
      </button>
      <button
        className="trigger-button blue-btn"
        onClick={() => handleClick("launch")}
      >
        {buttonStates["launch"] ? "Reload" : "Launch"}
      </button>
    </div>
  );
};

export default TriggerButtons;
