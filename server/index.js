const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
app.use(express.json())
const mongoose = require('mongoose');
const User = require("./models/user.model")
const jwt = require('jsonwebtoken')
mongoose.connect("mongodb+srv://sandra-rosa:123@cluster0.uyn3kgv.mongodb.net/?retryWrites=true&w=majority")
app.post('/api/register',async (req,res)=>{
    console.log(req.body);
    try{
       const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
       })

       res.json({status:"ok"})
    }catch(err){
        console.log(err)
        res.json({status:"error",error:'Duplicate Email'})
    }
});
app.post('/api/login',async (req,res)=>{
    console.log(req.body);
    const user = await User.findOne({
        email:req.body.email,
        pssword:req.body.password
       })
    if(user){
        const token = jwt.sign({
            name:user.name,
            email:user.email,
        },
        'secret123'
        )
        return res.json({status:'ok',user:true})
    }else{
        return res.json({status:'error',user:false})
    }
    res.json({status:"ok"})
});
app.listen(1337,()=>{
    console.log("server started on 1337")
})