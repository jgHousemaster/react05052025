const express = require("express");
const shortid = require("shortid");
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Apply middleware to all requests
router.use(authenticateToken)

let todos = [
  { id: "1", uid: "1", name: "Read", completed: false },
  { id: "2", uid: "1", name: "Running", completed: false },
  { id: "3", uid: "2", name: "xxx", completed: false }
];

// get all todos
router.get("/", (req, res) => {
  const userTodos = todos.filter(todo => todo.uid === req.user.uid)
  res.status(200).json({ message: "Get todos successfully", data: userTodos });
});

// Create todo ({name})
router.post("/", (req, res) => {
  const { name } = req.body;
  const newTodo = {
    id: shortid.generate(),
    uid: req.user.uid,
    name,
    completed: false,
  };
  todos.push(newTodo);
  res.status(200).json({ message: "New todo created", data: newTodo });
});

router
  .route("/:id")
  .get((req, res) => {
    // Read one todo
    const todo = todos.find((todo) => todo.id === req.params.id && todo.uid === req.user.uid);
    if (todo) {
      res.status(200).json({ message: "Fetch success", data: todo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  })
  .patch((req, res) => {
    // Update todo ({*name, *completed})
    const {id} = req.params;
    const {name, completed} = req.body;
    const {uid} = req.user
    const todo = todos.find(todo => todo.id === id && todo.uid === uid);
    if (todo) {
      if (name !== undefined) todo.name = name;
      if (completed !== undefined) todo.completed = completed;
      todos = todos.map((origTodo) => {
        if (origTodo.id === id) {
          return todo;
        }
        return origTodo;
      })
      res.status(200).json({message: "Update success", data: todo})
    } else {
      res.status(404).json({message: "Todo not found"})
    }
  })
  .delete((req, res) => {
    // delete one todo (id)
    let todoFound = false;
    let deletedTodo = null;
    todos = todos.filter((todo) => {
      if (todo.id === req.params.id && todo.uid === req.user.uid) {
        todoFound = true;
        deletedTodo = todo;
        return false;
      } else {
        return true;
      }
    });
    if (todoFound) {
      res.status(200).json({ message: "Delete success", data: deletedTodo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  });

module.exports = router;
