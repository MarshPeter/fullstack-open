import { useState } from "react";
import NameDisplay from "./components/NameDisplay";
import NameSection from "./components/NameSection";
import PhonebookForm from "./components/PhonebookForm";
import Filter from "./components/Filter";

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
            <Filter
                filterText={filterText}
                handleFilterTextChange={handleFilterTextChange}
            />
            <PhonebookForm
                handleFormSubmit={handleFormSubmit}
                handleNameTextChange={handleNameTextChange}
                handlePhoneTextChange={handlePhoneTextChange}
                newName={newName}
                newPhoneNumber={newPhoneNumber}
            />
            <h2>Numbers</h2>
            <NameSection persons={persons} filterText={filterText} />
        </div>
    );
}

export default App;
