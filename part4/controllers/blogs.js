const blogsRouter = require('express').Router();
const Blog = require('../models/Blog')
const User = require('../models/User')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })

  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const user = await User.findOne({})
  const blogDetails = request.body

  const blog = new Blog({
    title: blogDetails.title,
    author: blogDetails.author,
    url: blogDetails.url,
    likes: blogDetails.likes,
    user: user.id 
  })

  const result = await blog.save()
  console.log(result);
  user.blogs = user.blogs.concat(result._id)
  await user.save()

  response.status(201).json(result)
})

blogsRouter.delete('/:id', async (request, response) => {
  const result = await Blog.findByIdAndDelete(request.params.id)

  response.status(200).send('success')
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const id = request.params.id

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  await Blog.findByIdAndUpdate(id, blog, { new: true })

  response.status(201).send('success')
})



module.exports = blogsRouter
