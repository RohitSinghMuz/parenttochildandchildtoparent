import React from "react";
import Child from "./Child";

const ParenttoChild = () => {
  let cityname = "Hyderabad";

  return (
    <>
      <Child myCityName={cityname} />
    </>
  );
};

export default ParenttoChild;
