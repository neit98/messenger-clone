import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { APP_PATH } from "./constants";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { checkJwt } from "./services";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={APP_PATH.LOGIN}>
          <LoginPage />
        </Route>
        <Route path={APP_PATH.HOME}>
          <HomePage />
        </Route>
        <Route path="/">{checkJwt() ? <HomePage /> : <LoginPage />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
