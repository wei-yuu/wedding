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
        beforeEnter: (to, _) => {
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
    ],
  },
];

export default routes;
