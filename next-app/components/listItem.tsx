import React from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../models/task';

type TaskProps = { task: Task }

const ListItem = ({ task }: TaskProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const task = data as Task;
    if (task.id !== undefined) {
      // Post new record

      // Clear form
      // Update parent state?
    } else {
      // Put record update
    }
  };

  const deleteTask = () => {
    console.log("Deleting " + task.id);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <input type="hidden" name="id" defaultValue={ task.id } ref={ register } />
        <label>List Item</label>
        <input type="text" name="task" defaultValue={ task.task } ref={ register } required />
        <label>Completed</label>
        <input type="checkbox" name="completed" ref={ register } />
        <input type="submit" />
      </form>
      <button onClick={ deleteTask } style={ task.id === undefined ?  { display: 'none' } :  {} }>Delete</button>
    </div>
  );
}

export default ListItem;