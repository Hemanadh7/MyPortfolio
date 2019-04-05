//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu
let showMenu = false;

// Get modal elements
var modal1 = document.getElementById("simpleModal1");
var modal2 = document.getElementById("simpleModal2");
var modal3 = document.getElementById("simpleModal3");
var modal4 = document.getElementById("simpleModal4");
var modal5 = document.getElementById("simpleModal5");
var modal6 = document.getElementById("simpleModal6");
var modal7 = document.getElementById("simpleModal7");
var modal8 = document.getElementById("simpleModal8");
var modal9 = document.getElementById("simpleModal9");
var modal10 = document.getElementById("simpleModal10");
var modal11 = document.getElementById("simpleModal11");
var modal12 = document.getElementById("simpleModal12");
// Get open modal buttons
//------------------------------var modalBtn = document.getElementById("Button");
var modalBtn1 = document.getElementById("Button1");
var modalBtn2 = document.getElementById("Button2");
var modalBtn3 = document.getElementById("Button3");
var modalBtn4 = document.getElementById("Button4");
var modalBtn5 = document.getElementById("Button5");
var modalBtn6 = document.getElementById("Button6");
var modalBtn7 = document.getElementById("Button7");
var modalBtn8 = document.getElementById("Button8");
var modalBtn9 = document.getElementById("Button9");
var modalBtn10 = document.getElementById("Button10");
var modalBtn11 = document.getElementById("Button11");
var modalBtn12 = document.getElementById("Button12");
// Get close buttons
var closeBtn1 = document.getElementById("close1");
var closeBtn2 = document.getElementById("close2");
var closeBtn3 = document.getElementById("close3");
var closeBtn4 = document.getElementById("close4");
var closeBtn5 = document.getElementById("close5");
var closeBtn6 = document.getElementById("close6");
var closeBtn7 = document.getElementById("close7");
var closeBtn8 = document.getElementById("close8");
var closeBtn9 = document.getElementById("close9");
var closeBtn10 = document.getElementById("close10");
var closeBtn11 = document.getElementById("close11");
var closeBtn12 = document.getElementById("close12");

menuBtn.addEventListener("click", toggleMenu);

//Listen for open clicks
modalBtn1.addEventListener("click", openModal1);
modalBtn2.addEventListener("click", openModal2);
modalBtn3.addEventListener("click", openModal3);
modalBtn4.addEventListener("click", openModal4);
modalBtn5.addEventListener("click", openModal5);
modalBtn6.addEventListener("click", openModal6);
modalBtn7.addEventListener("click", openModal7);
modalBtn8.addEventListener("click", openModal8);
modalBtn9.addEventListener("click", openModal9);
modalBtn10.addEventListener("click", openModal10);
modalBtn11.addEventListener("click", openModal11);
modalBtn12.addEventListener("click", openModal12);
//-----------------------------modalBtn.addEventListener("click", openModal);
//Listen for close clicks
closeBtn1.addEventListener("click", closeModal1);
closeBtn2.addEventListener("click", closeModal2);
closeBtn3.addEventListener("click", closeModal3);
closeBtn4.addEventListener("click", closeModal4);
closeBtn5.addEventListener("click", closeModal5);
closeBtn6.addEventListener("click", closeModal6);
closeBtn7.addEventListener("click", closeModal7);
closeBtn8.addEventListener("click", closeModal8);
closeBtn9.addEventListener("click", closeModal9);
closeBtn10.addEventListener("click", closeModal10);
closeBtn11.addEventListener("click", closeModal11);
closeBtn12.addEventListener("click", closeModal12);

//Listen for outside click
window.addEventListener("click", outsideClick);

//Functions to open modal
function openModal1() {
  modal1.style.display = "block";
}
function openModal2() {
  modal2.style.display = "block";
}
function openModal3() {
  modal3.style.display = "block";
}
function openModal4() {
  modal4.style.display = "block";
}
function openModal5() {
  modal5.style.display = "block";
}
function openModal6() {
  modal6.style.display = "block";
}
function openModal7() {
  modal7.style.display = "block";
}
function openModal8() {
  modal8.style.display = "block";
}
function openModal9() {
  modal9.style.display = "block";
}
function openModal10() {
  modal10.style.display = "block";
}
function openModal11() {
  modal11.style.display = "block";
}
function openModal12() {
  modal12.style.display = "block";
}

//Function to close modal
function closeModal1() {
  modal1.style.display = "none";
}
function closeModal2() {
  modal2.style.display = "none";
}
function closeModal3() {
  modal3.style.display = "none";
}
function closeModal4() {
  modal4.style.display = "none";
}
function closeModal5() {
  modal5.style.display = "none";
}
function closeModal6() {
  modal6.style.display = "none";
}
function closeModal7() {
  modal7.style.display = "none";
}
function closeModal8() {
  modal8.style.display = "none";
}
function closeModal9() {
  modal9.style.display = "none";
}
function closeModal10() {
  modal10.style.display = "none";
}
function closeModal11() {
  modal11.style.display = "none";
}
function closeModal12() {
  modal12.style.display = "none";
}

//Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.style.display = "none";
  } else if (e.target == modal2) {
    modal2.style.display = "none";
  } else if (e.target == modal3) {
    modal3.style.display = "none";
  } else if (e.target == modal4) {
    modal4.style.display = "none";
  } else if (e.target == modal5) {
    modal5.style.display = "none";
  } else if (e.target == modal6) {
    modal6.style.display = "none";
  } else if (e.target == modal7) {
    modal7.style.display = "none";
  } else if (e.target == modal8) {
    modal8.style.display = "none";
  } else if (e.target == modal9) {
    modal9.style.display = "none";
  } else if (e.target == modal10) {
    modal10.style.display = "none";
  } else if (e.target == modal11) {
    modal11.style.display = "none";
  } else if (e.target == modal12) {
    modal12.style.display = "none";
  }
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}
