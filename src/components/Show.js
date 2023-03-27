import React, { useContext } from "react";
import { TodoList } from "../context/Context";

const Show = ({ data }) => {
  const { dispatch } = useContext(TodoList);
  const { title, id } = data;

  return (
    <div>
      <h1>Here: {title}</h1>
      <button onClick={() => dispatch({ type: "REMOVE", id: id })}>Del</button>
    </div>
  );
};

export default Show;
