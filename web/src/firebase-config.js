/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDnaBdt7rhsQvq3SJ-HMbhHMdW_5-eIMFM",
  authDomain: "friendlychat-2909b.firebaseapp.com",
  projectId: "friendlychat-2909b",
  storageBucket: "friendlychat-2909b.appspot.com",
  messagingSenderId: "491148330051",
  appId: "1:491148330051:web:096e994010a3de63bbc0f6"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}