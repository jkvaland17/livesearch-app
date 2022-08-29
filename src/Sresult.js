import React from "react";

const Sresult = (props) => {
  const type = `https://source.unsplash.com/600x400/?${props.name}`;
  return (
    <div>
      <br></br>
      <img src={type} alt="jk"></img>
    </div>
  );
};

export default Sresult;
