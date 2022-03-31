
window.onscroll = function() {myFunction()};

var main_header = document.getElementById("main_header");
var sticky = main_header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_header.classList.add("sticky")
  } else {
    main_header.classList.remove("sticky");
  }
}
