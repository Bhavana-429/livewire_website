// Import Firebase core and services from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your Firebase configuration (copy from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyACyqdIKfScB2bZ-adDLVFh0rN8zUmMgDw",
  authDomain: "livewire-c3137.firebaseapp.com",
  projectId: "livewire-c3137",
  storageBucket: "livewire-c3137.firebasestorage.app",
  messagingSenderId: "901763243878",
  appId: "1:901763243878:web:ef48f05e6a39e41c4732a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
