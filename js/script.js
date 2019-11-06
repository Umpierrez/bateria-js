'use strict'
var sound1 = document.getElementById('audio1');
var sound2 = document.getElementById('audio2');
var sound3 = document.getElementById('audio3');
var sound4 = document.getElementById('audio4');
var sound5 = document.getElementById('audio5');
var sound6 = document.getElementById('audio6');
var sound7 = document.getElementById('audio7');
var sound8 = document.getElementById('audio8');
var sound9 = document.getElementById('audio9');

var orange = document.getElementsByClassName('keys-orange');
var red = document.getElementsByClassName('keys-red');
console.log(orange);
console.log(red);

// Capturo el evento keydown
document.addEventListener('keydown', checkkeys);
// Chequeo que teclas estan siendo presionadas
function checkkeys(k) {
    var chequear = k.key;
    switch (chequear) {
        case 'a':
            sound1.currentTime = 0;
            sound1.play();
            break;
        case 's':
            sound2.currentTime = 0;
            sound2.play();
            break;
        case 'd':
            sound3.currentTime = 0;
            sound3.play();
            break;
        case 'f':
            sound4.currentTime = 0;
            sound4.play();
            break;
        case 'g':
            sound5.currentTime = 0;
            sound5.play();
            break;
        case 'h':
            sound6.currentTime = 0;
            sound6.play();
            break;
        case 'j':
            sound7.currentTime = 0;
            sound7.play();
            break;
        case 'k':
            sound8.currentTime = 0;
            sound8.play();
            break;
        case 'l':
            sound9.currentTime = 0;
            sound9.play();
            break;
    }
};
