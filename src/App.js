import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Character from "./Character";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="root">
        <Router>
          <Switch>
            <Route path="/character">
              <Character />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
