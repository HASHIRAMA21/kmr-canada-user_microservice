const db = require("../models/user.model");
const Sequelize = require("sequelize")
const User = db.user;
//const Op = db.Sequelize.Op;


exports.findAllUser = (req,res)  =>{
  User.findAll().then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(500).send(
       err.message || "Some error ocurred while retrieving User"
    )
  })
}

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  Tutorial.destroy({
    where: { id: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${userId}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + userId
      });
    });
};

exports.deleteAllUser = (req, res) => {
  Users.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} User were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all User."
      });
    });
};








exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
