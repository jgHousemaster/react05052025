import React, { act, useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

interface todoObj {
  id: number;
  name: string;
  complete: boolean;
}

function reducer(todos: todoObj[], action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo: todoObj) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

// Main Component
function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div>
      UseReducer
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                textDecorationLine: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.name}
              <button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id },
                  });
                }}
              >
                Toggle
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id },
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UseReducer;
