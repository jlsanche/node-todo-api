  const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// var id = "5ac2f643ebcbf615090ba9fd";

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({ _id: id }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log("id not found");
//   }
//   console.log("Todo by id ", todo);
// }).catch((e)=> {console.log(e)});

const id = "5ac181946c6fda056147098b";

User.findById(id).then(
  user => {
    if (!user) {
      return console.log("unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
