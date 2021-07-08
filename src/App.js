import React from "react";
import "./App.css";
import Texteditor from "./components/texteditor";
import NavHeader from "./components/nav-head";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from './components/Register';

import ContactUs from "./components/contactus";

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Switch >
        <
        Route path = "/login" >
        <
        Login / >
        <
        /Route> <
        Route path = "/register" >
        <
        Register / >
        <
        /Route> <
        Route path = "/contactus" >
        <
        ContactUs / >
        <
        /Route> <
        Route path = "/" >
        <
        NavHeader / >
        <
        Texteditor / >
        <
        /Route> <
        /Switch> <
        /Router> <
        /div>
    );

import Forget from "./components/Forget";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/forget" > <Forget /> </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <NavHeader />
            <Texteditor />
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;