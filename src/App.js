import Home from "./Pages/Home";
import "./App.css";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hello">
          <div>hello</div>
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
