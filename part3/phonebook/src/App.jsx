import peopleDb from "./services/persons";
import { useEffect, useState } from "react";
import NameSection from "./components/NameSection";
import PhonebookForm from "./components/PhonebookForm";
import Filter from "./components/Filter";
import NotificationMessage from "./components/NotificationMessage";

function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filterText, setFilterText] = useState("");
    const [notificationContainerClasses, setNotificationContainerClasses] =
        useState("hide");
    const [notificationText, setNotificationText] = useState("");

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
            console.log(persons[i].number.localeCompare(newPhoneNumber));
            if (
                !persons[i].name.localeCompare(newName) &&
                persons[i].number.localeCompare(newPhoneNumber)
            ) {
                const personWishesToUpdatePhoneNumber = confirm(
                    `${newName} is already added to the phonebook, replace the old number (${persons[i].number}) with the new number (${newPhoneNumber})?`
                );

                if (personWishesToUpdatePhoneNumber) {
                    const personsNewDetails = { ...persons[i] };
                    personsNewDetails.number = newPhoneNumber;
                    peopleDb
                        .updatePhoneNumber(persons[i].id, personsNewDetails)
                        .then((data) => {
                            console.log(data);
                            console.log(persons);
                            const updatedPersons = [...persons];
                            updatedPersons[i].number = data.number;
                            setPersons(updatedPersons);

                            setNotificationText(
                                `Successfully modified the phone number of  ${data.name}`
                            );
                            setNotificationContainerClasses("success");

                            setTimeout(() => {
                                setNotificationText("");
                                setNotificationContainerClasses("hide");
                            }, 5000);
                        });
                }

                return;
            } else if (!persons[i].name.localeCompare(newName)) {
                alert(
                    `${newName} is already in the phonebook, with the exact same number, the request will not be added.`
                );
                return;
            }
        }

        peopleDb.addPerson(newName, newPhoneNumber).then((data) => {
            const newPersons = [...persons];
            newPersons.push(data);
            setPersons(newPersons);

            setNotificationText(
                `Successfully added ${newName} to the phonebook`
            );
            setNotificationContainerClasses("success");

            setTimeout(() => {
                setNotificationText("");
                setNotificationContainerClasses("hide");
            }, 5000);
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

        peopleDb
            .deletePerson(id)
            .then(() => {
                const newPersons = persons.filter((person) => person.id !== id);
                setPersons(newPersons);
                setNotificationText(
                    `Successfully deleted ${name} from the phonebook`
                );
                setNotificationContainerClasses("success");

                setTimeout(() => {
                    setNotificationText("");
                    setNotificationContainerClasses("hide");
                }, 5000);
            })
            .catch(() => {
                setNotificationText(
                    `${name} has already been deleted from the server`
                );
                setNotificationContainerClasses("error");

                setTimeout(() => {
                    setNotificationText("");
                    setNotificationContainerClasses("hide");
                }, 5000);
            });
    }

    useEffect(() => {
        peopleDb.getAllPersons().then((initialPeople) => {
            setPersons(initialPeople);
        });
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <NotificationMessage
                notificationContainerClasses={notificationContainerClasses}
                notificationText={notificationText}
            />
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
