const express = require('express')
const route = express.Router()
// const postConnode index.js troller = require('../controller/postController')

route.get('/', postController.getPost)
route.post('create-post',postController.createPost)

module.exports = route