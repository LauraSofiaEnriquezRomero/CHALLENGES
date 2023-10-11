import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const [value, setValue] = useState("");

  const onWrite = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: value,
      done: false
    };
    onNewTodo(newTodo);
  };
  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <input
        type="text"
        placeholder="Tarea"
        className="form-control"
        onChange={(event) => onWrite(event)}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};