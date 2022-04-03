'use strict';

const btn = document.querySelector('.btn');

function animation(){
let position = 0;
const box = document.querySelector('.box');

const id = setInterval(frame, 5);

  function frame(){
    if (position == 300) {
       clearInterval(id);
    } else {
        position++;
        box.style.top = position + 'px';
        box.style.left = position + 'px';
    }
  }
}

btn.addEventListener('click', animation);