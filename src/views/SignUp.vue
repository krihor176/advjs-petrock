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

<script lang="ts">
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async signup() {
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        
        // Assign role to user in Firestore
        await this.assignUserRole(userCredential.user.uid);

        // Redirect to dashboard after successful signup
        this.$router.push('/dashboard');
      } catch (error) {
        this.handleAuthError(error);
      }
    },
    async assignUserRole(uid) {
      const db = getFirestore();
      await setDoc(doc(collection(db, 'users'), uid), {
        uid: uid,
        role: 'user' // Setting default role to "user"
      });
    },
    handleAuthError(error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.errorMessage = 'The email address is already in use by another account.';
          break;
        case 'auth/invalid-email':
          this.errorMessage = 'The email address is not valid.';
          break;
        case 'auth/operation-not-allowed':
          this.errorMessage = 'Email/password accounts are not enabled.';
          break;
        case 'auth/weak-password':
          this.errorMessage = 'The password is too weak.';
          break;
        default:
          this.errorMessage = 'An unknown error occurred. Please try again.';
      }
    }
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
