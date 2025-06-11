import { type task } from "../interfaces/taskInterface";
import { ACTION_TYPES } from "./types";

const url = "http://localhost:3000/todos";

export const addTask = (name: string) => {
  return async (dispatch) => {
    // get date
    const today = new Date();

    const year = today.getFullYear(); 
    const month = String(today.getMonth() + 1).padStart(2, "0"); 
    const day = String(today.getDate()).padStart(2, "0"); 

    const formattedDate = `${month}-${day}-${year}`;
    const newTask = {
      name,
      completed: false,
      date: formattedDate,
      description: ""
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        throw new Error("Add task failed");
      }

      const createdTask = await res.json();

      dispatch({
        type: ACTION_TYPES.ADD_TASK,
        payload: createdTask,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const completeTask = (id: string) => {
  return async (dispatch, getState) => {
    // Toggle Complete
    const state = getState();
    const updatedComplete = !state.tasks.find((task) => task.id === id)
      .completed;
    try {
      const res = await fetch(url + `/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: updatedComplete }),
      });
      if (!res.ok) {
        throw new Error("Update failed");
      }
      const updatedTask = await res.json();

      dispatch({
        type: ACTION_TYPES.COMPLETE_TASK,
        payload: updatedTask,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteTask = (id: string) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + `/${id}`, { method: "DELETE" });
      if (!res.ok) {
        throw new Error("Delete failed");
      }
      dispatch({
        type: ACTION_TYPES.DELETE_TASK,
        payload: id,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchRequest = () => {
  return {
    type: ACTION_TYPES.FETCH_REQUEST,
  };
};
const fetchSuccess = (tasks: task[]) => {
  return {
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: tasks,
  };
};

const fetchFailure = (error: string) => {
  return {
    type: ACTION_TYPES.FETCH_FAILURE,
    payload: error,
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const tasks = data;
        dispatch(fetchSuccess(tasks));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchFailure(error));
      });
  };
};
