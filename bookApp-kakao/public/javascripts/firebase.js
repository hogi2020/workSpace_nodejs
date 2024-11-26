import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbMGJSMgx0ZEfDwY8BEpOosHa-XMM70tI",
    authDomain: "slalom2024-1ae65.firebaseapp.com",
    projectId: "slalom2024-1ae65",
    storageBucket: "slalom2024-1ae65.firebasestorage.app",
    messagingSenderId: "1083571910029",
    appId: "1:1083571910029:web:d2ad017e204ae9c58cf9c4"
};

// Initialize Firebase
// 이 파일에서 생성된 객체를 외부에서 사용하려면 변수 선언 앞에 export붙임
// 인증된 클라이언트 정보
// 로그인(구글 이메일과 비번)을 진행하는 login.ejs에서도 app객체를 사용함
// 해당 파일(login.ejs, header.ejs)에서 app출력해보면 위 firebaseConfig에 내용이 있다.
export const app = initializeApp(firebaseConfig);

