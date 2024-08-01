const mongoose=require('mongoose')
const { type } = require('os')
const TodoSchema=new mongoose.Schema({
    task:String,
    serial:Number,
    done:{
        type:Boolean,
        default:false
}
})


const TodoModel=mongoose.model("todos",TodoSchema)
module.exports=TodoModel