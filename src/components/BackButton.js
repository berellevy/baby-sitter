import React from 'react';
import BackArrow from '../assets/Icons/BackArrow';

const BackButton = ({history}) => {
  return (
    <button className="back-button" onClick={() => history.goBack()}>
      <BackArrow />
    </button>
  );
}

export default BackButton;
