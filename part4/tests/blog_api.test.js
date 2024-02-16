const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/Blog')
const helper = require("./api_test_helper.js")

beforeEach(async () => {
  await Blog.deleteMany({})

  console.log('database cleared')

  const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)

  console.log('database populated')
}, 10000)

test('correct number of blogs are returned without modification to blog database', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)

  expect(response.body).toHaveLength(3)
})

test('ensure that all blogs are returned with an "id" key', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)

    response.body.forEach((blog) => expect(blog.id).toBeDefined())
})

test('ensure that new blogs are successfully added to the database', async () => {
  const newBlog = {
    title: "A new day for javascript",
    author: "Joey Wheeler",
    url: "https://test-blogs.com/agjlaskd98985fasd4g5678asd76f",
    likes: 13
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  const response = await api
    .get('/api/blogs')
    .expect(200)

  expect(response.body).toHaveLength(4)
})

test('ensure that blogs can be successfully deleted', async () => {
  console.log('start');
  const blogs = await Blog.find({})
  console.log('found blogs');
  let id = blogs[0].toJSON().id
  console.log(`id is: ${id}`);

  await api
    .delete(`/api/blogs/${id}`)
    .expect(200)

  console.log('deleted response')
  const response = await api
    .get('/api/blogs')
    .expect(200)

  expect(response.body).toHaveLength(2)
})

test('update blogs by id', async () => {
  const updatedBlog = {
    title: "Functional javascript methods",
    author: "Joey Wheeler",
    url: "https://test-blogs.com/jgasd8y1235",
    likes: 30
  }

  const response = await api
    .get('/api/blogs')
    .expect(200)

  const id = response.body[0].id

  await api
    .put(`/api/blogs/${id}`)
    .send(updatedBlog)
    .expect(201)

  const newResponse = await api
    .get('/api/blogs')
    .expect(200)

  expect(newResponse.body[0].likes).toBe(30)
}, 10000)

afterAll(async () => {
  await mongoose.connection.close()
})