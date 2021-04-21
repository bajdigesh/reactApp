const usersData = require("../models/UserModel");

exports.getUsersList = (req, res) => {
  usersData.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

exports.getUsersListById = (req, res) => {
  const userID = req.params.id;
  // console.log(userID);
  usersData.find({ _id: userID }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

exports.getUsersCount = (req, res) => {
  usersData.countDocuments({}, (err, count) => {
    if (err) {
      res.send(err);
    }
    res.json(count);
  });
};

exports.addNewUser = (req, res) => {
  let data = req.body;
  usersData.create(data, (err) => {
    if (err) {
      throw new Error(err);
    }
    res.json("Data inserted");
  });
};

exports.deleteUser = (req, res) => {
  usersData.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      throw new Error(err);
    }
    res.json("Data deleted");
  });
};

exports.updateUser = (req, res) => {
  let data = req.body;
  usersData.updateOne(data, (err) => {
    if (err) {
      throw new Error(err);
    }
    res.json("Data inserted");
  });
};
