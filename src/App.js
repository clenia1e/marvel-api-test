import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Character from "./Character";
import Home from "./Home";
import Footer from "./components/footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
