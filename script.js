alert('Hellow World!!');

console.log('Hellow World!!');

let js = document.querySelector('p');

let btn = document.querySelector('button');

let section = document.querySelector('section');
section.innerText = 'Hellow World'
section.style.color = "red"

let h = document.querySelector('h4');
h.style.background = "green";
h.innerText = 'Hellow World';

btn.addEventListener('click', function(){
    js.style.display = 'block';
    js.innerText = 'Hellow World!!';
})

let y = document.querySelector('h1');
y.innerText = 'Hellow World!!'

let x = document.querySelector('h2');
x.innerText = 'Hellow World';

let mou = document.querySelector('#on');
let h5 = document.querySelector('h5');

mou.addEventListener('mouseover', function(){
    h5.innerText = 'Hellow World';
    
})

let color = document.querySelector('.color');
color.innerText = 'Hellow world';


let ultimat = document.querySelector('.id2');
ultimat.innerText = 'Hellow World';

ultimat.addEventListener('mouseover', function(){
    ultimat.style.background = 'yellow';
})