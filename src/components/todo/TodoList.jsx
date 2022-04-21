import { observer } from "mobx-react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useStores from "../../hooks/useStores";
import "./styles/TodoList.css";
import TodoItem from "./TodoItem";

export default observer(function TodoList() {
  const { todo } = useStores();

  const [inputText, setInputText] = useState("");

  const addTodoItemHandler = () => {
    todo.addItem(inputText);

    setInputText("");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div className="todo-input-container">
        <input
          className="todo-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="todo-input-button" onClick={addTodoItemHandler}>
          <AiOutlinePlus size={`50px`} />
        </button>
      </div>

      <div>
        {todo.todos.map((item, idx) => {
          return (
            <TodoItem
              key={item.text}
              index={idx}
              todo={item}
              removeHandler={todo.removeItem}
              updateHandler={todo.updateItem}
            />
          );
        })}
      </div>
    </div>
  );
});
