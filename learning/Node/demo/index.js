const express = require("express");
const shortid = require("shortid");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todos = [
  { id: shortid.generate(), name: "Read", completed: false },
  { id: shortid.generate(), name: "Running", completed: false },
];

// get all todos
app.get("/todos", (req, res) => {
  res.status(200).json({ message: "Get success", data: todos });
});

// Create a new todo using raw body ({"name": "xxx"})
app.post("/todos", (req, res) => {
  const { name } = req.body;
  const newTodo = {
    id: shortid.generate(),
    name: name,
    completed: false,
  };
  res.status(200).json({ message: "Data received", data: newTodo });
  todos.push(newTodo);
});
app.put("/todos/:id", (req, res) => {
  res.send("Put a to-do");
});
app.delete("/todos/:id", (req, res) => {
  res.send("Delete a to-do");
});

app.listen(port, () => console.log("server listening on ", port));
