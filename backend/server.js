const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')

require('dotenv').config

const app=express();

const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.ATLAS_URI}`,()=>{console.log('database connected successfully');}) 

const exercisesRouter=require('./router/exercises')
const usersRouter=require('./router/users')

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter)

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})