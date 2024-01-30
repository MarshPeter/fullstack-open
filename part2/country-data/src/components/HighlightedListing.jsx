export default function HighlightedListing(props) {
    const specifiedCountry = props.highlightedListing;
    if (!specifiedCountry) {
        return null;
    }

    const languages = Object.values(specifiedCountry.languages);
    console.log(languages);

    return (
        <div>
            <h2>{specifiedCountry.name.common}</h2>
            <p>capital: {specifiedCountry.capital[0]}</p>
            <p>area: {specifiedCountry.area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map((language) => {
                    return <li key={language}>{language}</li>;
                })}
            </ul>
            <img
                src={specifiedCountry.flags.png}
                alt={`flag of ${specifiedCountry.name.common}`}
                height={150}
                width={150}
            />
        </div>
    );
}
