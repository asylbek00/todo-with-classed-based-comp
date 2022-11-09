import React, { Component } from "react";
import { TodoContext } from "../store/todo.context";
import styles from "./TodoItem.module.css";

export default class TodoItem extends Component {
  static contextType = TodoContext;
  render() {
    const { task, id, date, completed } = this.props;
    console.log(id);
    return (
      <li className={styles.task_block}>
        <span className={completed ? styles.done : styles.text}>
          {task}
        </span>
        <span>{date}</span>
        <label className={styles.container}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => this.context.completeTodo(id)}
          />
          <div className={styles.checkmark}></div>
        </label>
        <div className={styles.main}>
          <button
            className={styles.btn}
            onClick={() => this.context.removeTodo(id)}
          >
            DELETE
          </button>
        </div>
      </li>
    );
  }
}
