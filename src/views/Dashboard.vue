<template>
  <div>
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

<script lang="ts">
import { getAuth, signOut } from 'firebase/auth';

export default {
  methods: {
    async logout() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.$router.push('/login'); // Redirect to login after successful logout
      } catch (error) {
        console.error('Error signing out:', error);
        alert('Failed to logout. Please try again.');
      }
    }
  }
};
</script>

<style scoped>

.dashboard-container {
  text-align: center;
}

.dashboard-container h1 {
  margin-bottom: 20px;
}

.dashboard-container p {
  margin-bottom: 20px;
}

.dashboard-container button {
  margin-bottom: 20px;
}
</style>