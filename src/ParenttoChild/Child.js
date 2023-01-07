import React, { useState } from "react";

const Child = (props) => {
  const getcityname = props.myCityName;
  console.log(getcityname);
  return (
    <>
      <div>
        <h2>{getcityname}</h2>
      </div>
    </>
  );
};
export default Child;
