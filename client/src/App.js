import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

const App = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/Saved" component={Saved} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    </>
);
    

export default App;
