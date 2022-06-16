const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mW= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


//The userId is sent by front end
router.get("/users/:userId",mW.middleware, userController.getUserData)

router.put("/users/:userId",mW.middleware, userController.updateUser)

router.post("/users/:userId",mW.middleware, userController.deleteUser)

router.post("/users/:userId/post",mW.middleware, userController.postsMessage)


module.exports = router;