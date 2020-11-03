import Home from "./Pages/Home";
import "./App.css";
import { Route, Switch } from "react-router";
import Availabilities from "./Pages/Availabilities";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/availabilities" component={Availabilities} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
