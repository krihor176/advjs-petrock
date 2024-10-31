import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import Login from '../views/Login.vue';
import Signup from '../views/SignUp.vue';
import Dashboard from '../views/Dashboard.vue';
import PetRock from '../components/PetRock.vue';
import Admin from '../views/Admin.vue';

const db = getFirestore();

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/', 
    redirect: '/login' 
  },
  { 
    path: '/petrock', 
    name: 'Home', 
    component: PetRock,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let isAuthChecked = false;
let isAuthenticated = false;
let userRole = null;

// Check authentication state once
onAuthStateChanged(auth, (user) => {
  isAuthChecked = true;
  isAuthenticated = !!user;

  if (user) {
    // Fetch user role from Firestore
    getDoc(doc(db, 'users', user.uid)).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        userRole = docSnapshot.data().role;
      }
    });
  }
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAuth) {
    if (isAuthChecked) {
      if (isAuthenticated) {
        if (requiresAdmin && userRole !== 'admin') {
          alert('Access denied: You do not have permission to access the admin page.');
          next('/dashboard');
        } else {
          next(); 
        }
      } else {
        next('/login'); 
      }
    } else {
      const unwatch = onAuthStateChanged(auth, async (user) => {
        isAuthChecked = true;
        isAuthenticated = !!user;
        unwatch();

        if (isAuthenticated) {
          if (requiresAdmin) {
            const docSnapshot = await getDoc(doc(db, 'users', user.uid));
            userRole = docSnapshot.exists() ? docSnapshot.data().role : null;
            if (userRole === 'admin') {
              next();
            } else {
              alert('Access denied: You do not have permission to access the admin page.');
              next('/dashboard'); 
            }
          } else {
            next();
          }
        } else {
          next('/login');
        }
      });
    }
  } else {
    next(); 
  }
});

export default router;
