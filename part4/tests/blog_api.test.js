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
})

test('correct number of blogs are returned without modification to blog database', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)

  expect(response.body).toHaveLength(3)
})

afterAll(async () => {
  await mongoose.connection.close()
})