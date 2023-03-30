import "./App.css";
import { useState } from "react";

const Person = ({ person }) => {
  return <li>{person.name}</li>;
};

//TODO: add ID to list entries
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();

    const personObj = { name: newName, id: persons.length + 1 };

    setPersons(persons.concat(personObj));
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
