import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('DRxqrBmufnSwZrzoIEhJ').collection('cartItems').doc('qmD2tFFdkfHhnk05XXcS');
firestore.doc('/users/DRxqrBmufnSwZrzoIEhJ/cartItems/qmD2tFFdkfHhnk05XXcS');
firestore.collection('users/DRxqrBmufnSwZrzoIEhJ/cartItems');