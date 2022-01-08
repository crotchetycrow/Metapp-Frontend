import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Listings from "./Pages/Listings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/listings" component={Listings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
