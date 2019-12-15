import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation";
import { Mac } from "./components/mac";

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component="Home" />
      <Route path="/Mac" component={Mac} />
      {/* <Route path="/iPad" component={iPad} />
      <Route path="/iPhone" component={iPhone} />
      <Route path="Watch" component={Watch} />
      <Route path="TV" component={Tv} />
      <Route path="Music" component={Music} />
      <Route path="Support" component={Support} /> */}
    </div>
  );
}

export default App;
