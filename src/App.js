import React from "react";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Signup from "./Signup";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer></Footer>
    </>
  );
}
