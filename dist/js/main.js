// Initialize Firebase
// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyB3I6ntNyXxWWxs0nD-zU3vVxwAOtsg-cM",
//   authDomain: "contactform-4f3fa.firebaseapp.com",
//   databaseURL: "https://contactform-4f3fa.firebaseio.com",
//   projectId: "contactform-4f3fa",
//   storageBucket: "contactform-4f3fa.appspot.com",
//   messagingSenderId: "402121651825"
// };
// firebase.initializeApp(config);

// //Reference messages collection
// var messagesRef = firebase.database().ref("messages");

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

//contact form
// document.getElementById("contactForm").addEventListener("submit", submitForm);

// //submit form
// function submitForm(e) {
//   e.preventDefault();

//   //Get Value
//   var name = getInputVal("name");
//   var email = getInputVal("email");
//   var msg = getInputVal("msg");

//   //save message
//   saveMessage(name, email, msg);

//   //show alert
//   document.querySelector(".alert").style.display = "block";

//   //hide alert after 3 secondes

//   setTimeout(function() {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //clear data after form sent
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("msg").value = "";
// }

// //function to get form value
// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// //Save message to firebase
// function saveMessage(name, email, msg) {
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     email: email,
//     msg: msg
//   });
// }
