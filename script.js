'use strict';

const btn = document.getElementById('btn');

const inputText = document.getElementById('text');

const inputRange = document.getElementById('range');

const square = document.getElementById('square');

const circle = document.getElementById('circle');

const span = document.getElementById('range-span');

const getColor = function() {
  square.style.backgroundColor = inputText.value;
};

const sizeCircle = function(event) {
  span.textContent = event.target.value;
  circle.style.width = span.textContent + '%';
  circle.style.height = span.textContent + '%';
};

document.getElementById('e_btn').style.display = 'none';


inputRange.addEventListener('input', sizeCircle);
btn.addEventListener('click', getColor);
// inputRange.addEventListener('change', sizeCircle);




