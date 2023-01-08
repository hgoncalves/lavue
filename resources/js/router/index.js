import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import GuestLayout from '../layouts/GuestLayout.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import LoginPage from '../views/auth/LoginPage.vue';
import { useAuthStore } from '../stores/auth';
import NotFoundView from '../views/NotFoundView.vue';
import SettingsView from '../views/SettingsView.vue';
import StorageView from '../views/StorageView.vue';
import ContactsView from '../views/ContactsView.vue';
import ProfileView from '../views/auth/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: GuestLayout,
      redirect: 'admin/home',
      children: [
        {
          path: '/login',
          component: LoginPage,
          name: 'login',
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: NotFoundView
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'home',
          name: 'admin-home',
          component: HomeView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'apps',
          name: 'admin-apps',
          component: HomeView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'projects',
          name: 'admin-projects',
          component: ProjectsView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'contacts',
          name: 'admin-contacts',
          component: ContactsView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'storage',
          name: 'admin-storage',
          component: StorageView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: SettingsView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'auth/profile',
          name: 'admin-auth-profile',
          component: ProfileView,
          meta: {
            requiresAuth: true
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const { global } = window.i18n;

  document.title = `LaVue | ${global.t(`router.${to.name}`)}`;
  const authStore = useAuthStore();
  if (!to.meta.requiresAuth) {
    next();
  } else {
    if (!authStore.user) {
      authStore.fetchUser()
        .then(() => {
          if (authStore.authenticated) {
            next();
          } else {
            next('/login');
          }
        }).catch((error) => {
        next('/login');
      });
    } else {
      if (authStore.authenticated) {
        next();
      } else {
        next('/login');
      }
    }
  }
});

export default router;
