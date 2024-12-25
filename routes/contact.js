const express = require('express');
const router = express.Router();
const connection = require('../config/connection').connection;
router.get("/", (req, res) => {
  const { Name, DOB, Emailid, Mobilenumber, gender, Message } = req.query;
  let qry = "insert into rto.contact(Name,DOB,Emailid,Mobilenumber,gender,Message) values (?,?,?,?,?,?)";
  connection.query(qry, [Name, DOB, Emailid, Mobilenumber, gender, Message], (err, result) => {
    if (result.affectedRows > 0) {
      res.render("contact", { msg: true });
    }
  });
});
module.exports = router;