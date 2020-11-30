import React from 'react';
import { Route, Switch } from 'react-router';
import SitterPrivateProfile from './SitterPrivateProfile';

const AuthorizedApp = () => {
  return (
    <div className="container">
    <Switch>
      <Route path="/" component={SitterPrivateProfile} />
    </Switch>

    </div>
  );
}

export default AuthorizedApp;
