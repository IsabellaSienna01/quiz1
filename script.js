var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (x.length == 0) return;
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }


document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const navUl = document.querySelector(".navbar ul");

  //menu-icon
  menuIcon.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });

  //automatic slideshow
  var myIndex = 0;
  carousel();

  function carousel() {
    var a;
    var y = document.getElementsByClassName("mySlides1");
    if (y.length == 0) return;
    for (a = 0; a < y.length; a++) {
      y[a].style.display = "none";  
    }
    myIndex++;
    if (myIndex > y.length) {myIndex = 1}    
    y[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
  }

  //accordion
  var acc = document.getElementsByClassName("accordion");
  for (var o = 0; o < acc.length; o++) {
    acc[o].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
