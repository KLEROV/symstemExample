// luckDraw
import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';
import { number } from 'vue-types';

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
    path: '/luckDraw',
    name: 'luckDraw',
    component: Layout,
    meta: {
      title: '盲盒管理',
      isRoot: true,
      icon: renderIcon(TableOutlined),
      sort: -19,
    },
    children: [
      {
        path: 'index',
        name: 'luckDraw_index',
        meta: {
          title: '奖池列表',
        },
        component: () => import('@/views/luckDraw/index.vue'),
      },
      {
        path: 'gifts',
        name: 'gifts',
        meta: {
          title: '奖品列表',
        },
        component: () => import('@/views/luckDraw/gifts.vue'),
      },
      {
        path: 'record',
        name: 'record',
        meta: {
          title: '抽奖记录',
        },
        component: () => import('@/views/luckDraw/record.vue'),
      },
      {
        path: 'win',
        name: 'win',
        meta: {
          title: '中奖记录',
        },
        component: () => import('@/views/luckDraw/win.vue'),
      }
    ],
  },
];

export default routes;
