export type Task = {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    status: string;
  }

  // Props for TaskColumn component:
// - title: The title of the column (e.g., "To Do", "In Progress", "Done").
// - tasks: Array of tasks belonging to this column.
// - onUpdate: Function to handle updating a task.
// - onDelete: Function to handle deleting a task by its ID.
  export type TaskColumnProps = {
    title: string;
    tasks: Task[];
    onUpdate: (updatedTask: Task) => void;
    onDelete: (id: number) => void;
  };
  
  // Props for the TaskForm component:
   // onSave: Function to handle saving a new task.
   // onCancel: Function to handle canceling task creation.
  export type TaskFormProps = {
     onSave: (task: { title: string; description: string; dueDate: string }) => void;
     onCancel: () => void;
 };

 // Props for TaskItem component:
// - task: The task object to be displayed and manipulated.
// - onUpdate: Function to handle updates to the task (e.g., editing or status changes).
// - onDelete: Function to handle task deletion.

export type TaskItemProps = {
  task: Task;
  onUpdate: (updatedTask: Task) => void;
  onDelete: () => void;
};