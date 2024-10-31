import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Ensure this points to a TypeScript file

const app = createApp(App);

app.use(router);
app.mount('#app');