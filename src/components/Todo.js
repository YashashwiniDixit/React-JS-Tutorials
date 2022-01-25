import React from "react";

export default props => (
  <div style={{ display: "flex" , flexDirection: "row", justifyContent: "center" }}>
    
    {/* <div>
      { props.todo.complete ? "":props.todo.text}
    </div> */}
    <button onClick={props.toggleComplete}>x</button>
  </div>
);
