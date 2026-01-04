import { db } from "./firebase.js";
import { collection, getDocs, query, orderBy } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const list = document.getElementById("newsList");

const q = query(collection(db, "news"), orderBy("date", "desc"));
const snap = await getDocs(q);

snap.forEach(doc => {
  const n = doc.data();
  const date = n.date?.toDate().toLocaleDateString();

  list.innerHTML += `
    <div class="card">
      <div class="date">${date}</div>
      <h2>${n.title}</h2>
      <p>${n.content}</p>
    </div>
  `;
});
