import { http } from '@/utils/http/axios';

/**
 * @description: 根据用户id获取用户菜单
 */
export function adminMenus() {
  return http.request({
    url: '/menus',
    method: 'GET',
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
 * 新增/保存菜单
 * @param params
 */
export function addOrUpdateMenu(data) {
  return http.request({
    url: '/menu/addOrUpdateMenu/v1',
    method: 'POST',
    data,
  });
}

//删除菜单
export function deleteMenu(data) {
    return http.request({
      url: `/menu/menu/v1?id=${data}`,
      method: 'DELETE',
      
    });
  }