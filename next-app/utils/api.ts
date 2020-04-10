import { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  status: number;
  message?: string;
}

export interface DataResponse<T> extends ApiResponse {
  data: T;
}

type MethodType = 'GET' | 'POST' | 'DELETE' | 'PUT';

type ApiMethods = Partial<Record<MethodType, (req: NextApiRequest, res: NextApiResponse) => ApiResponse>>;

export const InvokeApiMethod = (req: NextApiRequest,
  res: NextApiResponse,
  methods: ApiMethods) => {
  if (methods[req.method as MethodType] !== undefined) {
    const result = methods[req.method as MethodType]!(req, res);

    res.status(result.status).json(result);
  } else {
    res.status(405).json({
      status: 405,
      message: `${req.method} not supported`
    } as ApiResponse);
  }
}
