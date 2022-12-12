var firebaseConfig = {
    apiKey: "AIzaSyAxVQCipjPlrEmrkO-sVeYp0PGKKZEaqco",
    authDomain: "einstein-xsjx.firebaseapp.com",
    databaseURL: "https://einstein-xsjx-default-rtdb.firebaseio.com",
    projectId: "einstein-xsjx",
    storageBucket: "einstein-xsjx.appspot.com",
    messagingSenderId: "554991876589",
    appId: "1:554991876589:web:ca4cd0d23d11f4c6604fe4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name; 
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("roomname - "+ Room_names);
        row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter.html";
  
  }
  