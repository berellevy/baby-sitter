import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const Logout = () => {
  const onSuccess = () => {
    alert("logout made successfully")
  }
  return (
    <div>
      <GoogleLogout 
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
