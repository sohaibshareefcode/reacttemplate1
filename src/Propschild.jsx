import React from 'react'

function Propschild(props) {
    const{name, heading }=props;
  return (
    <div>
   <h3>{heading}</h3>
      <p>{name}</p>
    </div>
  )
}

export default Propschild
 