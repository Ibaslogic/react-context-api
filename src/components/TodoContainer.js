import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo />
        <TodosList />
      </div>
    );
  }
}
export default TodoContainer;
