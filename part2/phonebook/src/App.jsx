import { useState } from "react";

function App() {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    function handleTextChange(e) {
        setNewName(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        for (let i = 0; i < persons.length; i++) {
            // returns 0 if equal which is falsey
            if (!persons[i].name.localeCompare(newName)) {
                alert(`${newName} is already added to the phonebook`);
                return;
            }
        }
        const newPersons = [...persons];
        newPersons.push({ name: newName });
        setPersons(newPersons);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    name: <input value={newName} onChange={handleTextChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => {
                return <p key={person.name}>{person.name}</p>;
            })}
        </div>
    );
}

export default App;
