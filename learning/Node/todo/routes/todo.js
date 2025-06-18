const express = require("express");
const shortid = require("shortid");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let todos = [
  { id: "1", name: "Read", completed: false },
  { id: shortid.generate(), name: "Running", completed: false },
];

// get all todos
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get todos successfully", data: todos });
});

// Create todo ({"name": "xxx"})
router.post("/", (req, res) => {
  const { name } = req.body;
  const newTodo = {
    id: shortid.generate(),
    name,
    completed: false,
  };
  res.status(200).json({ message: "New todo created", data: newTodo });
  todos.push(newTodo);
});

router
  .route("/:id")
  .get((req, res) => {
    const todo = todos.find((todo) => todo.id === req.params.id);
    if (todo) {
      res.status(200).json({ message: "Fetch success", data: todo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  })
  .put((req, res) => {
    console.log(req.params.id);
    res.send("hh");
  })
  .delete((req, res) => {
    console.log(req.params.id);
    res.send("hh");
  });

module.exports = router;
