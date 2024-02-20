
const UserInformation = ({ user, setUser }) => {
  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  return (
    <div>
      <h2>Blogs</h2>
      <p>{user.name} has logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserInformation