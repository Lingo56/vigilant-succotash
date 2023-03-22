import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} {props.number}
      </p>
    </div>
  );
};

const App = () => {
  const name = "guy";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="cat" number={6 * 20} />
      <Hello name={name} number={age} />
      <Hello />
    </div>
  );
};

export default App;
