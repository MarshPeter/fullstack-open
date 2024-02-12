function dummy(blogs) {
  return 1;
} 

function totalLikes(blogs) {
  if (blogs.length === 0) {
    return 0;
  }

  return blogs.reduce((acc, curr) => acc += curr.likes, 0);
}

module.exports = {
  dummy,
  totalLikes
}