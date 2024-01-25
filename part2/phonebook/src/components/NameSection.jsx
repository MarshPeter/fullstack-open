import NameDisplay from "./NameDisplay";

export default function NameSection(props) {
    return (
        <div>
            {props.filterText
                ? props.persons.map((person) => {
                      if (
                          !person.name
                              .toLowerCase()
                              .includes(props.filterText.trim().toLowerCase())
                      ) {
                          return;
                      }
                      return <NameDisplay key={person.name} person={person} />;
                  })
                : props.persons.map((person) => {
                      return <NameDisplay key={person.name} person={person} />;
                  })}
        </div>
    );
}
