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
    path: '/subject',
    name: 'subject',
    component: Layout,
    meta: {
      title: '专题管理',
      isRoot: true,
      icon: renderIcon(TableOutlined),
      sort: -13,
    },
    children: [

      {
        path: 'index',
        name: 'subject_index',
        meta: {
          title: '专题列表',
        },
        component: () => import('@/views/subject/index.vue'),
      },
      {
        path: 'detail',
        name: 'subject_detail',
        meta: {
          title: '专题影片细则',
        },
        component: () => import('@/views/subject/detail.vue'),
      },

    ],
  },
];

export default routes;
