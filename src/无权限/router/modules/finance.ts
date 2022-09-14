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
    path: '/finance',
    name: 'finance',
    component: Layout,
    meta: {
      title: '财务管理',
      icon: renderIcon(TableOutlined),
      sort: 0,
      hidden:true
    },
    children: [
     
      {
        path: 'diamond',
        name: 'finance_diamond',
        meta: {
          title: '钻石提现管理',
        },
        component: () => import('@/views/finance/diamond/index.vue'),
      },
      {
        path: 'priceLog',
        name: 'finance_priceLog',
        meta: {
          title: '金币流通账单',
        },
        component: () => import('@/views/finance/refill/index.vue'),
      },
      {
        path: 'refill',
        name: 'finance_refill',
        meta: {
          title: '人工充值',
        },
        component: () => import('@/views/finance/refill/index.vue'),
      }
    ],
  },
];

export default routes;
