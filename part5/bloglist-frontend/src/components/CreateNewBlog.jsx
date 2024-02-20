import { useState } from 'react'
import blogService from '../services/blogs'

const CreateNewBlog = ({ handleNotification }) => {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogUrl, setBlogUrl] = useState('')

  const createNewBlog = (event) => {
    event.preventDefault()

    if (!blogTitle || !blogAuthor || !blogUrl) {
      handleNotification('notification error', 'Ensure that all fields are filled out')
      console.log("You need to fill out the title, author and url fields");
    }

    const newBlog = {
      title: blogTitle,
      author: blogAuthor,
      url: blogUrl
    }

    blogService.create(newBlog)
    setBlogTitle('')
    setBlogAuthor('')
    setBlogUrl('')
    handleNotification('notification success', 'Succesfully added blog, refresh to see updates!')
  }

  return (
    <div>
      <div>
        <label htmlFor="blog-title">title: </label>
        <input type="text" name="blog-title" id="blog-title" value={blogTitle} onChange={(e) => {setBlogTitle(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="blog-author">author: </label>
        <input type="text" name="blog-author" id="blog-author" value={blogAuthor} onChange={(e) => {setBlogAuthor(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="blog-url">url: </label>
        <input type="text" name="blog-url" id="blog-url" value={blogUrl} onChange={(e) => {setBlogUrl(e.target.value)}} />
      </div>
      <button onClick={createNewBlog}>create</button>
    </div>
  )
}

export default CreateNewBlog