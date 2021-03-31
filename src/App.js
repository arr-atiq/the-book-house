import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
    <Header></Header>
    <Router>
    <Switch>
    <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
    
  );
}

export default App;
