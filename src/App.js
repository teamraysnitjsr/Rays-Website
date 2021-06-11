import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "./assets/Routes/Routes";
import Navbar from "./components/Navbar/navbar.component";
import {
  leftItems,
  rightItems,
} from "../src/assets/data/Navbar-Data/navbar.data";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header className="App-header">
          <Switch>
            {Routes.map((item) => (
              <Route
                key={item.id}
                exact={item.exact}
                path={item.path}
                component={item.component}
              ></Route>
            ))}
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
