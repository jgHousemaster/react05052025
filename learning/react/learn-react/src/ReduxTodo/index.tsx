import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";
import ToDoList from "./components/ListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/" component={ToDoList} exact />
            <Route path="/detail/:id" component={TaskDetail} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
