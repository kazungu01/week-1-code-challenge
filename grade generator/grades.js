let p = document.querySelector('#grade');
let marks = prompt('Enter your marks');
if (marks >= 80) {
p.innerHTML = 'A';
}

else if (marks >= 70) {
p.innerHTML = 'B';
}60
else if (marks >= 60) {
p.innerHTML = 'C';
}
else if (marks >= 50) {
p.innerHTML = 'D';
}
else if (marks >= 40) {
p.innerHTML = 'E';
}