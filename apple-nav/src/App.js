import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import { Mac } from "./components/mac";
import MacBookPro from "./components/macbookpro";

function App() {
  return (
    <div>
      <Route path="/">
        <Navigation />
      </Route>
      <Switch>
        <Route path="/Mac">
          <Mac />
        </Route>
        <Route path={`/Mac/MacBook-Pro-16"`}>
          <MacBookPro />
        </Route>
      </Switch>
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
