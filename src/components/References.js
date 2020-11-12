import React from "react";

const References = ({ references }) => {
  const refList = references.map(({id, name, phone }) => {
    return (
      <div key={id}>
        <div>{name}</div>
        <div>{phone}</div>
      </div>
    );
  });
  return <>{refList}</>;
};

export default References;
