import React from "react";

const SplitColumn = ({ left, right }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {left}
      {right}
    </div>
  );
};

export default SplitColumn;
