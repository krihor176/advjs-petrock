<template>
  <div class="pet-rock-container">
    <h1>{{ pet.name }} is feeling {{ pet.mood }}</h1>

    <div class="music-section">
      <button style="position: absolute; top: 10px; left: 10px; text-decoration: none;" @click="toggleMusic">{{ isMusicPlaying ? 'Stop Music' : 'Play Music' }}</button>
    </div>


    <div class="pet-rock-wrapper">
      <img :src="petImage" :alt="`${pet.name} is ${pet.mood}`" class="pet-rock-image" />
      <img v-if="pet.hat && pet.hat !== ''" :src="pet.hat" alt="Pet's hat" class="pet-rock-hat" />
    </div>
    <button style="position: absolute; top: 10px; right: 10px; text-decoration: none;"><router-link to="/dashboard">Go to account dashboard</router-link></button>
    
    <div class="name-section">
      <input v-model="newRockName" placeholder="Enter pet rock name" />
      <button @click="addRockName">Save Name</button>
    </div>

    <div class="food-section">
      <h2>Take care of your pet rock:</h2>
      <button @click="toggleFeedOptions">Feed</button>
      <div v-if="showFeedOptions" class="food-options">
        <button @click="feed(Food.Cake)">🍰</button>
        <button @click="feed(Food.Chocolate)">🍫</button>
        <button @click="feed(Food.Apple)">🍎</button>
        <button @click="feed(Food.Juice)">🥤</button>
        <button @click="feed(Food.Carrot)">🥕</button>
        <button @click="feed(Food.Tomato)">🍅</button>
        <button @click="feed(Food.Fish)">🐟</button>
        <button @click="feed(Food.Salad)">🥗</button>

        <button v-for="food in foodItems" :key="food.id" @click="feed(food.name)">
          {{ food.name }}
        </button>
      </div>
    </div>

    <div class="dress-up-section">
      <button @click="toggleHatOptions">Dress up</button>
      <div v-if="showHatOptions">
        <img v-for="hat in hats"
             :key="hat.id"
             :src="hat.src"
             :alt="hat.name"
             @click="selectHat(hat)"
             class="hat-option" />
      </div>
    </div>

    <div v-if="petRockNames.length">
      <h2>Pet Rock Names:</h2>
      <ul>
        <li v-for="rock in petRockNames" :key="rock.id">{{ rock.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { rockNameCollectionRef, rockHatCollectionRef } from '../firebase/firebase';
import happyRockImage from '@/assets/happy-rock.png';
import sadRockImage from '@/assets/sad-rock.png';
import festiveRockImage from '@/assets/festive-rock.png';
import { Mood } from '@/enums/Mood';
import { Food } from '@/enums/Food'; 
import backgroundMusic from '@/assets/backgroundmusic.mp3'; 



const pet = ref({
  name: '',
  mood: Mood.Happy,  
  hat: null,  
});

const newRockName = ref('');
const petRockNames = ref([]);
const foodItems = ref([]); 
const showHatOptions = ref(false);
const showFeedOptions = ref(false);
const audio = new Audio(backgroundMusic);
const isMusicPlaying = ref(false);

const hats = [
  { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/top-hat.png?alt=media&token=dcc6036a-850c-4538-830d-282277715d0bs', name: 'Top Hat' },
  { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/pink-hat.png?alt=media&token=0c01e53d-7c28-4a84-b1d4-ead53e38aded', name: 'Pink Hat' },
  { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/red-hat.png?alt=media&token=68858469-07a4-4af3-ba6f-7b38b6d43930', name: 'Red Hat' },
  { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/mypetrock-ce682.appspot.com/o/no-hat.png?alt=media&token=a557e9c1-c3f6-4f61-a25b-cec919277692', name: 'No Hat' },
];

const petImage = computed(() => {
  switch (pet.value.mood) {
    case Mood.Happy:
      return happyRockImage;
    case Mood.Sad:
      return sadRockImage;
    case Mood.Festive: 
      return festiveRockImage;
    default:
      return ''; 
  }
});

function toggleMusic() {
  if (isMusicPlaying.value) {
    audio.pause(); // Pause music 
    isMusicPlaying.value = false;
  } else {
    audio.play(); // Play music 
    isMusicPlaying.value = true;
  }
}


// option to toggle the visibility of the hat options you can put on the rock.
function toggleHatOptions() {
  showHatOptions.value = !showHatOptions.value;
}


async function selectHat(hat) {
  pet.value.hat = hat.name === 'No Hat' ? '' : hat.src;
  pet.value.mood = Mood.Happy;  
  await saveHatToFirebase(pet.value.hat); //this adds the selection to the firebase
}

// Saves the selected hat information to Firebase
async function saveHatToFirebase(hatSrc) { 
  const rockHatDoc = doc(rockHatCollectionRef, 'rock-hat-doc');
  await setDoc(rockHatDoc, { hat: hatSrc });
}

// Feeds the pet rock, determining its mood based on the selected food item.
async function feed(food) {
  const happyFoods = [Food.Cake, Food.Chocolate, Food.Apple, Food.Juice];
  const sadFoods = [Food.Carrot, Food.Tomato, Food.Fish, Food.Salad];
  
  const selectedFood = foodItems.value.find(item => item.name === food);

  if (selectedFood && selectedFood.mood) {
    pet.value.mood = selectedFood.mood;
  } else if (happyFoods.includes(food)) {
    pet.value.mood = Mood.Happy;
  } else if (sadFoods.includes(food)) {
    pet.value.mood = Mood.Sad;
  } else {
    pet.value.mood = pet.value.mood; 
  }

  if (food === 'Festive') { 
    pet.value.mood = Mood.Festive;
  }
}

// a button to Toggle the visibility of the food selection options
function toggleFeedOptions() {
  if (!showFeedOptions.value) {
    fetchFoodItems(); 
  }
  showFeedOptions.value = !showFeedOptions.value;
}

//with this command we ensure that we can add new pet rock names to firebase
async function addRockName() {
  if (newRockName.value.trim() !== '') {
    await setDoc(doc(rockNameCollectionRef, 'rock-name-doc'), { name: newRockName.value.trim() });
    pet.value.name = newRockName.value.trim();
    newRockName.value = '';
  }
}

// We are fetchings food items from Firebase to display as feeding options.
const db = getFirestore();

const fetchFoodItems = async () => {
  const foodSnapshot = await getDocs(collection(db, 'food'));
  foodItems.value = foodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Retrieve initial data for the pet rock, including its name, hat, and food items.
onMounted(async () => {
  const rockNameDoc = doc(rockNameCollectionRef, 'rock-name-doc');
  const docSnap = await getDoc(rockNameDoc);
  pet.value.name = docSnap.exists() ? docSnap.data().name : 'Rocky';

  const rockHatDoc = doc(rockHatCollectionRef, 'rock-hat-doc');
  const hatSnap = await getDoc(rockHatDoc);
  if (hatSnap.exists()) {
    pet.value.hat = hatSnap.data().hat;
  }

  fetchFoodItems();
});
</script>


<style scoped>
body {
  font-family: 'Patrick Hand', sans-serif;
  margin: 0;
  padding: 0;
}

.pet-rock-container {
  font-family: 'Patrick Hand', sans-serif;
  text-align: center;
  margin-top: 20px;
  color: white;
  background-image: url('@/assets/rock-background.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
}

.pet-rock-wrapper {
  position: relative;
  display: inline-block;
 
}

.pet-rock-image {
  width: 150px;
  height: 150px;
  margin: 10px 0;
}

.pet-rock-hat {
  position: absolute;
  top: 10px;
  left: 40px;
  width: 70px;
  height: auto;
}

.name-section {
  margin-top: 20px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
}

button {
  margin: 5px;
  padding: 8px 12px;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e67e00;
}

.food-section {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

.food-options button {
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  padding: 10px 15px;
}

.food-options button:hover {
  background-color: #e67e00;
}

.dress-up-section {
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 8px;
}

.hat-option {
  cursor: pointer;
  margin: 5px;
  width: 50px;
  height: 50px;
}

.hat-option:hover {
  opacity: 0.8;
}

h1 {
  color: white;
}

</style>
