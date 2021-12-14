const express = require('express');
const mongoose = require('mongoose');
const server = express();
const mongo_db_url =
  "mongodb+srv://Darkeh1807:alisajunior@cluster0.guusu.mongodb.net/tood_db ?retryWrites=true&w=majority";
server.get('/task', function (request,respond) {
    respond.status(200).json('Tasks has been given');
});
server.post("/task", function (request, respond) {
    respond.status(200).json('All are new task');
});
server.put( "task/",function (request,respond) {
      respond.status(200).json("Update student");
});
server.delete("task", function (request,respond) {
      respond.status(200).json("Delete student");
});
server.listen(4000, function () {
    console.log('Server is running on express');
})

