import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Posts from "./containers/Posts";
import User from "./containers/User";
import Welcome from "./containers/Welcome";

/**
 * After React 16.6 came a new method to the react object. Lazy Method
 * which you can use to load your data, your components asynchronously.(Only when they are needed!)
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          <Route path="/posts" component={Posts} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
