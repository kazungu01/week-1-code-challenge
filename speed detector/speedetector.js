
let p = document.querySelector('#speed');
let speed = prompt('Enter your speed');
if (speed <= 70) {
p.innerHTML = 'OK';
}
else if (speed > 70) {
let exceeded = speed - 70;
let points = exceeded / 5;
if (points >= 12) {
p.innerHTML = 'License suspended';
}else {
p.innerHTML = 'Points: ' + points;
}
}