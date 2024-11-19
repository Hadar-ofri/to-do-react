import React, { useState } from "react";
import { Task } from "./types";
import { TaskItemProps } from "./types";



function TaskItem({task, onUpdate, onDelete}: TaskItemProps) {
  // State to manage whether the task is in editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the editable fields while editing the task
  const [editingData, setEditingData] = useState<Partial<Task>>(task);

  // Handles changes to the input fields while editing
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Saves the changes made to the task and exits editing mode
  const saveChanges = () => {
    if (editingData.title && editingData.description && editingData.dueDate) {
      onUpdate({ ...task, ...editingData });
      setIsEditing(false);
    } else {
      alert("All fields are required.");
    }
  };

  const getNextStatus = () => {
    if (task.status === "To Do") return "In Progress";
    if (task.status === "In Progress") return "Done";
    return null;
  };

  const getPreviousStatus = () => {
    if (task.status === "Done") return "In Progress";
    if (task.status === "In Progress") return "To Do";
    return null;
  };


  return (
    <li className="task-item">
      {/* If in editing mode, show input fields and save/cancel buttons */}
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editingData.title || ""}
            onChange={handleEditInputChange}
          />
          <input
            type="text"
            name="description"
            value={editingData.description || ""}
            onChange={handleEditInputChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editingData.dueDate || ""}
            onChange={handleEditInputChange}
          />
          <div>
            <button onClick={saveChanges}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
         /* If not in editing mode, show task details and action buttons */
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>Due: {task.dueDate}</small>
          <div className="task-buttons-group">
          {getPreviousStatus() && (
              <button className="move-button"
                onClick={() =>
                  onUpdate({ ...task, status: getPreviousStatus()! })
                }
              >
                Move Back
              </button>
            )}
            {getNextStatus() && (
              <button className="move-button"
                onClick={() => onUpdate({ ...task, status: getNextStatus()! })}
              >
                Move Forward
              </button>
            )}
            </div>
            <div className="action-buttons">
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-button" onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
