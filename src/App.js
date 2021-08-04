import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Stores from "./components/Stores/Stores";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SingleStore from "./components/Stores/SingleStore/SingleStore";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Stores />
          </Route>
          <Route exact path="/store">
            <SingleStore />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
