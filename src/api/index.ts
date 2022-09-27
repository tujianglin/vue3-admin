import { defHttp } from '/@/utils/http';

export const getMock = () => {
  return defHttp.get({
    url: '/demo',
  });
};
