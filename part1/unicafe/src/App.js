import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const ResultPrint = (props) => {
  return (
    <p>
      {props.text} {props.result}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Header text="Results" />
      <ResultPrint text="Good" result={good} />
      <ResultPrint text="Neutral" result={neutral} />
      <ResultPrint text="Bad" result={bad} />
    </div>
  );
};

export default App;
