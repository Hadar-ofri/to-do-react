import React, { useEffect } from 'react';
import { Task } from "./types"
import './App.css';
import { useState } from 'react';
import Intro from "./intro";
import TaskColumn from './taskColumn';
import TaskForm from './taskForm.tsx';

function App() {

   // Load tasks from localStorage or initialize with an empty array
  const storedTasks = localStorage.getItem("tasks");
  const parsedTasks = storedTasks ? JSON.parse(storedTasks) : []; // Parse or default to an empty array
  
  const [tasks, setTasks] = useState<Task[]>(parsedTasks);
  const [isCreatingTask, setisCreatingTask] = useState(false);
  

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    console.log("Saving tasks to localStorage:", tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  // Function to add a new task to the task array
  const addTask = (task: { title: string; description: string; dueDate: string }) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        status: "To Do",
      },
    ]);
    setisCreatingTask(false);
  };

  // Function to update an existing task in the array
  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Function to delete a task from array
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };



  return (
    <div className="App">
      {/* Introductory component with instructions */}
      <Intro />
      {!isCreatingTask ? <button id="taskButton" onClick={() => setisCreatingTask(true)}>Add Task</button> : 
      (<TaskForm
      onSave={addTask}
      onCancel={() => setisCreatingTask(false)}/>)
      }

      <div className="container">
          <TaskColumn
            title="To Do"
            tasks={tasks.filter((task) => task.status === "To Do")}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
          <TaskColumn
            title="In Progress"
            tasks={tasks.filter((task) => task.status === "In Progress")}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
          <TaskColumn
            title="Done"
            tasks={tasks.filter((task) => task.status === "Done")}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />

    </div>
    </div>
  );
}



export default App;
