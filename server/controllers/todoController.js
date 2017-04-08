let Todo = require('../models/todo')

var createTodo = function(req, res) {
  Todo.create({
    name: req.body.name
  }, function(err, todo){
    if(err){
      res.send(err)
    } else {
      res.send(todo)
    }
  })
}

var getTodo = function(req,res) {
  Todo.find(function(err, todos){
    if(err){
      res.send(err)
    } else {
      res.send(todos)
    }
  })
}

var complete = function(req, res) {
  Todo.findOneAndUpdate({
    _id : req.params.id
  }, {
    isComplete: true
  }, function(err, todo){
    if(err){
      res.send(err)
    } else {
      res.send("todo completed")
    }
  })
}

var uncomplete = function(req, res) {
  Todo.findOneAndUpdate({
    _id : req.params.id
  }, {
    isComplete: false
  }, function(err, todo){
    if(err){
      res.send(err)
    } else {
      res.send("todo is set to uncomplete")
    }
  })
}

var deleteTodo = function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo){
    if(err){
      res.send(err)
    } else {
      res.send("delete success")
    }
  })
}

module.exports = {
  createTodo,
  getTodo,
  complete,
  uncomplete,
  deleteTodo
}
