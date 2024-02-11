import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import GalleryPage from '../components/GalleryPage.vue';
import ContactsPage from '../components/ContactsPage.vue';
import RegistrationPage from '../components/RegistrationPage.vue';
import LoginComponent from '../components/LoginComponent.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/gallery', component: GalleryPage, meta: { requiresAuth: true } },
  { path: '/contacts', component: ContactsPage, meta: { requiresAuth: true } },
  { path: '/register', component: RegistrationPage },
  { path: '/login', component: LoginComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkAuthentication();
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

function checkAuthentication() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated === 'true';
}

export default router;
