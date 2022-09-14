import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    redirect: '/system/menu',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: renderIcon(TableOutlined),
      sort: -100,
    //   hidden:true
    },
    children: [
      {
        path: 'menu',
        name: 'system_menu',
        meta: {
          title: '菜单权限管理',
        },
        component: () => import('@/views/system/menu/menu.vue'),
      },
      {
        path: 'role',
        name: 'system_role',
        meta: {
          title: '角色权限管理',
        },
        component: () => import('@/views/system/role/role.vue'),
      },
      {
        path: 'manager',
        name: 'manager',
        meta: {
          title: '操作员管理',
        },
        component: () => import('@/views/system/manager/manager.vue'),
      },
    ],
    // DataDictionary
  },
];

export default routes;
