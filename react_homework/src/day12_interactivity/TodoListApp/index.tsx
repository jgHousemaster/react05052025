import { useState } from "react";

export default function TodoListApp() {
  const [toDoList, setToDoList] = useState([]);
  const [curId, setCurId] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function handleAddItem() {
    // Reject empty input
    if (inputValue.trim() === "") return;

    const newItem = {
      id: curId,
      value: inputValue,
    };
    setToDoList((t) => [...t, newItem]);
    setCurId((curId) => curId + 1);

    // Clear input
    setInputValue("");
  }

  function handleDelete(id) {
    setToDoList((t) => t.filter((item) => item.id !== id));
  }

  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }

  // write your todo list app here
  return (
    <div>
      TodoListApp
      <br />
      <h2>TODOLIST</h2>
      <hr />
      <input
        type="text"
        placeholder="add item..."
        id="input"
        value={inputValue}
        onChange={handleInputValueChange}
      />
      <button onClick={handleAddItem}>ADD</button>
      <ul>
        {toDoList.map((item) => {
          return (
            <Item item={item} />
          );
        })}
      </ul>
    </div>
  );

  function Item({item}) {
    return <li key={item.id}>
              {item.value + " "}{" "}<button onClick={() => handleDelete(item.id)}>Delete</button> {" "}<button>Edit</button>
              
            </li>
  }
}
