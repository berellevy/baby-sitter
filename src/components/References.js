import React from "react";

const References = ({ references }) => {
  console.log(references);

  const refList = references.map(({ name, phone }) => {
    return (
      <div>
        <div>{name}</div>
        <div>{phone}</div>
      </div>
    );
  });
  return (
    <>
      {refList}
    </>
  )
};

export default References;
