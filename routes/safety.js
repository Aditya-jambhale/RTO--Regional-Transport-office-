const express=require('express');
const router=express.Router();
const connection= require('../config/connection').connection;
router.get("/",(req, res) =>{
      
            res.render("safety");
        })
       
    
    module.exports=router;