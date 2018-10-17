import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <nav className="topnav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
