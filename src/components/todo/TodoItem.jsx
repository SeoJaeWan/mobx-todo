import React, { useState } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/useStores";
import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import "./styles/TodoItem.css";

export default observer(function TodoItem({
  todo,
  removeHandler,
  updateHandler,
  index,
}) {
  return (
    <div className="todo-item-container">
      <div className="todo-item-text">{todo.text}</div>
      <div className="todo-item-buttons">
        <button
          className="todo-item-button "
          onClick={() => updateHandler(index, todo.text, !todo.state)}
        >
          {todo.state ? (
            <ImRadioChecked size={`30px`} />
          ) : (
            <ImRadioUnchecked size={`30px`} />
          )}
        </button>
        <button
          className="todo-item-button "
          onClick={() => removeHandler(index)}
        >
          <MdDelete size={`30px`} />
        </button>
      </div>
    </div>
  );
});
