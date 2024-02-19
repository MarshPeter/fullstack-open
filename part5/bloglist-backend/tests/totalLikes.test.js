const listHelper = require("../utils/list_helper")

describe('total likes', () => {
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
  const listWithMultipleBlogsWithOneHavingNotZeroLikes = [
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
      likes: 0,
      __v: 0
    }
  ]

  test('returns 0 when there are no blogs', () => {
    const result = listHelper.totalLikes(listWithNoBlogs)

    expect(result).toBe(0)
  })

  test('When one item list, returns likes equal to exact likes of that single blog', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('When multiple blogs, returns likes equal to all likes across all blogs', () => {
    const result = listHelper.totalLikes(listWithMultipleBlogs)
    expect(result).toBe(43)
  })

  test("When multiple blogs, where only a single blogs has more than zero likes," + 
  " the result should be equal to that single blog's likes", () => {
    const result = listHelper.totalLikes(listWithMultipleBlogsWithOneHavingNotZeroLikes)
    expect(result).toBe(5)
  })
})