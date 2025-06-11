import { useParams, Link, useHistory } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  addTask,
  completeTask,
  deleteTask,
  fetchTasks,
} from "../redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const TaskDetail = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const { fetchTasks } = props;
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  const task = props.tasks.filter((task) => {
    return task.id === id;
  })[0];
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
        <b>
          Description:{" "}
        </b>
          {task.description === "" ? "No description" : task.description}
      </p>
      <p>
        <b>Date: </b>{task.date}
      </p>

      <button>Edit</button>
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
    fetchTasks: () => dispatch(fetchTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
