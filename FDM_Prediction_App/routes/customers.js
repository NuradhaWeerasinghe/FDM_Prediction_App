const express = require('express');
const Customers = require('../models/customers');

const router = express.Router();

//save bill


//get customers
router.get('/customers',(req,res)=>{
    Customers.find().exec((err,customers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCustomers:customers
        });
    });
});

//update
router.put('/bill/update/:id',(req,res)=>{
    Customers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,bill)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"update succesfully"
            });
        }
    );
});

//delete
router.delete('/bill/delete/:id',(req,res)=>{
    Customers.findByIdAndRemove(req.params.id).exec((err,deleteBill)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccess",err
        });
        return res.json({
            message:"Delete success",deleteBill
        });
    });
});

//get specific bill
router.get("/bill/:id",(req,res)=>{
    let billId = req.params.id;
    Customers.findById(billId,(err,bill)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            bill
        });
    });
});

module.exports = router;