import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Banner/Banner.vue'
import About from '../views/About/About.vue'
import Contact from '../views/Contact/Contact.vue'
import Work from '../views/Work/Work.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      mode: 'abstract',
      redirect: '/#about',
      component: About
    },
    {
      path: '/works',
      name: 'work',
      mode: 'abstract',
      redirect: '/#work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      mode: 'abstract',
      redirect: '/#contact',
      component: Contact
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            let position = element.offsetTop;
            resolve({ top: position, behavior: 'smooth' });
          }
        });
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
