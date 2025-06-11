import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { type task } from "../interfaces/taskInterface";
import {
  addTask,
  completeTask,
  deleteTask,
  fetchTasks,
} from "../redux/actions";
import Task from "./Task";

function ListContainer(props) {
  const [inputName, setInputName] = useState("");
  const {fetchTasks} = props

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const handleAdd = () => {
    props.addTask(inputName === "" ? "Unknown" : inputName);
    setInputName("");
  };

  if (!props.loading && props.error !== "") {
    return <div className="card">ERROR: {props.error}</div>
  }

  return (
    <div className="card">
      <h2>To Do List</h2>
      <span className="myForm">
        <input
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <button onClick={handleAdd}>+</button>
      </span>
      <div className="todolist">
        {props.loading
          ? "Loading..."
          : props.tasks.map((task: task) => {
              return <Task task={task} key={task.id}/>;
            })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (name: string) => dispatch(addTask(name)),
    completeTask: (id: string) => dispatch(completeTask(id)),
    deleteTask: (id: string) => dispatch(deleteTask(id)),
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
