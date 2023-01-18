'use strict';
//getting the reqiured elements
const toggleBtn = document.querySelector('.toggle-img');
const ulBox = document.querySelector('.ul');
const closeBtn = document.querySelector('.x-icon');
const overlay = document.querySelector('.overlay');

//removing the hidden classlist
toggleBtn.addEventListener("click", function(){
    ulBox.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

//adding the hidden class list to remove the pop up effect
function removeClass(){
     ulBox.classList.add('hidden');
    overlay.classList.add('hidden');

};

closeBtn.addEventListener('click', removeClass);

overlay.addEventListener('click', removeClass);
