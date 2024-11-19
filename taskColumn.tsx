import React, { useState } from "react";
import { Task } from "./types";
import TaskItem from "./taskItem";
import { TaskColumnProps } from "./types";


function TaskColumn({ title, tasks, onUpdate, onDelete}: TaskColumnProps) {
  

  return (
    <div className="task-column">
      <h2>{title}</h2>
      <ul>
        {/* Render each task as a TaskItem component */}
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onUpdate}
            onDelete={() => onDelete(task.id)}
            
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskColumn;
