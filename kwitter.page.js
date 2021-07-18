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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();
