import React, { Component, createContext } from "react";

export const TodoContext = createContext({         //создание контехт
  todos: [],
});

export default class TodoContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],               //todoitem дер келтп кошулат
    };
  }
  addTodoHandler(todo = {}) {
    this.setState((prevState) => ({
      ...prevState,
      todos: [...prevState.todos, todo],
    }));
  }
  removeTodoHandler(id) {
    const FilteredTodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({todos : FilteredTodos})
  }
  completeTodoHandler(id) {
      const completeTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo
    });
    this.setState({ todos: completeTodo });
  }
  
  
  render() {
    return (
      <TodoContext.Provider
        value={{
          todos: this.state.todos,
          addTodo: this.addTodoHandler.bind(this),
          removeTodo: this.removeTodoHandler.bind(this),
          completeTodo: this.completeTodoHandler.bind(this),
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
