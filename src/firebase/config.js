import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDXBdN6ABn5b-a7IFqpnjD95dK4ODN8Abs',
	authDomain: 'myfinances-22381.firebaseapp.com',
	projectId: 'myfinances-22381',
	storageBucket: 'myfinances-22381.appspot.com',
	messagingSenderId: '114435169336',
	appId: '1:114435169336:web:8c2275da6d1f3d1e18dacd',
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
