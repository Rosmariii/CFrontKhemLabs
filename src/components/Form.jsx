import React from "react";

// type FormProps = {
//   task: {
//     title: string;
//     description: string;
//     image?: string;
//     date?: string;
//   };
//   handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   addOrUpdateTask: (e: React.FormEvent<HTMLFormElement>) => void;
//   isEditing: boolean;
// };

const Form = ({ task, handleChange, addOrUpdateTask, isEditing }) => {
  return (
    <div>
      <form onSubmit={addOrUpdateTask}>
        <input
          type="text"
          name="title"
          value={task.title}
          placeholder="Enter title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={task.description}
          placeholder="Enter description"
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="image"
          value={task.image}
          placeholder="Enter image URL (optional)"
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleChange}
        />
        <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      </form>
    </div>
  );
};

export { Form };
