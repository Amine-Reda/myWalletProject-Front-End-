import "./App.css";
import Nav from "./components/shared/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateWallet from "./components/dashboard/dashboardoperation/CreateWallet";
import NotFound from "./components/shared/NotFound";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createwallet" exact component={CreateWallet} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
