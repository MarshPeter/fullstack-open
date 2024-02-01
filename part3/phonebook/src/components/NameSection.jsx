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
                      return (
                          <div key={person.name}>
                              <NameDisplay
                                  person={person}
                                  onClick={props.deletePersonHandle}
                              />
                          </div>
                      );
                  })
                : props.persons.map((person) => {
                      return (
                          <div key={person.name}>
                              <NameDisplay
                                  person={person}
                                  onClick={props.deletePersonHandle}
                              />
                          </div>
                      );
                  })}
        </div>
    );
}
