import React, { useContext } from "react";

import { TodosContext } from "../context";

const InputTodo = () => {
  const value = useContext(TodosContext);

  const { handleSubmit, onChange, title } = value;

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
};
export default InputTodo;
