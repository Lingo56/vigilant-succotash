import "./App.css";
import { useState } from "react";

const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const Search = (props) => {
  const handleSearch = (event) => {
    const results = props.persons.filter((person) => {
      if (event.target.value === "") return props.persons;
      return person.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    props.setFilter({ query: event.target.value, list: results });
  };

  return (
    <div>
      Search: <input value={props.filter.query} onChange={handleSearch} />
    </div>
  );
};

const EntryForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addEntry = (event) => {
    event.preventDefault();
    const personObj = { name: newName, number: newNumber };

    if (!props.persons.find((p) => p.name === personObj.name)) {
      props.setPersons(props.persons.concat(personObj));
      setNewName("");
    } else {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addEntry}>
      <div>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName}</div>
      </div>
    </form>
  );
};

const Phonebook = ({ persons, filter }) => {
  return (
    <ul>
      {filter.query === ""
        ? persons.map((person) => <Person key={person.name} person={person} />)
        : filter.list.map((person) => (
            <Person key={person.name} person={person} />
          ))}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "604 576 9090" },
    { name: "Testing Tester", number: "604 576 2213" },
  ]);
  const [filter, setFilter] = useState({ query: "", list: [] });

  return (
    <div>
      <h2>Phonebook</h2>
      <Search persons={persons} filter={filter} setFilter={setFilter} />
      <h2>Enter new number</h2>
      <EntryForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Phonebook persons={persons} filter={filter} />
    </div>
  );
};

export default App;
