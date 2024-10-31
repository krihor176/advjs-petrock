<template>
  <div class="container signup-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit" class="submit">Sign Up</button>
    </form>
    <p><router-link to="/login" class="haveanacc">Already have an account? Login</router-link></p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

const email = ref<string>('');
const password = ref<string>('');
const errorMessage = ref<string>('');

const router = useRouter();

const signup = async () => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    
    await assignUserRole(userCredential.user.uid);

    router.push('/dashboard');
  } catch (error: any) {
    handleAuthError(error);
  }
};

const assignUserRole = async (uid: string) => {
  const db = getFirestore();
  await setDoc(doc(collection(db, 'users'), uid), {
    uid: uid,
    role: 'user' 
  });
};

const handleAuthError = (error: { code: string }) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      errorMessage.value = 'The email address is already in use by another account.';
      break;
    case 'auth/invalid-email':
      errorMessage.value = 'The email address is not valid.';
      break;
    case 'auth/operation-not-allowed':
      errorMessage.value = 'Email/password accounts are not enabled.';
      break;
    case 'auth/weak-password':
      errorMessage.value = 'The password is too weak.';
      break;
    default:
      errorMessage.value = 'An unknown error occurred. Please try again.';
  }
};
</script>


<style scoped>
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9); 
  border-radius: 8px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  padding: 20px;
}

.signup-container h1 {
  font-size: 2.5rem; 
  margin-bottom: 20px;
  color: #512427; 
}

.signup-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-container form input[type="email"],
.signup-container form input[type="password"] {
  width: 100%; 
  padding: 10px;
  border: 2px solid #512427; 
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 1rem; 
  transition: border-color 0.3s; 
}

.signup-container form input[type="email"]:focus,
.signup-container form input[type="password"]:focus {
  border-color: #6D2A33;
  outline: none; 
}

.signup-container .submit {
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

.signup-container .submit:hover {
  background-color: #e67e00; 
  transform: scale(1.05); 
}

.signup-container p,
.haveanacc {
  margin-top: 10px;
  color: #333; 
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 1rem; 
}

</style>
