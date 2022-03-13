$(document).ready(function(){
//   $("#design").click(function(){
//     $("#design-description").toggle()
//     $("#design-pic").toggle()
//   });
      
      $("#design").click(function(){
          $("#design-description").toggle()

      });



  $("#development").click(function(){
    $("#development-description").toggle()
    $("#dev").toggle()
  });

  $("#product").click(function(){
    $("#product-description").toggle()
    $("#product-pic").toggle()
  });

  $('[data-toggle="tooltip"]').tooltip();

  });