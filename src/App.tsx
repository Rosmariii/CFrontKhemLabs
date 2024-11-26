import React from "react";
import "./App.css";
import { Task } from "./components/Task";
import { Form } from "./components/Form";

type TaskType = {
  id: number;
  title: string;
  description: string;
  image?: string;
  date?: string;
  completed: boolean;
};

function App() {
  const [task, setTask] = React.useState<TaskType>({
    id: 0,
    title: "",
    description: "",
    image: "",
    date: "",
    completed: false,
  });
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addOrUpdateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task.title.trim() || !task.description.trim()) {
      alert("Title and description are required!");
      return;
    }

    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...task } : t))
      );
      setIsEditing(false);
    } else {
      const newTask = { ...task, id: new Date().getTime() };
      setTasks([newTask, ...tasks]);
    }

    setTask({
      id: 0,
      title: "",
      description: "",
      image: "",
      date: "",
      completed: false,
    });
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const editTask = (id: number) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    if (taskToEdit) {
      setTask(taskToEdit);
      setIsEditing(true);
    }
  };

  return (
    <>
      <h2>Todo List</h2>
      <Form task={task} handleChange={handleChange} addOrUpdateTask={addOrUpdateTask} isEditing={isEditing} />
      {tasks.map((t) => (
        <Task key={t.id} task={t} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </>
  );
}

export default App;
