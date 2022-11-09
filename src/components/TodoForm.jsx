import React, { Component, Fragment } from "react";
import { TodoContext } from "../store/todo.context";
import styles from "./TodoForm.module.css";

export default class TodoForm extends Component {     //для туду
  static contextType = TodoContext;
  constructor(props) {
    super();
    this.state = {
      //2 state
      task: "",
      date: "",
    };
  }
  taskChangeHandler(e) {   //declaration func
    this.setState({ task: e.target.value });
  }
  dateChangeHandler(e) {
    this.setState({ date: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    if (this.state.task.trim().length === 0 || !this.state.date) {      // ! -false болсо
      return alert("Вы не заполнили все поля!");
    }
    // console.log(this.context);
    const todoItem = {              //обьект туздук
      task: this.state.task,
      date: this.state.date,
      id: Math.random().toString(),
      completed: false,  // пока аткарыла элек
    };
    this.context.addTodo(todoItem)
    this.setState({
      task : '',
      date : ''
    })

    // console.log(todoItem);
  }
  render() {
    return (
      <Fragment>
        <h1 className={styles.title}>Todo App</h1>
        <form className={styles.form} onSubmit={this.submitHandler.bind(this)}>
          <input
            type="text"
            className={styles.input}
            onChange={this.taskChangeHandler.bind(this)}
            value = {this.state.task}
          />
          <input
            type="date"
            className={styles.input}
            onChange={this.dateChangeHandler.bind(this)}
            value = {this.state.date}

          />
          <button type="submit" className={styles.button}>
            Add
          </button>
        </form>
      </Fragment>
    );
  }
}
