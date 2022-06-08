const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.post("/createAuthor", UserController.createAuthor )
router.get("/getAuthorData", UserController.getAuthorData )
router.post("/createBook", BookController.createBook )
router.get("/getBookPrice", BookController.getBookPrice )

router.get("/getUsersData", UserController.getUsersData)
router.get("/getChetanBhagatBook", BookController.getChetanBhagatBook )


module.exports = router;