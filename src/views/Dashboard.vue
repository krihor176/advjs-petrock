<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
    
    <br>
    <button class="submit"><router-link to="/petrock">Take care of your pet rock</router-link></button>
    <br>
    <button class="submit"><router-link to="/admin">Admin</router-link></button>
    <br>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

async function logout() {
  try {
    const auth = getAuth();
    await signOut(auth);
    router.push('/login');
  } catch (error) {
    console.error('Error signing out:', error);
    alert('Failed to logout. Please try again.');
  }
}
</script>

<style scoped>

.dashboard-container {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto;
}

.dashboard-container h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.dashboard-container p {
  margin-bottom: 20px;
  font-size: 1.2em;
  color: #666;
}

.dashboard-container button {
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1em;
  color: #fff;
  background-color: #ff8c00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.dashboard-container button:hover {
  background-color: #ff8c00;
}
</style>