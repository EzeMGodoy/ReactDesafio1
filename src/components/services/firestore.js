import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtUQtANyeDvn7YmyC5cyqbKF0v6vxdKwQ",
  authDomain: "ser-impersonal.firebaseapp.com",
  projectId: "ser-impersonal",
  storageBucket: "ser-impersonal.appspot.com",
  messagingSenderId: "844869750108",
  appId: "1:844869750108:web:87e9f4da41f24e15858599",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testDB() {
  console.log(db);
}

/* ASYNC AWAIT */
export async function getAllCapacitaciones() {
  //Referencia a la collection --> capacitaciones
  const capacitacionesCollectionRef = collection(db, "capacitaciones");
  // Leemos el snapshot de los documentos actuales con getDocs
  const docSnapshot = await getDocs(capacitacionesCollectionRef);
  //Recibimos un array "docs" debtri de ese snapshot
  const dataCapacitaciones = docSnapshot.docs.map((item) => {
    return item.data();
  });
  return dataCapacitaciones;
}

export default db;
