const listHelper = require('../utils/list_helper')

describe('most likes', () => {
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

  test('returns null when there are no blogs in list', () => {
    const result = listHelper.mostLikes(emptyBlogList)   

    expect(result).toEqual(null)
  })

  test('result will be the author of the first blog with the blog list contains one blog', () => {
    const result = listHelper.mostLikes(listWithOneBlog)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        likes: 5,
      }
    )
  })

  test('result will be the author that has the most likes on their individual posts when all blog authors are unique', () => {
    const result = listHelper.mostLikes(listWithMultipleBlogsWithDifferentAuthors)

    expect(result).toEqual(
      {
        author: 'Joey Wheeler',
        likes: 20,
      }
    )
  })

  test('result will be the author that has the most likes across all blog posts, even if another author has the most liked individual post', () => {
    const result = listHelper.mostLikes(listWithMultipleBlogsWithRepeatAuthors)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        likes: 23,
      }
    )
  })

  test('result will be the author that has the most likes across all blog posts, even when there are multiple authors with multiple blog posts', () => {
    const result = listHelper.mostLikes(listWithMultipleBlogsWithMultipleRepeatAuthors)

    expect(result).toEqual(
      {
        author: 'Edsger W. Dijkstra',
        likes: 41,
      }
    )
  })
})