$(document).ready(function(){

$(".menu-button").click(function(){
  $(this).toggleClass("active");
  $(".megamenu-bg").fadeToggle();
  $(".container-wrap nav .gnb").toggleClass("active");
});


});