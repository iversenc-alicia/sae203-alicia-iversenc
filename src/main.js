import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBxTtcVBbzJawZZK9lagkyKnwfkh7GEU8M",
   authDomain: "sae203-alicia-iversenc.firebaseapp.com",
   projectId: "sae203-alicia-iversenc",
   storageBucket: "sae203-alicia-iversenc.appspot.com",
   messagingSenderId: "928096453483",
   appId: "1:928096453483:web:655154c7fcc6f32706822e"
 };

 // Initialize Firebase
 const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
