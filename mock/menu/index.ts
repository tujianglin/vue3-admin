import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/demo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: 1,
      };
    },
  },
] as MockMethod[];
