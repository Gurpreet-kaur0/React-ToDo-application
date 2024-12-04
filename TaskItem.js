import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/slices/tasksSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newPriority, setNewPriority] = useState(task.priority);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTask({ id: task.id, newText, newPriority }));
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>
            {task.text} - <strong>{task.priority}</strong>
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
