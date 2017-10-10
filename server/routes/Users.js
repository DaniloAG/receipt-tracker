const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/User");
const Validate = require("../utils/Validate");

const router = express.Router();

router.post("/register", (req, res) => {
  let user = new User({
    username: req.body.username,
    password: req.body.password
  });

  const { errors, valid } = Validate.Validate(user);
  if (!valid){
    return res.status(400).json(errors);
  }
  User.countUser(user.username, (err, count) => {
    if (err){
      // log error
      console.log(err);
      return res.status(500).json('Error has occured');
    }

    if (count > 0){
      let errors = {};
      errors.username = "Username is already taken";
      return res.status(400).json(errors);
    }
    User.addUser(user, (error, user) => {
      if (error){
        // log error
        console.log(error);
        return res.status(500).json('Error has occured');
      }

      res.status(200).json(user);
    });
  });
});

router.post("/authenticate", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if (err){
      throw err;
    }
    if (!user){
      let errors = {};
      errors.username = "Username does not exist";
      return res.status(400).json(errors);
    }
    User.comparePassword(password, user.password, (err, matched) => {
      if (err){
        throw err;
      }
      if (!matched){
        let errors = {};
        errors.password = "Password does not match";
        return res.status(400).json(errors);
      }
      return res.json(user);
    });
  });
});

router.get("/users", (req, res) => {
  User.getUsers((error, users) => {
    if (error){
      throw error;
    }
    res.json(users);
  });
});

module.exports = router;
