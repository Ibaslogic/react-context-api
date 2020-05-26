import React from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context";

class TodosList extends React.Component {
  static contextType = TodosContext;
  render() {
    const value = this.context;

    return (
      <div>
        {value.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodosList;
