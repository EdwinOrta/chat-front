import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Config from "../pages/Config";
import Chat from "../pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/config" component={Config} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
