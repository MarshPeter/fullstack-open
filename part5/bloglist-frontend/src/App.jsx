import { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import UserInformation from './components/UserInformation'
import CreateNewBlog from './components/CreateNewBlog'
import "./app.css"

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationClass, setNotificationClass] = useState('hide')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleNotification = (classes, message) => {
    setNotificationClass(classes)
    setNotificationMessage(message)

    setTimeout(() => {
      setNotificationClass('hide')
      setNotificationMessage('')
    }, 5000)
  }

  return (
    <div>
      { user === null && <LoginForm 
        setUser={ setUser }
        handleNotification={ handleNotification } 
        notificationClass={ notificationClass } 
        notificationMessage={ notificationMessage } 
      /> }
      { user !== null && <UserInformation 
        user={ user } 
        setUser={ setUser }
        notificationClass={ notificationClass } 
        notificationMessage={ notificationMessage } 
       /> }
      { user !== null && <CreateNewBlog handleNotification={ handleNotification } /> }
      { user !== null && <Blogs blogs={ blogs } /> }
    </div>
  )
}

export default App