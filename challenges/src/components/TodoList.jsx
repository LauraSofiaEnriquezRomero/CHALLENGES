import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDelete, onToggleDone }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
};
