import { observable, action, makeObservable } from "mobx";

export default class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addItem: action,
      removeItem: action,
      updateItem: action,
    });
  }

  addItem = (text) => {
    this.todos.push({ text, state: false });
  };

  removeItem = (idx) => {
    this.todos = this.todos.filter((_, index) => index !== idx);
  };

  updateItem = (idx, text, state) => {
    this.todos = this.todos.map((data, index) => {
      return idx === index ? { text, state } : data;
    });
  };
}
