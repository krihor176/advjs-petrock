import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import Login from '../views/Login.vue';
import Signup from '../views/SignUp.vue';
import Dashboard from '../views/Dashboard.vue';
import PetRock from '../components/PetRock.vue';
import Admin from '../views/Admin.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' }, 
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/petrock', 
    name: 'Petrock', 
    component: PetRock,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/admin', 
    name: 'Admin', 
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true } 
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      unsubscribe(); 
      if (user) {
        if (to.matched.some(record => record.meta.requiresAdmin)) {
          const db = getFirestore();
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            next();
          } else {
            next({ name: 'Dashboard' }); 
          }
        } else {
          next();
        }
      } else {
        next({ name: 'login' });
      }
    });
  } else {
    next();
  }
});

export default router;