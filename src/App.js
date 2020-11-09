import Home from "./Pages/Home";
import "./App.css";
import { Route, Switch } from "react-router";
import Availabilities from "./Pages/Availabilities";
import Sitter from "./Pages/Sitter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/availabilities" component={Availabilities} />
        <Route path="/sitters/:id" component={Sitter} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
