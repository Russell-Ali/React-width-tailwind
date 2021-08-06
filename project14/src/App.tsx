import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Index";
import Menu from "./pages/Menu";
import Contact from "./components/Contact";

const App = () => {
  const [isOpen, setIsOPen] = useState(false);
  const toggle = () => setIsOPen(!isOpen);
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOPen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => window.removeEventListener("resize", hideMenu);
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
