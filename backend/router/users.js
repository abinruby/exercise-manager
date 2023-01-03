const router=require('express').Router();
const User=require('../models/user.models');

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err =>res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const newUser= new User({username});

    newUser.save()
    .then(()=>res.json('User added!'))
    .catch((err)=>{res.status.json})
})
module.exports=router;