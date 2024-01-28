import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

function getAllPersons() {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
}

function addPerson(name, number) {
    const newPerson = {
        name: name,
        number: number,
    };

    const request = axios.post(baseUrl, newPerson);

    return request.then((response) => response.data);
}

function deletePerson(id) {
    axios.delete(baseUrl + `/${id}`);
}

export default {
    getAllPersons,
    addPerson,
    deletePerson,
};
