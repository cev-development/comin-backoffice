import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Home} />
    <Route path="/user/create" exact component={Users} />
    <Route path="/user/:id/edit" exact component={Users} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
