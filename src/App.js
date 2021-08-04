import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Stores from "./components/Stores/Stores";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SingleStore from "./components/Stores/SingleStore/SingleStore";
import Product from "./components/Product/Product";

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
          <Route path="/store">
            <SingleStore />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
