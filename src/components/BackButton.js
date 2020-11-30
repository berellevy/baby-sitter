import React from 'react';
import { useHistory } from 'react-router';
import BackArrow from '../assets/Icons/BackArrow';

const BackButton = () => {
  let history = useHistory()
  return (
    <button className="back-button" onClick={() => history.goBack()}>
      <BackArrow />
    </button>
  );
}

export default BackButton;
