//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("add_room");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref("/").child(room_name).push({
            name: username,
            message: msg,
            like:0
      });
      document.getElementById("msg").value = "";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>"+name+"<img  class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up '> Like:"+like+"</span></button><hr>";

row = name_with_tag+message_with_tag+like_button+span_with_tag;

document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updatelike(message_id) {
  console.log("clicked on like button"+message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
 like : updated_likes
  });
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");

      window.location = "index.html";
}

