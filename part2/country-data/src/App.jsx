import { useState } from "react";
import { useEffect } from "react";
import countriesService from "./services/countries";
import CountryListing from "./components/CountryListing";
import HighlightedListing from "./components/HighlightedListing";

function App() {
    const [nameSearch, setNameSearch] = useState(null);
    const [allCountries, setAllCountries] = useState(null);
    const [matchedCountries, setMatchedCountries] = useState(null);
    const [highlightedListing, setHighlightedListing] = useState(null);

    function handleTextSearchChange(e) {
        e.preventDefault();
        setNameSearch(e.target.value);
    }

    useEffect(() => {
        console.log("Fetching Data");
        countriesService.getAllCountries().then((data) => {
            setAllCountries(data);
        });
    }, []);

    useEffect(() => {
        if (allCountries && nameSearch) {
            const validCountries = [];

            for (let i = 0; i < allCountries.length; i++) {
                if (
                    allCountries[i].name.official
                        .toLowerCase()
                        .includes(nameSearch)
                ) {
                    validCountries.push(allCountries[i]);
                }
            }

            if (validCountries.length === 1) {
                setHighlightedListing(validCountries[0]);
            } else {
                setHighlightedListing(null);
            }

            setMatchedCountries(validCountries);
        }
    }, [nameSearch, allCountries]);

    console.log(matchedCountries);

    return (
        <div>
            <div>
                <label htmlFor="country-input">find countries</label>
                <input
                    type="text"
                    id="country-input"
                    onChange={handleTextSearchChange}
                />
            </div>
            <div>
                <CountryListing matchedCountries={matchedCountries} />
            </div>
            <div>
                <HighlightedListing highlightedListing={highlightedListing} />
            </div>
        </div>
    );
}

export default App;
