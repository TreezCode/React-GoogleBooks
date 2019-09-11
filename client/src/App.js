import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

const App = () => (
    <>
        <Router>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route path="/Saved" component={Saved} />
                    <Route component={NoMatch} />
                </Switch>
            </Container>
        </Router>
    </>
);
    
export default App;