import React from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../models/task';
import fetch from 'isomorphic-unfetch';
import { encryptWithSecret } from 'next/dist/next-server/server/crypto-utils';
import { DataResponse } from '../utils/api';

type TaskProps = { task: Task }

const ListItem = ({ task }: TaskProps) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const task = data as Task;
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    } as RequestInit;

    if (!task.id) {
      // Post new record
      requestOptions.method = 'POST';
      const res = await fetch('http://localhost:3000/api/tasks', requestOptions);

      // Clear form
      reset();

      // Update parent state?
    } else {
      // Put record update
      requestOptions.method = 'PUT';

      const res = await fetch(`http://localhost:3000/api/tasks/${task.id}`, requestOptions);
    }
  };

  const deleteTask = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    } as RequestInit;

    const res = await fetch(`http://localhost:3000/api/tasks/${task.id}`, requestOptions);
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