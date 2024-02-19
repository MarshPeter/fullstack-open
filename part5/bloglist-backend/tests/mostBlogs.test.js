const listHelper = require('../utils/list_helper')

describe('most blogs', () => {
  const emptyBlogList = []
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]
  const listWithMultipleBlogsWithDifferentAuthors = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: '1267134badfv891345',
      title: 'Interesting applications of map',
      author: 'Joey Wheeler',
      url: 'https://software-blogs/16432',
      likes: 20,
      __v: 0
    },
    {
      _id: '1lgad0426kljafgasdjfkj',
      title: 'Wild Selectors are harmful',
      author: 'Felix Baldwin',
      url: 'https://software-blogs/162345121623451216234512162345121623451216234512',
      likes: 18,
      __v: 0
    }
  ]
  const listWithMultipleBlogsWithRepeatAuthors = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: '1267134badfv891345',
      title: 'Interesting applications of map',
      author: 'Joey Wheeler',
      url: 'https://software-blogs/16432',
      likes: 20,
      __v: 0
    },
    {
      _id: '1lgad0426kljafgasdjfkj',
      title: 'Wild Selectors are harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://software-blogs/162345121623451216234512162345121623451216234512',
      likes: 18,
      __v: 0
    }
  ]
  const listWithMultipleBlogsWithMultipleRepeatAuthors = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: '1267134badfv891345',
      title: 'Interesting applications of map',
      author: 'Joey Wheeler',
      url: 'https://software-blogs/16432',
      likes: 20,
      __v: 0
    },
    {
      _id: '1lgad0426kljafgasdjfkj',
      title: 'Wild Selectors are harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://software-blogs/162345121623451216234512162345121623451216234512',
      likes: 18,
      __v: 0
    },
    {
      _id: '1267134badfv891345',
      title: 'Interesting applications of map',
      author: 'Joey Wheeler',
      url: 'https://software-blogs/16432',
      likes: 20,
      __v: 0
    },
    {
      _id: '1lgad0426kljafgasdjfkj',
      title: 'Wild Selectors are harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://software-blogs/162345121623451216234512162345121623451216234512',
      likes: 18,
      __v: 0
    }
  ]

  test('will return null when no blogs in array', () => {
    const result = listHelper.mostBlogs(emptyBlogList);

    expect(result).toEqual(null)
  })

  test('will return a single author with a single blog when there is only one blog in array', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        blogs: 1
      }
    )
  })

  test('will return first author if every blog in array has a unique author', () => {
    const result = listHelper.mostBlogs(listWithMultipleBlogsWithDifferentAuthors)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        blogs: 1
      }
    )
  })

  test('will return author with most blogs if they are the only one to have more than one blog', () => {
    const result = listHelper.mostBlogs(listWithMultipleBlogsWithRepeatAuthors)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        blogs: 2
      }
    )
  })

  test('will return the author with the most blogs even if other authors also have multiple blogs', () => {
    const result = listHelper.mostBlogs(listWithMultipleBlogsWithMultipleRepeatAuthors)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        blogs: 3
      }
    )
  })
})