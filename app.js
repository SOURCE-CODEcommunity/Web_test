import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  updateDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


  const firebaseConfig = {
  apiKey: "AIzaSyAYeaAsFZuP2p7zwKPpu30DoFZa0E62h3Q",
  authDomain: "quickcbt-f3e52.firebaseapp.com",
  projectId: "quickcbt-f3e52",
  storageBucket: "quickcbt-f3e52.firebasestorage.app",
  messagingSenderId: "84415489295",
  appId: "1:84415489295:web:150ca254278efaa8b20a7a",
  measurementId: "G-JTDXD1SRPH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todosCollection = collection(db, "todos");

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add a new task
todoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    await addDoc(todosCollection, {
      text: task,
      completed: false,
      createdAt: new Date().toISOString()
    });
    todoInput.value = '';
  }
});

// Delete a task
async function deleteTask(id) {
  await deleteDoc(doc(db, "todos", id));
}

// Toggle task completion
async function toggleTask(id, completed) {
  await updateDoc(doc(db, "todos", id), {
    completed: !completed
  });
}

// Display tasks in real-time
onSnapshot(todosCollection, (snapshot) => {
  todoList.innerHTML = '';
  snapshot.docs.forEach((doc) => {
    const task = doc.data();
    const li = document.createElement('li');
    li.innerHTML = `
      <span style="${task.completed ? 'text-decoration: line-through;' : ''}">
        ${task.text}
      </span>
      <div>
        <button onclick="toggleTask('${doc.id}', ${task.completed})">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onclick="deleteTask('${doc.id}')">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
});

// Make functions global for HTML onclick
window.deleteTask = deleteTask;
window.toggleTask = toggleTask;
