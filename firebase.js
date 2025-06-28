// firebase.js  – corrected
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage }     from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey:            "AIzaSyACyqdIKfScB2bZ-adDLVFh0rN8zUmMgDw",
  authDomain:        "livewire-c3137.firebaseapp.com",
  projectId:         "livewire-c3137",
  storageBucket:     "livewire-c3137.appspot.com",   // ← fixed
  messagingSenderId: "901763243878",
  appId:             "1:901763243878:web:ef48f05e6a39e41c4732a7"
};

const app = initializeApp(firebaseConfig);

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);
