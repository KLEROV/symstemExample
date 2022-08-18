import { http } from '@/utils/http/axios';

export interface BasicResponseModel<T = any> {
  data: any;
  code: number;
  message: string;
  result: T;
}

export interface BasicPageParams {
  pageNumber: number;
  pageSize: number;
  total: number;
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo(data) {
  return http.request({
    url:`/employee/getEmp/v1?id=${data}`,
    method: 'get',
  });
}

/**
 * 获取tree菜单列表
 * @param params
 */
 export function getMenuList(params?) {
  return http.request({
    url: '/menu/getMenuTree/v1',
    method: 'GET',
    params,
  });
}

/**
 * @description: 用户登录
 */
export function login(params) {
  return http.request<BasicResponseModel>(
    {
      url: `/employee/login/v1?userName=${params.userName}&password=${params.password}&authCode=${params.authCode}`,
      method: 'POST',
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 用户修改密码
 */
export function changePassword(params, uid) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 用户登出
 */
export function logout(params) {
  return http.request({
    url: '/login/logout',
    method: 'POST',
    params,
  });
}


