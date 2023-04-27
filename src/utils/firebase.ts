import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTifAaF_bDNWaWvQUHTkV7DdmM3MtuaYA',
  authDomain: 'todo-app-a661f.firebaseapp.com',
  projectId: 'todo-app-a661f',
  storageBucket: 'todo-app-a661f.appspot.com',
  messagingSenderId: '831067368209',
  appId: '1:831067368209:web:e6ed2b09e1bda42c2c7ab0',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
