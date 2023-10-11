export const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  const handleToggleDone = () => {
    onToggleDone(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={todo.done ? "completed" : "not-completed"}
        onClick={handleToggleDone}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </li>
  );
};
