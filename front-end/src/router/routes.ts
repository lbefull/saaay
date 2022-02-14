import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/calendar', component: () => import('pages/Calendar.vue') },
    ],
  },

  {
    path: '/account/:targetId',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Account.vue') }],
  },

  {
    path: '/calendar',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Calendar.vue') }],
  },

  {
    name: 'Signin',
    path: '/signin',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Signin.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
