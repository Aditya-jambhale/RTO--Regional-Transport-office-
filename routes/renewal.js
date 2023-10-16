const express=require('express');

const router=express.Router();
const connection= require('../config/connection').connection;
router.get("/", (req, res) => {
       const {Number,Date,lastdate,Email,Mobilenumber,gender } = req.query;
       let qry = "insert into rto.renewal(DLnumber,DOB,lastlicenceexpiry,Emailid,Mobilenumber,Gender) values (?,?,?,?,?,?)";
      con.query(qry, [Number,Date,lastdate,Email,Mobilenumber,gender], (err, result) => {
        if(result.affectedRows > 0) {
            res.render("renewal",{msg: true});
        }
       });
    });
    module.exports=router;
