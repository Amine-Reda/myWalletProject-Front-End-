import "./App.css";
import Nav from "./components/shared/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
