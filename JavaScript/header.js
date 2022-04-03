
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


// Hamburger menu bar script 

document.querySelector(".fa-bars").addEventListener("click",sidebar);

function sidebar(){
  document.querySelector(".navbar").style.width = "340px";
}

document.querySelector(".fa-x").addEventListener("click",closebar);

function closebar(){
    document.querySelector(".navbar").style.width = "0";
}

  //Myname
  var myname = localStorage.getItem("name")
  if (myname != null) {
      document.querySelector("#userName").innerText = `Hello ${myname}`;
  } else {
      document.querySelector("#userName").innerText = `Sign In`;
  }