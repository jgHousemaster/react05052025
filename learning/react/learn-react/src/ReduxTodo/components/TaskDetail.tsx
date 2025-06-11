import { useParams, Link, useHistory } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  addTask,
  completeTask,
  deleteTask,
  editTask,
  fetchTasks,
} from "../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import type { task } from "../interfaces/taskInterface";

const TaskDetail = (props) => {
  // for go back router
  const history = useHistory();
  // task id
  const { id } = useParams();
  // initialize
  const { fetchTasks } = props;
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  const task = props.tasks.filter((task) => {
    return task.id === id;
  })[0];
  // Edit feature
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const handleSave = (e) => {
    e.preventDefault();
    props.editTask({ ...task, name: name, description: description });
    setEdit(false);
  };

  if (edit) {
    // Edit the task
    return (
      <div className="card">
        <h2>Edit Task</h2>

        <form onSubmit={handleSave}>
          <div className="formRow">
            <label>
              <b>Task: </b>
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="formRow">
            <label>
              <b>Description: </b>
            </label>
            <input
              value={description}
              placeholder="Add description..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button className="saveBtn" type="submit">
            Save
          </button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </form>
      </div>
    );
  }

  // Default detail page
  return (
    <div className="card">
      <div>
        <Link to="/">
          <button className="backBtn">
            <ArrowBackIosNewIcon />
          </button>
        </Link>
        <span className="myTitle">TaskDetail</span>
      </div>

      <h2
        style={{
          textDecorationLine: task.completed ? "line-through" : "none",
          color: task.completed ? "grey" : "black",
        }}
      >
        Task: {task.name}{" "}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            props.completeTask(task.id);
          }}
        />
      </h2>
      <p>
        <b>Description: </b>
        {task.description === "" ? "No description" : task.description}
      </p>
      <p>
        <b>Date: </b>
        {task.date}
      </p>

      <button
        onClick={() => {
          setEdit(true);
        }}
      >
        Edit
      </button>
      <button
        className="deleteBtn"
        onClick={() => {
          props.deleteTask(task.id);
          history.push("/");
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task: string) => dispatch(addTask(task)),
    completeTask: (id: string) => dispatch(completeTask(id)),
    deleteTask: (id: string) => dispatch(deleteTask(id)),
    editTask: (newTask: task) => dispatch(editTask(newTask)),
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
