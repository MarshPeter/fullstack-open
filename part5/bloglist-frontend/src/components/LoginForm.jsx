import { useState } from "react"
import loginService from '../services/login'
import blogService from '../services/blogs'
import Notification from "./Notification"

const LoginForm = ({ setUser, handleNotification, notificationClass, notificationMessage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      handleNotification('notification success', 'Successfully logged in')
    } catch (exception) {
      handleNotification('notification error', 'Wrong username or password')
      console.log("There was an error: ", exception)
    }
  }

  return (
    <div>
      <h2>Login to the application</h2>
      <Notification notificationClass={ notificationClass } notificationMessage={ notificationMessage } />     
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username-input">username: </label>
          <input type="text" id="username-input" value={username} name="Username" onChange={({target}) => setUsername(target.value)} />
        </div>
        <div>
          <label htmlFor="password-input">password: </label>
          <input type="text" id="password-input" value={password} name="Password" onChange={({target}) => setPassword(target.value)} />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm