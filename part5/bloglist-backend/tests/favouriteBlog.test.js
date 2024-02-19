const listHelper = require("../utils/list_helper")

describe('find favourite blog', () => {
  const listWithNoBlogs = [];
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
  const listWithMultipleBlogs = [
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

  const listWithMultipleBlogsWithEqualLikes = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 20,
      __v: 0
    },
    {
      _id: '1267134badfv891345',
      title: 'Interesting applications of map',
      author: 'Joey Wheeler',
      url: 'https://software-blogs/16432',
      likes: 8,
      __v: 0
    },
    {
      _id: '1lgad0426kljafgasdjfkj',
      title: 'Wild Selectors are harmful',
      author: 'Felix Baldwin',
      url: 'https://software-blogs/162345121623451216234512162345121623451216234512',
      likes: 20,
      __v: 0
    }
  ]

  test('with a zero blog array returns null', () => {
    const result = listHelper.mostLiked(listWithNoBlogs)

    expect(result).toEqual(null)
  })

  test('with a one blog array', () => {
    const result = listHelper.mostLiked(listWithOneBlog)

    expect(result).toEqual(
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
      }
    )   
  })

  test('with multiple blog array', () => {
    const result = listHelper.mostLiked(listWithMultipleBlogs)

    expect(result).toEqual(
      {
        _id: '1267134badfv891345',
        title: 'Interesting applications of map',
        author: 'Joey Wheeler',
        url: 'https://software-blogs/16432',
        likes: 20,
        __v: 0
      }
    )
  })

  test('with multiple blogs that have equal likes, first most liked will be returned', () => {
    const result = listHelper.mostLiked(listWithMultipleBlogsWithEqualLikes)

    expect(result).toEqual(
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 20,
        __v: 0
      }
    )
  })

}) 