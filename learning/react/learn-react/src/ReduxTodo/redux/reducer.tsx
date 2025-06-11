import { ACTION_TYPES } from "./types";

const initialState = {
  loading: true,
  tasks: [],
  error: "",
};

const taskReducer = (
  state = initialState,
  action: { type: string; payload }
) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ACTION_TYPES.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload
        }),
      };
      case ACTION_TYPES.EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        }
    case ACTION_TYPES.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
