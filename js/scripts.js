var h1 = document.getElementsByClassName('name');

var input = document.getElementById('input');

var button = document.querySelector('button');
button.addEventListener('click', function(e){
  console.log(input.value);
  input.value = "";
});
