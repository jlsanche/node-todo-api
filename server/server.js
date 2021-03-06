
require('./config/config');
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();
var port = process.env.PORT;

app.use(bodyParser.json());

//wipe database
// beforeEach((done) => {
//     Todo.remove({}).then(() => done())
// });

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({
        todos
      });
    },
    e => {
      req.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(404).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;
  //validate id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //remove todo by id
  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(404).send();
    });
});

/* using lodash  */
app.patch("/todos/:id", (req, res) => {
  var id = req.params.id;
  //allow user to update these two props.
  var body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //update completedAt
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`server live on ${port}`);
});

module.exports = { app };
