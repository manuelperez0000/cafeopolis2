  var firebaseConfig = {
    apiKey: "AIzaSyAbEQYZ_NxBVDJ3l3OmE9ERark8Y6DaHLs",
    authDomain: "cafeopolisbistro.firebaseapp.com",
    databaseURL: "https://cafeopolisbistro.firebaseio.com",
    projectId: "cafeopolisbistro",
    storageBucket: "cafeopolisbistro.appspot.com",
    messagingSenderId: "293995985025",
    appId: "1:293995985025:web:e3dcfbdc377cfa2c10f580"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore()