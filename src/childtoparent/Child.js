import React, { useState } from "react";

const Child = (props) => {
  const [name, setname] = useState("");

  const Adddata = () => {
    props.getnewdata(name);
  };
  return (
    <>
      <div style={{ width: "50%", nmargin: "10px auto" }}>
        <input
          style={{ width: "250px", padding: "10px 20px", margin: "10px auto" }}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        />
        <button
          onClick={Adddata}
          style={{
            padding: "10px 25px",
            backgroundColor: "green",
            margin: "10px",
          }}
        >
          Send Data
        </button>
      </div>
    </>
  );
};
export default Child;
