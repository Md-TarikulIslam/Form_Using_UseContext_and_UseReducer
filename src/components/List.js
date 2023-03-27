import React, { useContext } from "react";
import { TodoList } from "../context/Context";
import Show from "./Show";

const List = () => {
  const { state } = useContext(TodoList);
  return (
    <div>
      {state.map((data) => (
        <Show data={data} key={data.id}></Show>
      ))}
    </div>
  );
};

export default List;
