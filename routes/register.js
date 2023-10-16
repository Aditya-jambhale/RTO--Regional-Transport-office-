const express=require('express');

const router=express.Router();
const connection= require('../config/connection').connection;
router.get("/",(req, res) => {
       const { firstname,lastname,city,vehiclename,platenumber,vehicletype} = req.query;
       let qry = "insert into rto.register(firstname,lastname,city,vehiclename,platenumber,vehicletype) values (?,?,?,?,?,?,?,?,?,?,?,?)";
      con.query(qry, [firstname,lastname,city,vehiclename,platenumber,vehicletype  ], (err, result) => {
        if(result.affectedRows > 0) {
            res.render("register",{msg: true});
        }
       });
    });
    module.exports=router;