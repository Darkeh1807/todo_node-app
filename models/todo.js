const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    deadline:Date,
    isCompleted:Boolean,
}, {timestamp:true});

const todo = mongoose.model('todo',todoSchema);
module.exports=todo;