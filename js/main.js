var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




$('.hamburger').click(function (){
  $('.nav__mob-nav').addClass('active');
  $('.nav__mob-nav').removeClass('hide');
})
$('.hamburger-close').click(function (){
  $('.nav__mob-nav').addClass('hide');
  $('.nav__mob-nav').removeClass('active');
})
$('.nav__mob-links').click(function (){
  $('.nav__mob-nav').addClass('hide');
  $('.nav__mob-nav').removeClass('active');
})