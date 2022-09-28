import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBtuFUY5xgI309tig-zQeP16tqzsF0GGh0',
  authDomain: 'react-firebase-eb95b.firebaseapp.com',
  databaseURL:
    'https://react-firebase-eb95b-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'react-firebase-eb95b',
  storageBucket: 'react-firebase-eb95b.appspot.com',
  messagingSenderId: '377447390915',
  appId: '1:377447390915:web:ac31122764d88e07f5cc76',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);
export const getChats = () => ref(db, 'chats');
