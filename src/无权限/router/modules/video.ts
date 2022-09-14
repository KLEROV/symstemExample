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
    path: '/video',
    name: 'video',
    component: Layout,
    meta: {
      title: '影片管理',
      isRoot: true,
      icon: renderIcon(TableOutlined),
      sort: -11,
    //   hidden:true,
    },
    children: [
      {
        path: 'vip',
        name: 'video_vip',
        meta: {
          title: '长视频管理',
        },
        component: () => import('@/views/video/vip.vue'),
      },
      {
        path: 'free',
        name: 'video_free',
        meta: {
          title: '短视频管理',
        },
        component: () => import('@/views/video/freeVideo.vue'),
      },
      {
        path: 'default',
        name: 'video_default',
        meta: {
          title: '视频发布',
        },
        component: () => import('@/views/video/defaultVideo.vue'),
      },
    ],
  },
];

export default routes;
