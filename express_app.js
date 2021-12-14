const express = require('express');
const mongoose = require('mongoose');
const server = express();
const todoController = require('./controllers/todoController');
const mongo_db_url =
  "mongodb+srv://Darkeh1807:alisajunior@cluster0.guusu.mongodb.net/tood_db?retryWrites=true&w=majority";

server.get('/todos',todoController.getAllTodos);
server.post("todos/",todoController.addTodo );
server.put( "todos/",todoController.updateTodoById);
server.delete("todos",todoController.deleteTodoById );

server.listen(4000, function () {
    console.log('Server is running on express');
    mongoose.connect(mongo_db_url).then(
        function () {
            console.log('DB is connected');
        }
    ).
    catch(
       function (error) {
           console.log('DB is not connected:', error.message);
       }
    );
})

