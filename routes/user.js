const express = require("express")
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require("../controllers/user")

const router = express.Router();

//REST API
router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

//Dynamic Path Parameter :ID
router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;
