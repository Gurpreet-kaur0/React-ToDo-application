import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorities = { High: 1, Medium: 2, Low: 3 };
    return priorities[a.priority] - priorities[b.priority];
  });

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
