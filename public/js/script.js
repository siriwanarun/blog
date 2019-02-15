const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.getElementById('email');

let itemsArray = localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : [];

localStorage.setItem('email', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('email'));


form.addEventListener('submit', function () {
  

  itemsArray.push(input.value);
  localStorage.setItem('email', JSON.stringify(itemsArray));
  //liMaker(input.value);
  //input.value = "";

});

data.forEach(email => {
 //liMaker(email);
});

// function checkres() {
//   $.ajax({
//     method: "POST",
//     url : 'http://127.0.0.1:8000/api/auth/login',
//     dataType: 'json',
//     success: function(jsonQuotes) {
//       console.log('available in ajax CB', jsonQuotes);
//     },
//     error: function( jqXHR) {
//       console.log("Error: " +  jqXHR);
//     }
//   });

//   return false
  
  // $(document).ready(function() {
  //   checkres();
  // });
//}




/*
function checkres() {
  $.ajax({
  
    method: "GET",
    url : '/token/index',   
    success: function(xhr) {
        console.log(xhr.status);
    },
    error: function(xhr) {
        console.log(xhr.status+".....");
    } 
  });
}
*/






