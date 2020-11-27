import React from 'react';

const Phone = ({num}) => {
  return (
    <a className="phone-number" href={`tel:${num}`}>{num}</a>
  );
}

export default Phone;
