'use strict';

let range = document.getElementById('renge');
let bar = document.getElementById('bar');
let slice = document.getElementById('slice');
let persent = document.getElementById('persent');
range.oninput = function(e){
	if(range.value>50){
		slice.classList.add('p50');

	} else {
		slice.classList.remove('p50');
	}
	persent.innerHTML = range.value + '%';
	bar.style.transform = `rotate(${range.value * 3.6}deg)`;
};



