import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

window.login = function () {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => window.location = "admin.html")
    .catch(() => alert("Login failed"));
};
