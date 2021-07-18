function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";}

    var firebaseConfig = {
        apiKey: "AIzaSyABJmimgazjTD3NWq4F_gqmirW4I_v8NXU",
        authDomain: "chat--app-project.firebaseapp.com",
        databaseURL: "https://chat--app-project-default-rtdb.firebaseio.com",
        projectId: "chat--app-project",
        storageBucket: "chat--app-project.appspot.com",
        messagingSenderId: "308543822728",
        appId: "1:308543822728:web:cabe76c7a207fcdd62f83d",
        measurementId: "G-SYZWN5ZZDH"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);