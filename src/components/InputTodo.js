import React, { useState, useContext } from "react";
import { TodosContext } from "../context";

const InputTodo = (props) => {
  const value = useContext(TodosContext);
  const { addTodoItem } = value;

  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(inputText.title);
    setInputText({
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
};

export default InputTodo;
