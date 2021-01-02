import React, { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  return (
    <form>
      <input
        onChange={handleTaskInputChange}
        value={todo.task}
        name="task"
        type="text"
      />
      <button />
    </form>
  );
};

export default TodoForm;
