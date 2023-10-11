import { useReducer } from "react";
import { TodoReducer } from "../components/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false
  }
];

export const useTODO = () => {
  const [todos, dispach] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo
    };
    dispach(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: id
    };
    dispach(action);
  };

  const handleToggleDone = (id) => {
    const action = {
      type: "[TODO] TOGGLE DONE",
      payload: id
    };
    dispach(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleDone
  };
};
