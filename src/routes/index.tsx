import React from "react";
import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Route from "./route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/404" component={NotFound} />
  </Switch>
);

export default Routes;
