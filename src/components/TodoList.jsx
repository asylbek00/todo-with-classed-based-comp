import React, { Component } from "react";
import { TodoContext } from "../store/todo.context";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default class TodoList extends Component {
  static contextType = TodoContext;
  render() {
    return (
      <div>
        <ul className={styles.list}>
          {this.context.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                task={todo.task}
                date={todo.date}
                id={todo.id}
                completed={todo.completed}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
