export default function NameDisplay(props) {
    return (
        <p key={props.person.name}>
            {props.person.name} {props.person.number}{" "}
            <button value={props.person.id} onClick={props.onClick}>
                delete
            </button>
        </p>
    );
}
