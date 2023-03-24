import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import "./App.css";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const MyButton = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <MyButton handleClick={() => setToValue(1000)} text="thousand"></MyButton>
      <MyButton handleClick={() => setToValue(0)} text="reset"></MyButton>
      <MyButton
        handleClick={() => setToValue(value + 1)}
        text="increment"
      ></MyButton>
    </div>
  );
};

export default App;
