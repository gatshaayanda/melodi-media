import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, Firestore } from 'firebase/firestore';
import type { Analytics } from 'firebase/analytics';

// Live Firebase project config for Melodi Media
const firebaseConfig = {
  apiKey:             'AIzaSyASlp0QKBO5PrYVaqu9c2l-0pT3ry5bOKU',
  authDomain:         'melodi-media.firebaseapp.com',
  projectId:          'melodi-media',
  storageBucket:      'melodi-media.firebasestorage.app',
  messagingSenderId:  '532874280336',
  appId:              '1:532874280336:web:1629359e8be6e3932ac715',
  measurementId:      'G-9T9VG4Y7XF',
};

// Initialize or reuse Firebase app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// AUTH
export const auth: Auth = getAuth(app);
if (
  typeof window !== 'undefined' &&
  process.env.NEXT_PUBLIC_FIREBASE_EMULATOR === 'true'
) {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
}

// FIRESTORE
export const firestore: Firestore = getFirestore(app);
if (
  typeof window !== 'undefined' &&
  process.env.NEXT_PUBLIC_FIREBASE_EMULATOR === 'true'
) {
  connectFirestoreEmulator(firestore, 'localhost', 8080);
}

// ANALYTICS (browser-only)
let _analytics: Analytics | null = null;
export async function getAnalyticsClient(): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null;
  const { isSupported, getAnalytics } = await import('firebase/analytics');
  if (await isSupported()) {
    _analytics ||= getAnalytics(app);
    return _analytics;
  }
  return null;
}
