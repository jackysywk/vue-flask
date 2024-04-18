// src/router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import MyTest from '@/components/MyTest.vue';  // Ensure the path matches where your Test.vue is located

Vue.use(VueRouter);

const routes = [
    {
      path: '/home',
      name: 'home',
      component: MyTest
    }
  ];
  
  const router = new VueRouter({
    mode: 'history',
    routes
  });
  
  export default router;