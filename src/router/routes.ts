import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('@/layout/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: async () => await import('@/pages/index.vue'),
        beforeEnter: (to) => {
          if (to.query.redirect) {
            return { path: to.query.redirect as string };
          }
        },
      },
      {
        path: 'our-story',
        name: 'story',
        component: async () => await import('@/pages/story.vue'),
      },
      {
        path: 'form',
        name: 'form',
        component: async () => await import('@/pages/form.vue'),
      },
      {
        path: 'event-detail',
        name: 'detail',
        component: async () => await import('@/pages/detail.vue'),
      },
      {
        path: 'seating',
        name: 'seating',
        component: async () => await import('@/pages/seating.vue'),
      },
    ],
  },
  {
    path: '/message',
    component: async () => await import('@/layout/message.vue'),
    children: [
      {
        path: '',
        name: 'message',
        component: async () => await import('@/pages/message/index.vue'),
      },
      {
        path: 'wishes',
        name: 'wishes',
        component: async () => await import('@/pages/message/wishes.vue'),
      },
      {
        path: 'qrcode',
        name: 'qrcode',
        component: async () => await import('@/pages/message/qrcode.vue'),
      },
    ],
  },
  {
    path: '/drive',
    name: 'drive',
    component: async () => await import('@/pages/drive.vue'),
  },
];

export default routes;
