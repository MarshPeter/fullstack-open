import axios from "axios";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api";

function getAllCountries() {
    const request = axios.get(`${baseURL}/all`);

    return request.then((res) => res.data);
}

export default {
    getAllCountries,
};
