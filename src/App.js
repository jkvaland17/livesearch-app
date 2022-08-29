import React, { useState } from "react";
import Sresult from "./Sresult";

const App = () => {
  const [type, settype] = useState("");
  const InputEvent = (e) => {
    const data = e.target.value;
    settype(data);
  };
  return (
    <div className="textcenter">
      <h1>Search Anything</h1>
      <br />
      <input
        type={"text"}
        placeholder="Search"
        onChange={InputEvent}
        value={type}
      ></input>
      <Sresult name={type} />
    </div>
  );
};

export default App;
