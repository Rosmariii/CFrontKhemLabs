import React from "react";
import "../Task.css";

const Task = ({ task, deleteTask, editTask }) => {
  const [completed, setCompleted] = React.useState(task.completed);

  return (
    <div className={completed ? "containerTarea containerTareaCompletada" : "containerTarea"}>
      <h3 className={completed ? "completada" : "noCompletada"}>{task.title}</h3>
      <p>{task.description}</p>
      {task.image && <img src={task.image} alt={task.title} style={{ maxWidth: "100%" }} />}
      {task.date && <p>Due date: {task.date}</p>}
      <button id="completar" onClick={() => setCompleted(!completed)}>
        {completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button id="edit" onClick={() => editTask(task.id)}>Edit</button>
      <button id="delete" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export { Task };
