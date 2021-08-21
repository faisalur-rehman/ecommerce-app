import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SingleStore from "./components/Stores/SingleStore/SingleStore";
import Product from "./components/Product/Product";
import ProfessionalRegistration from "./components/ProfessionalRegistration/ProfessionalRegistration";
import Cart from "./components/User/Cart/Cart";
import UserInformation from "./components/User/UserInformation/UserInformation";
import Delivery from "./components/User/DeliveryOption/Delivery";
import Sidebar from "./components/User/Sidebar/Sidebar";
import ProfessionalSidebar from "./components/Professional/ProfessionalSidebar/ProfessionalSidebar";
import UserRegistration from "./components/User/UserRegistration/UserRegistration";
import Store from "./components/Stores/SingleStore/Store";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Store />
          </Route>
          <Route path="/store/:id">
            <SingleStore />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/user-registration">
            <UserRegistration />
          </Route>
          <Route path="/professional-registration">
            <ProfessionalRegistration />
          </Route>
          <Route path="/userAccount">
            <Sidebar />
          </Route>
          <Route path="/professional">
            <ProfessionalSidebar />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/user-information">
            <UserInformation />
          </Route>
          <Route path="/delivery">
            <Delivery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
