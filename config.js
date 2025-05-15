
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBHs2f27r1tyn_HNqNmt732FjwI26bFV_w",
    authDomain: "study-wars-8bf82.firebaseapp.com",
    databaseURL: "https://study-wars-8bf82-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "study-wars-8bf82",
    storageBucket: "study-wars-8bf82.firebasestorage.app",
    messagingSenderId: "288926111029",
    appId: "1:288926111029:web:b42a38d901c6398026a87c",
    measurementId: "G-X8R7FRMFHZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
