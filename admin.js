import { db, auth } from "./firebase.js";
import { addDoc, collection } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (!user) window.location = "login.html";
});

window.addNews = async function () {
  await addDoc(collection(db, "news"), {
    title: title.value,
    content: content.value,
    date: new Date()
  });
  alert("News added");
};
