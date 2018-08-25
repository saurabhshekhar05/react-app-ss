import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Error from "./components/error/error";
import HeaderNavigation from "./components/header/headerNavigation";
import Counters from "./components/counters/counters";
import Fades from "./components/fades/fades";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderNavigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/counters" component={Counters} />
            <Route path="/fade" component={Fades} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
