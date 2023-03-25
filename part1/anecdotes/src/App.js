import "./App.css";
import { useState } from "react";

const Winner = (props) => {
  if (props.votes[props.mostVotes] !== 0) {
    return (
      <div>
        <h3>Most votes</h3>
        <p>{props.anecdotes[props.mostVotes]}</p>
        <p>With {props.votes[props.mostVotes]} votes</p>
      </div>
    );
  }
};

const App = () => {
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  const [mostVoteIndex, setMostVoteIndex] = useState(0);

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    if (newVotes[selected] > newVotes[mostVoteIndex]) {
      const newMostVotes = selected;
      setMostVoteIndex(newMostVotes);
    }
  };

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]} votes</p>
      <button onClick={() => handleVoteClick()}>Vote</button>
      <button onClick={() => handleAnecdoteClick()}>New Anecdote</button>

      <Winner anecdotes={anecdotes} votes={votes} mostVotes={mostVoteIndex} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

export default App;
