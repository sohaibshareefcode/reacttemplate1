import React from "react";

function Button(props) {
  const { first } = props;
  console.log("-----", first);
  return (
    <div>
     
      <button>{first}</button>
    </div>
  );
}

export default Button;
