import Notification from "./Notification"

const UserInformation = ({ user, setUser, notificationClass, notificationMessage }) => {
  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  return (
    <div>
      <h2>Blogs</h2>
      <Notification notificationClass={ notificationClass } notificationMessage={ notificationMessage } />
      <p>{user.name} has logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserInformation