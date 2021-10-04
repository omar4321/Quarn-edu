import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import React, { createContext, } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Error from "./components/Error/Error";
import Serive from "./components/Service/Serive";
import About from "./components/About/About";
import Contact from "./components/Contact us/Contact";

export const userContext = createContext();

function App() {
 
  return (
    <div className="App">
    
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Serive/>
            </Route>
            <Route path="/about">
             <About></About>
            </Route>
            <Route path="/Contact">
             <Contact></Contact>
            </Route>
          
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
  
    </div>
  );
}

export default App;
