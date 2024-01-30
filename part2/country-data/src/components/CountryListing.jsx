export default function CountryListing(props) {
    const matchedCountries = props.matchedCountries;
    console.log(matchedCountries);

    if (!matchedCountries) {
        return <div>Enter a search term to find results</div>;
    }

    if (matchedCountries.length > 10) {
        return (
            <div>
                There are too many results to list. Restrict search to less than
                10 results to see them
            </div>
        );
    }

    if (matchedCountries.length < 2) {
        return null;
    }

    return (
        <div>
            {matchedCountries.map((country) => {
                return (
                    <div key={country.name.common}>
                        <p>{country.name.common}</p>
                        <button
                            onClick={props.handleShowCountry}
                            value={country.name.common}
                        >
                            show details
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
