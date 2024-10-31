<template>
  <div class="container login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit" class="submit">Login</button>
    </form>
    <p>
      <router-link to="/signup" class="notauser">Don't have an account? Sign Up</router-link>
    </p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const email = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');

const router = useRouter();

const login = async () => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/dashboard');
  } catch (error :any) {
    handleAuthError(error);
  }
};

const handleAuthError = (error: { code: string }) => {
  switch (error.code) {
    case 'auth/invalid-email':
      errorMessage.value = 'The email address is not valid.';
      break;
    case 'auth/user-disabled':
      errorMessage.value = 'The user account has been disabled.';
      break;
    case 'auth/user-not-found':
      errorMessage.value = 'There is no user corresponding to the given email.';
      break;
    case 'auth/wrong-password':
      errorMessage.value = 'The password is invalid for the given email.';
      break;
    case 'auth/invalid-credential':
      errorMessage.value = 'Incorrect password. Please try again.';
      break;
    default:
      errorMessage.value = 'An unknown error occurred. Please try again.';
  }
};
</script>

<style scoped>

.login-container {
  max-width: 400px; 
  margin: 0 auto; 
  background-color: rgba(255, 255, 255, 0.9); 
  border-radius: 8px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  padding: 20px;
}

.login-container h1 {
  font-size: 2.5rem; 
  margin-bottom: 20px;
  color: #512427; 
}

.login-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-container form input[type="email"],
.login-container form input[type="password"] {
  width: 100%; 
  padding: 10px;
  border: 2px solid #512427;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 1rem; 
  transition: border-color 0.3s; 
}

.login-container form input[type="email"]:focus,
.login-container form input[type="password"]:focus {
  border-color: #6D2A33; 
  outline: none; 
}

.login-container .submit {
  width: 100%; 
  padding: 10px 15px;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s; 
}

.login-container .submit:hover {
  background-color: #e67e00;
  transform: scale(1.05); 
}

.login-container p,
.notauser {
  margin-top: 10px;
  color: #333; 
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 1rem; 
}

</style>