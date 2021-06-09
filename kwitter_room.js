
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBJq3oOXX74kFDypdk2L1NzxP0AL4n_s9U",
      authDomain: "kwitter-eeff1.firebaseapp.com",
      databaseURL: "https://kwitter-eeff1-default-rtdb.firebaseio.com",
      projectId: "kwitter-eeff1",
      storageBucket: "kwitter-eeff1.appspot.com",
      messagingSenderId: "144859891610",
      appId: "1:144859891610:web:0b58e6cb07c7b518251c23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("Username").innerHTML = "Welcome "+username+"!";

function add_room() {
    room_name = document.getElementById("add_room").value;
 
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("add_room",room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log(Room_names);
      //End code

      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomname(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();
function redirectToRoomname(name) {
      window.location = "kwitter_page.html";
}
firebase.database().ref("/").child(username).update({
      purpose : "adding user"
});

function logout() {
      window.location = "index.html";
}