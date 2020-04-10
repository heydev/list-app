import { NextApiRequest, NextApiResponse } from 'next';
import { DataResponse, InvokeApiMethod } from '../../utils/api';
import { Task } from '../../models/task';

const TasksEndpoint = (req: NextApiRequest, res: NextApiResponse) => {
  InvokeApiMethod(req, res, {
    'GET': (req, res) => {
      return {
        status: 200,
        data: [
          { id: 1, task: 'Example Task', completed: false },
        ]
      } as DataResponse<Task[]>;
    },
    'POST': (req, res) => {
      return {
        status: 200,
        data: {}
      } as DataResponse<any>;
    }
  });
};

export default TasksEndpoint;