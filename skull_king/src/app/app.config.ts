import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCF3QvvVMuaTYb_PWh4cN6Kix2fJV0rHFI",
  authDomain: "yohoho-afc60.firebaseapp.com",
  projectId: "yohoho-afc60",
  storageBucket: "yohoho-afc60.firebasestorage.app",
  messagingSenderId: "821668126664",
  appId: "1:821668126664:web:49b54801eae7e72a23aafd"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
