import React from 'react';
import GoogleLogin from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshTokenSetup';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const Login = () => {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj);
    refreshTokenSetup(res)
  }
  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
  }
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(props) => {
          return (
            <span
              onClick={props.onClick}
              disabled={props.disabled}
            >
              Sitter Sign In
            </span>
          )
        }}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop: "100px"}}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
