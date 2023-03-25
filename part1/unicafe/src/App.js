import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const ResultPrint = (props) => {
  if (props.percent === true) {
    return (
      <tbody>
        <tr>
          <td>{props.text}:</td>
          <td>{props.result}%</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      <tr>
        <td>{props.text}:</td>
        <td>{props.result}</td>
      </tr>
    </tbody>
  );
};

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <div>No Feedback Given </div>;
  }

  return (
    <table>
      <ResultPrint text="Good" result={props.good} />
      <ResultPrint text="Neutral" result={props.neutral} />
      <ResultPrint text="Bad" result={props.bad} />
      <ResultPrint text="All" result={props.good + props.neutral + props.bad} />
      <ResultPrint
        text="Average"
        result={
          (props.good - props.bad) / (props.good + props.neutral + props.bad)
        }
      />
      <ResultPrint
        text="Positive"
        result={(props.good / (props.good + props.neutral + props.bad)) * 100}
        percent={true}
      />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header text="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Header text="Results" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
