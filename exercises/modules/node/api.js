const {users, posts} = require('./data')

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const _posts = posts.filter(post => post.createdBy === userId)
    cb(_posts)
  }, 150)
}

module.exports = {
    getPostsForUser,
    getUserById
}

// const Data = require('./data')

// Data.getUserById = (id, cb) => {
//   // simulate API call
//   setTimeout(() => {
//     const user = Data.users.find(user => user.id === id)
//     cb(user)
//   }, 150)
// }

// Data.getPostsForUser = (userId, cb) => {
//   // simulate API call
//   setTimeout(() => {
//     const posts = Data.posts.filter(post => post.createdBy === userId)
//     cb(posts)
//   }, 150)
// }

// module.exports = Data;