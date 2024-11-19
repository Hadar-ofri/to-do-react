import React, { useState } from "react";
import { Task } from "./types"
import { TaskFormProps } from "./types"



function TaskForm({ onSave, onCancel }: TaskFormProps) {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        dueDate: "",
      });

      // Handles input changes for the form fields
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
          ...prevTask,
          [name]: value,
        }));
      };
    
      
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask.title && newTask.description && newTask.dueDate) {
          onSave(newTask); // Pass task data back to the parent
          setNewTask({ title: "", description: "", dueDate: "" }); // Reset form
        } else {
          alert("Please fill in all fields.");
        }
      };
    

    return (

        <div className="task-form-container">
            <h3>Create a New Task</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Task Title:
                    <input type="text" name="title" value={newTask.title} onChange= {handleInputChange} required/>
                </label>
                <label>
                    Task Description:
                    <input type="text" name="description" value={newTask.description} onChange= {handleInputChange} required/>
                </label>
                <label>
                     Due Date:
                    <input type="date" name="dueDate" value={newTask.dueDate} onChange= {handleInputChange} required />
                </label>
                <div>
                    <button type="submit">Save Task</button>
                    <button type="button" onClick={onCancel} >Cancel</button>
                </div>
            </form>
        </div>
    )

  }
  
  export default TaskForm;