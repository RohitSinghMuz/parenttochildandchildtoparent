import React, { useState } from "react";
import Child from "./Child";

const Childtoparent = () => {
  const [newname, setname] = useState("");
  const receiveddata = (getname) => {
    console.log(getname);
    setname(getname);
  };
  return (
    <>
      <Child getnewdata={receiveddata} />
      <h2>{newname}</h2>
    </>
  );
};

export default Childtoparent;
