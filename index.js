$(document).ready(function(){
//   $("#design").click(function(){
//     $("#design-description").toggle()
//     $("#design-pic").toggle()
//   });
      
  $("#design").click(function(){
    $("#design-description").toggle()
    $("#design-pic").toggle()
  });

  $("#development").click(function(){
    $("#development-description").toggle()
    $("#develop-pic").toggle()
  });

  $("#product").click(function(){
    $("#product-description").toggle()
    $("#product-pic").toggle()
  });

  $('[data-toggle="tooltip"]').tooltip();

  });