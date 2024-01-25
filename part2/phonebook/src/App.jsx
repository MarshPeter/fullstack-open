import { useState } from "react";

function App() {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-1234567" },
    ]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filterText, setFilterText] = useState("");

    function handleNameTextChange(e) {
        setNewName(e.target.value);
    }

    function handlePhoneTextChange(e) {
        setNewPhoneNumber(e.target.value);
    }

    function handleFilterTextChange(e) {
        setFilterText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!newName || !newPhoneNumber) {
            alert(
                "There must be both a name and a phone number entered to submit yourself to the phoneboo"
            );
            return;
        }

        for (let i = 0; i < persons.length; i++) {
            // returns 0 if equal which is falsey
            if (!persons[i].name.localeCompare(newName)) {
                alert(`${newName} is already added to the phonebook`);
                return;
            }
        }
        const newPersons = [...persons];
        newPersons.push({ name: newName, number: newPhoneNumber });
        setPersons(newPersons);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <p>Look for names containing: </p>
                <input
                    value={filterText}
                    onChange={handleFilterTextChange}
                    type="text"
                />
            </div>
            <h2>Add a new Individual</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    name:{" "}
                    <input value={newName} onChange={handleNameTextChange} />
                </div>
                <div>
                    number:{" "}
                    <input
                        value={newPhoneNumber}
                        onChange={handlePhoneTextChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filterText
                ? persons.map((person) => {
                      if (
                          !person.name
                              .toLowerCase()
                              .includes(filterText.trim().toLowerCase())
                      ) {
                          return;
                      }
                      return (
                          <p key={person.name}>
                              {person.name} {person.number}
                          </p>
                      );
                  })
                : persons.map((person) => {
                      return (
                          <p key={person.name}>
                              {person.name} {person.number}
                          </p>
                      );
                  })}
        </div>
    );
}

export default App;
