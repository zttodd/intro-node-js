const {getPostsForUser, getUserById} = require('./api')

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}

module.exports = {
    showPostsForCurrentUser,
    showUserProfile
}

// const Api = require('./api')

// Api.showPostsForCurrentUser = (userId, cb) => {
//   Api.getPostsForUser(userId, posts => {
//     const postTemplates = posts.map(post => {
//       return `
//       <div class="post">
//         ${post.title}
//         ${post.body}
//         ${post.createdBy}
//       </div>`
//     })
//     cb(postTemplates)
//   })
// }

// Api.showUserProfile = (userId, cb) => {
//   Api.getUserById(userId, user => {
//     const profile = `
//       <div>
//         ${user.name}
//       </div>
//     `
//     cb(user)
//   })
// }

// module.exports = Api;