import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

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
    const request = axios.delete(baseUrl + `/${id}`);

    return request;
}

function updatePhoneNumber(id, updatedDetails) {
    const request = axios.put(baseUrl + `/${id}`, updatedDetails);

    return request.then((response) => response.data);
}

export default {
    getAllPersons,
    addPerson,
    deletePerson,
    updatePhoneNumber,
};
