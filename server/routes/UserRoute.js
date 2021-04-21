const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserController = require("../controllers/UserController");

router.get("/users", UserController.getUsersList);
router.get("/user/:id", UserController.getUserDetail);
router.post("/user/add", UserController.addNewUser);
router.put("/user/edit/:id", UserController.updateUser);
router.delete("/user/delete/:id", UserController.deleteUser);
router.get("/count/users", UserController.getUsersCount);

module.exports = router;
