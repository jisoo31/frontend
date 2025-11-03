// Firebase 설정 파일
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyAi-XjIQvifIv2epCF8bfA1IBDGzxeOtIo",
  authDomain: "router3-fire1031.firebaseapp.com",
  projectId: "router3-fire1031",
  storageBucket: "router3-fire1031.firebasestorage.app",
  messagingSenderId: "256766193571",
  appId: "1:256766193571:web:dc31c6261bb26583a6b416",
  measurementId: "G-QVS0PDB9PM"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
