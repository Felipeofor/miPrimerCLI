import React from "react";

export default function Item(props) {
  return (
      <>
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
      </>
  );
}
