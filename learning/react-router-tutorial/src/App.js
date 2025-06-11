import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";
import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter basename="/tutorial">
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile">
            <Profile login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
