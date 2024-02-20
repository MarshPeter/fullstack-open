
const Notification = ({ notificationClass, notificationMessage }) => {
  return (
    <div className={ notificationClass }>{ notificationMessage }</div>
  )
}

export default Notification