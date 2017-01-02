console.log('hello from app.js');

const heading = document.getElementById("heading1");

const data = document.getElementById("data");

const button = document.getElementsByTagName('button')
//	document.body.style.background = 'red';
heading.style.color = 'blue';

	heading.innerHTML = "My First Page"; 

button[1].addEventListener('click', ()=> {

     <!-- '#'+(Math.random()*0xFFFFFF<<0).toString(16);	-->
	heading.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);

});

window.onload = function() {
document.getElementById('heading2').onclick = function() {
this.style.color = 'blue';





}
}


function bgChange(bg) {
document.body.style.background = bg;
}

