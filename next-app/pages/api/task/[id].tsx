import { NextApiRequest, NextApiResponse } from 'next';
import { DataResponse, InvokeApiMethod } from '../../../utils/api';

const TaskEndpoint = (req: NextApiRequest, res: NextApiResponse) => {
  InvokeApiMethod(req, res, {
    'PUT': (req, res) => {
      return {
        status: 200,
        data: {}
      } as DataResponse<any>
    },
    'DELETE': (req, res) => {
      return {
        status: 200,
        data: {}
      } as DataResponse<any>
    }
  });
};

export default TaskEndpoint;