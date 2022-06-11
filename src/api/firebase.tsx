import { initializeApp, getApp, getApps } from "firebase/app";

// 파이어베이스 config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

// 파이어베이스 앱 초기화/설정
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// export const db = getFirestore();
// export const storage = getStorage();
// export const auth = getAuth();

export default app;
