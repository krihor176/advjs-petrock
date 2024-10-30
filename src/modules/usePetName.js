import { ref, onMounted } from 'vue';
import { rockNameCollectionRef } from './firebase';
import { onSnapshot, addDoc } from 'firebase/firestore';

export const usePetRock = () => {

  // Step 1: Create a new pet rock name and store it in a ref
  const newRockName = ref('');

  // Step 2: Create a list of pet rock names and store it in a ref
  const petRockNames = ref([]);

  // Step 3: Create a function to retrieve and display pet rock names from Firebase
  onMounted(() => {
    onSnapshot(rockNameCollectionRef, (snapshot) => {
      petRockNames.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() // spread operator
      }));
    });
  });

  // Step 4: Create a function to add a new pet rock name to Firebase
  const addRockName = async () => {
    if (newRockName.value.trim() !== '') {
      await addDoc(rockNameCollectionRef, {
        name: newRockName.value.trim()
      });
      newRockName.value = ''; 
    }
  };

  return {
    newRockName,
    petRockNames,
    addRockName
  };
};
