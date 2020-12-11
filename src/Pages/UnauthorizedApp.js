import React from "react";
import { Route, Switch } from "react-router";
import Availabilities from "./Availabilities";
import Home from "./Home";
import SitterPublicProfile from "./SitterPublicProfile";

import SitterSignInPage from "./SitterSignInPage";

const UnauthorizedApp = () => {
  return (
    <div>
      <Switch>
        <Route path="/availabilities" component={Availabilities} />
        <Route path="/sitters/:id" component={SitterPublicProfile} />
        <Route path="/login" component={SitterSignInPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default UnauthorizedApp;
