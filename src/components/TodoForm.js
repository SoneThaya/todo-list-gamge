import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });

      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        onChange={handleTaskInputChange}
        value={todo.task}
        name="task"
        type="text"
      />
      <Button type="submit">submit</Button>
    </form>
  );
};

export default TodoForm;
