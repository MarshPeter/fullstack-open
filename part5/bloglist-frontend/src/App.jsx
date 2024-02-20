import { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import UserInformation from './components/UserInformation'
import CreateNewBlog from './components/CreateNewBlog'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

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

  return (
    <div>
      { user === null && <LoginForm setUser={setUser} /> }
      { user !== null && <UserInformation user={user} setUser={setUser} /> }
      { user !== null && <CreateNewBlog /> }
      { user !== null && <Blogs blogs={blogs} /> }
    </div>
  )
}

export default App