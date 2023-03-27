import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { TodoList } from "../context/Context";

const Form = () => {
  const { dispatch } = useContext(TodoList);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const addData = {
      title,
      id: v4(),
    };
    dispatch({ type: "ADD", payload: addData });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
