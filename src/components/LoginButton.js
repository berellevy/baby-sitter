import React from 'react';
import { useHistory } from 'react-router';
import { useGoogleAuth } from '../auth/useGoogleLogin';

const LoginButton = () => {

  const { signIn } = useGoogleAuth()
  const  history  = useHistory()

  const handleSignin = () => {
    signIn()
    history.push("/")
  }

  return (
    <button onClick={handleSignin}>Sign in with Google</button>
  )
}

export default LoginButton;
