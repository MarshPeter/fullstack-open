import peopleDb from "./services/persons";
import { useEffect, useState } from "react";
import NameSection from "./components/NameSection";
import PhonebookForm from "./components/PhonebookForm";
import Filter from "./components/Filter";

function App() {
    const [persons, setPersons] = useState([]);
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

        peopleDb.addPerson(newName, newPhoneNumber).then((data) => {
            const newPersons = [...persons];
            newPersons.push(data);
            setPersons(newPersons);
        });
    }

    function handlePersonDelete(e) {
        const id = e.target.value;
        let name = "";
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].id === id) {
                name = persons[i].name;
                break;
            }
        }
        e.preventDefault();
        const userIsSure = confirm(`Are you sure you wish to delete ${name}`);

        if (!userIsSure) {
            return;
        }

        peopleDb.deletePerson(id);

        const newPersons = persons.filter((person) => person.id !== id);
        setPersons(newPersons);
    }

    useEffect(() => {
        peopleDb
            .getAllPersons()
            .then((initialPeople) => setPersons(initialPeople));
    }, []);

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
            <NameSection
                persons={persons}
                filterText={filterText}
                deletePersonHandle={handlePersonDelete}
            />
        </div>
    );
}

export default App;
