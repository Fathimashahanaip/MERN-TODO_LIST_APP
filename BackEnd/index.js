const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app =express()
const TodoModel=require('./Models/TODO.JS')


app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://shahanaip222:Fathima123@cluster1.jdxgqym.mongodb.net/')

app.post('/add',( req, res )=>{
    const task = req.body.task;
  TodoModel.create({
    task:task
  }).then(result =>res.json(result))
  .catch(err=> res.json(err))

})
app.get('/get',(req,res)=>{
  TodoModel.find()
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
  const {id}=req.params;
  console.log(id)
  TodoModel.findByIdAndUpdate({_id:id},{done:true})
  .then (result=>res.json(result))
  .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is running")
})
app.delete('/delete/:id',(req,res)=>{
  const {id}=req.params;
  TodoModel.findOneAndDelete({_id:id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})