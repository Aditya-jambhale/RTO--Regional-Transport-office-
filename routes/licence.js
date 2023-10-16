const express=require('express');

const router=express.Router();
const connection= require('../config/connection').connection;
router.get("/",(req, res) => {
       const {firstname,lastname,DOB,age,blood,gender,emailid,Mobilenumber,occupation,state,district,address } = req.query;
       let qry = "insert into rto.licence(firstname,lastname,Dateofbirth,age,blood,gender,emailid,mobilenumber,occupation,state,district,adress) values (?,?,?,?,?,?,?,?,?,?,?,?)";
      con.query(qry, [firstname,lastname,DOB,age,blood,gender,emailid,Mobilenumber,occupation,state,district,address  ], (err, result) => {
        if(result.affectedRows > 0) {
            res.render("licence",{msg: true});
        }
       });
    });
    module.exports=router;
