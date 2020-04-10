import React from 'react';
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { Task } from '../models/task';
import ListItem from '../components/listItem';
import { DataResponse } from '../utils/api';

type IndexProps = {
  tasks: Task[]
};

const Index = ({ tasks }: IndexProps) =>
  <Layout>
    <h1>Task List</h1>
    <ul>
      {
        tasks.map((task: Task) => (
          <li key={ task.id }>
            <ListItem task={ task } />
          </li>
        ))
      }
    </ul>
    <div>New Task</div>
    <ListItem task={ { task: '', completed: false } } />
    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </Layout>

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:3000/api/tasks');
  const json = await res.json() as DataResponse<Task[]>;
  console.log(`Task data fetched. Count: ${json.data.length}`);

  return { tasks: json.data };
}

export default Index;