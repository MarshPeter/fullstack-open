function dummy(blogs) {
  return 1;
} 

function totalLikes(blogs) {
  if (blogs.length === 0) {
    return 0;
  }

  return blogs.reduce((acc, curr) => acc += curr.likes, 0);
}

function mostLiked(blogs) {
  if (blogs.length === 0) {
    return null;
  }

  let mostLikedBlog = blogs[0];

  for (let i = 1; i < blogs.length; i++) {
    if (blogs[i].likes > mostLikedBlog.likes) {
      mostLikedBlog = blogs[i]
    }
  }

  return mostLikedBlog
}

function mostBlogs(blogs) {
  if (blogs.length === 0) return null 

  const blogCounts = {}
  let mostBlogsAuthor = blogs[0].author
  let mostBlogsCount = 1

  for (let i = 0; i < blogs.length; i++) {
    if (blogCounts[blogs[i].author]) {
      blogCounts[blogs[i].author] += 1
    } else {
      blogCounts[blogs[i].author] = 1
    }

    if (blogCounts[blogs[i].author] > mostBlogsCount) {
      mostBlogsAuthor = blogs[i].author
      mostBlogsCount = blogCounts[blogs[i].author]
    }
  }

  return {
    author: mostBlogsAuthor,
    blogs: mostBlogsCount
  }
}

function mostLikes(blogs) {
  if (blogs.length === 0) return null 

  const blogLikeCounts = {}
  let mostBlogLikesAuthor = blogs[0].author
  let mostBlogLikesCount = blogs[0].likes

  for (let i = 0; i < blogs.length; i++) {
    if (blogLikeCounts[blogs[i].author]) {
      blogLikeCounts[blogs[i].author] += blogs[i].likes
    } else {
      blogLikeCounts[blogs[i].author] = blogs[i].likes
    }

    if (blogLikeCounts[blogs[i].author] > mostBlogLikesCount) {
      mostBlogLikesAuthor = blogs[i].author
      mostBlogLikesCount = blogLikeCounts[blogs[i].author]
    }
  }

  return {
    author: mostBlogLikesAuthor,
    likes: mostBlogLikesCount
  }
  
}

module.exports = {
  dummy,
  totalLikes,
  mostLiked,
  mostBlogs,
  mostLikes
}