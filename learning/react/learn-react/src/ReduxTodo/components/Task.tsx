
import { addTask, completeTask, deleteTask } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Task(props) {
  const task = props.task;
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          props.completeTask(task.id);
        }}
      />
      <span
        style={{
          textDecorationLine: task.completed ? "line-through" : "none",
          color: task.completed ? "grey" : "black",
        }}
        className="taskName"
      >
        <Link to={`/detail/${task.id}`}>{task.name}</Link>
      </span>
      <button onClick={() => props.deleteTask(task.id)}>🗑</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task: string) => dispatch(addTask(task)),
    completeTask: (id: string) => dispatch(completeTask(id)),
    deleteTask: (id: string) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
