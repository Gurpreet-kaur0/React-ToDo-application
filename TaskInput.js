import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

const TaskInput = () => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          text,
          priority,
        })
      );
      setText("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="form-select"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask} className="btn btn-primary">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
