const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserController = require("../controllers/UserController");

router.get("/users", UserController.getUsersList);
router.get("/users/:id", UserController.getUsersListById);
router.post("/user/add", UserController.addNewUser);
router.get("/count/users", UserController.getUsersCount);
router.delete("/user/delete/:id", UserController.deleteUser);
router.put("/user/edit/:id", UserController.updateUser);

module.exports = router;
