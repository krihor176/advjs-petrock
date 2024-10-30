<template>
    <div class="admin-container">
      <h1>Admin Panel</h1>
      <button style="position: absolute; top: 10px; right: 10px; text-decoration: none;"><router-link to="/petrock">Go to your pet</router-link></button>

  
      <!-- Section to display existing rocks data -->
      <section>
        <h2>Existing Rocks</h2>
        <ul>
          <li v-for="rock in rocks" :key="rock.id">
            Name: {{ rock.name }}
            <button @click="deleteRock(rock.id)">Delete</button>
          </li>
        </ul>
      </section>
  
      <!-- Form to add a new rock name -->
      <section>
        <h2>Add New Rock Name</h2>
        <form @submit.prevent="addRockName">
          <input type="text" v-model="newRock.name" placeholder="Enter Rock Name" required />
          <button type="submit">Add Rock</button>
        </form>
      </section>
  
      <!-- Section to display added food items -->
      <section>
        <h2>Available Food Items</h2>
        <ul>
          <li v-for="food in foods" :key="food.id">
            Name: {{ food.name }} - Mood: {{ food.mood }}
            <button @click="deleteFood(food.id)">Delete</button>
          </li>
        </ul>
      </section>
  
      <!-- Form to add new food item -->
      <section>
  <h2>Add New Food Item</h2>
  <form @submit.prevent="addFood">
    <input type="text" v-model="newFood.name" placeholder="Food Name" required />
    <select v-model="newFood.mood" required>
      <option value="" disabled>Select Mood</option>
      <option value="Happy">Happy</option>
      <option value="Sad">Sad</option>
      <option value="Festive">Festive</option> <!-- Allow admin to select mood -->
    </select>
    <button type="submit">Add Food</button>
  </form>
</section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
  
  const db = getFirestore();
  
  // References
  const rocks = ref([]);
  const foods = ref([]);
  const newRock = ref({ name: '' });
  const newFood = ref({ name: '' });
  
  // Fetch rocks from the "rock-name" collection
  const fetchRocks = async () => {
    const rockSnapshot = await getDocs(collection(db, 'Rock-name'));
    rocks.value = rockSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };
  
  // Add new rock name to Firebase
  const addRockName = async () => {
    if (newRock.value.name) {
      await addDoc(collection(db, 'Rock-name'), { name: newRock.value.name });
      newRock.value.name = '';
      fetchRocks(); // Refresh the rocks list
    }
  };
  
  // Delete rock from Firebase
  const deleteRock = async (id) => {
    await deleteDoc(doc(db, 'Rock-name', id));
    fetchRocks(); // fetch command is used to refresh the list
  };
  
  // Fetch foods from the "food" collection
  const fetchFoods = async () => {
    const foodSnapshot = await getDocs(collection(db, 'food'));
    foods.value = foodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };
  
  // Add new food item to Firebase
  const addFood = async () => {
  if (newFood.value.name && newFood.value.mood) {
    await addDoc(collection(db, 'food'), {
      name: newFood.value.name,
      mood: newFood.value.mood, 
    });
    newFood.value = { name: '', mood: '' };
    fetchFoods(); // fetch command is used to refresh the list
  }
};
  // Delete food item from Firebase
  const deleteFood = async (id) => {
    await deleteDoc(doc(db, 'food', id));
    fetchFoods(); 
  };
  
  // Initialize fetches
  onMounted(() => {
    fetchRocks();
    fetchFoods();
  });
  </script>
  
  <style scoped>
  
  </style>
  
  
  <style scoped>
.admin-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9); 
  border-radius: 8px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  padding: 20px;
}

h1 {
  font-size: 2.5rem; 
  margin-bottom: 20px;
  color: #512427; 
}

h2 {
  font-size: 1.75rem; 
  margin-top: 30px;
  color: #6D2A33; 
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 2px solid #512427; 
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 1rem; 
  transition: border-color 0.3s; 
}

input[type="text"]:focus {
  border-color: #6D2A33; 
  outline: none; 
}

select {
  padding: 10px;
  border: 2px solid #512427;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 1rem; 
}

button {
  padding: 10px 15px;
  background-color: #ff8c00; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem; 
  transition: background-color 0.3s, transform 0.2s; 
}

button:hover {
  background-color: #e67e00; 
  transform: scale(1.05); 
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0; 
}

li {
  margin-bottom: 10px;
  font-size: 1.1rem; 
  color: #333; 
}

li button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #e74c3c; 
}

li button:hover {
  background-color: #c0392b; 
}
  </style>
  