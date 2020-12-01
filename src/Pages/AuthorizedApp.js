import React from 'react';
import { Route, Switch } from 'react-router';
import EditBookingPage from './EditBookingPage';
import SitterAvailabilitiesWeekdayPage from './SitterAvailabilitiesWeekdayPage';
import SitterAvailabilitiesWeeklyPage from './SitterAvailabilitiesWeeklyPage';
import SitterEditProfilePage from './SitterEditProfilePage';
import SitterHomePage from './SitterHomePage';

const AuthorizedApp = () => {
  return (
    <div className="container">
    <Switch>
      <Route exact path="/" component={SitterHomePage} /> 
      <Route path="/edit-profile" component={SitterEditProfilePage} />

      <Route exact path="/my-schedule" component={SitterAvailabilitiesWeeklyPage} />
      <Route path="/my-schedule/:weekday" component={SitterAvailabilitiesWeekdayPage} />

      <Route path="/edit-booking/:bookingId" component={EditBookingPage} />
    </Switch>

    </div>
  );
}

export default AuthorizedApp;
