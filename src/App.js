import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import Posts from "./containers/Posts";
import User from "./containers/User";
import Welcome from "./containers/Welcome";

const Posts = React.lazy(() => import("./containers/Posts"));
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
          <Route
            path="/posts"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>
            )}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
