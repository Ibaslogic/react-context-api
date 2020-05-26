import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

const TodosContext = React.createContext();

const TodosProvider = TodosContext.Provider;
const TodosConsumer = TodosContext.Consumer;

class MyContext extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodoItem(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <TodosProvider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          delTodo: this.delTodo,
          addTodoItem: this.addTodoItem,
        }}
      >
        {this.props.children}
      </TodosProvider>
    );
  }
}

export { TodosContext, MyContext, TodosConsumer };
