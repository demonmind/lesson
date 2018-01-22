window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function setActive() {
  var children = navbar.children;
  for (i = 0; i < children.length; i++) { 
    children[i].classList.remove("active");
  }
  event.target.classList.add("active");
}