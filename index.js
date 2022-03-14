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

$("#submitForm").click(function(e){
  e.preventDefault()
  var name=$("#name").val()
  var email=$("#email").val()
 var message=$("#message").val()

alert(`${name} Your message has been submitted`)
});


/* unction myFunction(e){
var name= document.getElementById("name").value
var email=document.getElementById("email").value
var message= document.getElementById("message").value
e.preventDefault()

if(name=="" && email=="" && message==""){
  alert("Please enter you credentials");
  return false;
}
else{
  alert("Your message has been received");
}
}
  */

