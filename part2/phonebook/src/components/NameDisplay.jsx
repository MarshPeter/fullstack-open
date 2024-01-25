export default function NameDisplay(props) {
    return (
        <p key={props.person.name}>
            {props.person.name} {props.person.number}
        </p>
    );
}
