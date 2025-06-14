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
  const { id } = useParams(); // params may be different
  // initialize
  const { fetchTasks, tasks, editTask, completeTask } = props; // destructure them
  useEffect(() => {
    fetchTasks();
  }, []);

  const task = tasks.find((task) => {
    return task.id === id;
  });
  // Edit feature
  const [edit, setEdit] = useState(false); // edit => isEditing
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const handleSave = (e) => {
    e.preventDefault();
    editTask({ ...task, name, description });
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
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="formRow">
            <label>
              <b>Description: </b>
              <input
                value={description}
                placeholder="Add description..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
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
        {/* {Use class Name} */}
        Task: {task.name}
      </h2>

      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            completeTask(task.id);
          }}
        />
        Complete
      </label>

      <p>
        <b>Description: </b>
        {/* {task.description === "" ? "No description" : task.description} */}
        {task.description || "No description"}
      </p>
      <p>
        <b>Date: </b>
        {task.date}
      </p>

      <button onClick={()=>setEdit(true)}>
        Edit
      </button>
      <button
        className="deleteBtn"
        onClick={() => {
          props.deleteTask(task.id);
          history.push("/"); // May be different, look up every time
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
