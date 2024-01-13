import React, { useState } from "react";

const CommandBar = () => {
  const [inputText, setInputText] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendRequest = async () => {
    try {
      const repsonse = await fetch("http://localhost:4000/cmd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ command: inputText }),
      });

      const data = await repsonse.json();
      setResponseMessage(data.message);
      setInputText("");
    } catch (err) {
      console.error("Error sending command:", err);
    }
  };

  return (
    <div className="command-input-container">
      <input
        className="command-input"
        type="text"
        value={inputText}
        placeholder="Enter Command"
        onChange={handleInputChange}
      />
      <button className="trigger-button black-btn" onClick={handleSendRequest}>
        Send
      </button>
    </div>
  );
};

export default CommandBar;
