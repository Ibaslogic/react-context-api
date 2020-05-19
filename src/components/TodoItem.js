import React from "react";
import { TodosConsumer } from "../context";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo;

  return (
    <TodosConsumer>
      {(value) => {
        const { handleChange, delTodo } = value;
        return (
          <li className="todo-item">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleChange(id)}
            />
            <button onClick={() => delTodo(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>{title}</span>
          </li>
        );
      }}
    </TodosConsumer>
  );
};

export default TodoItem;

// import React from "react";

// class TodoItem extends React.Component {
//   render() {
//     const completedStyle = {
//       fontStyle: "italic",
//       color: "#d35e0f",
//       opacity: 0.4,
//       textDecoration: "line-through",
//     };

//     const { completed, id, title } = this.props.todo;

//     return (
//       <li className="todo-item">
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={() => this.props.handleChangeProps(id)}
//         />
//         <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
//         <span style={completed ? completedStyle : null}>{title}</span>
//       </li>
//     );
//   }
// }

// export default TodoItem;
