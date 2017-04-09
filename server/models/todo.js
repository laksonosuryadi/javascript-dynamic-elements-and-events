'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema ({
  name : {
    type: String,
    required: [true, 'todo name is required']
  },
  isComplete : {
    type: Boolean,
    default: false
  }
})

let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
