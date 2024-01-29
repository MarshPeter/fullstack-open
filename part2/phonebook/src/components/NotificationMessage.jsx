export default function NotificationMessage(props) {
    return (
        <div className={props.notificationContainerClasses}>
            <p>{props.notificationText}</p>
        </div>
    );
}
