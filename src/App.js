import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "./assets/Routes/Routes";
//import Navbar from "./components/Navbar/navbar.component";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Footer from "./components/Footer/footer.component";
import "./App.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {/* <style>
        {`
      html, body {
        background-color: #1f2833 !important;
      }
      p,h1,h2,h3,h4 {
        
        color: #fff;
        
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
      </style> */}
      <BrowserRouter>
        {/* {isDesktop ? (
          <div>I show on 1451px or higher</div>
        ) : (
          <Navbar/>
        )} */}
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
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
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
