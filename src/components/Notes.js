import React from "react";

const Notes = (props) => {
  return (
    <div key={props.key} style={{ marginBottom: `${props.margin}px` }}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Notes;
