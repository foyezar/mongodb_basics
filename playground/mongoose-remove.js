const { ObjectID } = require('mongodb'),
      { mongoose } = require('./db/mongoose'),
      { Todo }     = require('./models/todo')

// Todo.remove
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('8764so75392').then((todo) => {
  console.log(todo)
})