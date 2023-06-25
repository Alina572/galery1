
var slideNum = 1;
showSlide(slideNum);

function slidesMove(x) {
  showSlide(slideNum += x);
}

function pressSlide(x){
  showSlide(slideNum = x);
}

function showSlide(x) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var press = document.getElementsByClassName("picture-press");
  var title = document.getElementById("descript");
  if (x > slides.length) {
    slideNum = 1;
  }
  if (x < 1) {
    slideNum = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < press.length; i++) {
    press[i].className = press[i].className.replace(" active", "");
  }
  slides[slideNum - 1].style.display = "block" ;
  press[slideNum - 1].className.replace += "active" ;
  title.innerHTML = press[slideNum - 1].alt;
}
