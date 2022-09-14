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
    path: '/setCommitList',
    name: 'setCommitList',
    component: Layout,
    meta: {
      title: '评论管理',
      isRoot: true,
      icon: renderIcon(TableOutlined),
      sort: -21
    },
    children: [
      {
        path: 'index',
        name: 'setCommitList_index',
        meta: {
          title: '黑料评论列表',
        },
        component: () => import('@/views/commitList/index.vue'),
      },
      {
        path: 'videotList',
        name: 'videotList',
        meta: {
          title: '视频评论列表',
        
        },
        component: () => import('@/views/commitList/videoList.vue'),
      }
    ],
  },
];

export default routes;
