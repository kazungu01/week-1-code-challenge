function nssf (salary){
if (salary < 18000) {
return salary * 0.06;
}else {
return 1080
}
}
function nhif (salary){
if (salary >0 && salary < 6000) {
return 150
}else if (salary > 6000 && salary < 8000) {
return 300
}else if(salary > 8000 && salary < 12000) {
return 400
}else if (salary > 12000 && salary < 15000) {
return 500
}else if (salary > 15000 && salary < 20000) {
return 600
}else if (salary > 20000 && salary < 25000) {
return 750
}else if (salary > 25000 && salary < 30000) {
return 850
}else if (salary > 30000 && salary < 35000) {
return 900
}else if (salary > 35000 && salary < 40000) {
return 950
}else if (salary > 40000 && salary < 45000) {
return 1000
}else if (salary > 45000 && salary < 50000) {
return 1100
}else if (salary > 50000 && salary < 60000) {
return 1200
}else if (salary > 60000 && salary < 70000) {
return 1300
}else if (salary > 70000 && salary < 80000) {
return 1400
}else if (salary > 80000 && salary < 90000) {
return 1500
}else if (salary > 90000 && salary < 100000) {
return 1600
}else {
return 1700
}
}
function tax (salary){
if (salary >0 && salary<=24000) {
return 0
}else if (salary <= 32333) {
return (salary - 24000) * 0.25
}else {
return ((salary - 32333)* 0.3) + 2083
}
}
function payee (salary, benefits){
const nssfDed= nssf(salary)
const nhifDed= nhif(salary)
const taxDed = tax(salary)
const payeDeduction = ((salary + benefits)) - ((nssfDed + nhifDed + taxDed))
return payeDeduction
}
function netSalary (salary, benefits){
const nssfDed= nssf(salary)
const nhifDed= nhif(salary)
const taxDed = tax(salary)
let payeDeduction = ((salary + benefits)) - ((nssfDed + nhifDed + taxDed))
if (payee>0) {
payeDeduction = payee - (nhifDed*0.15)
}else {
payeDeduction = 0
}
const netSalary = ((salary + benefits)) - ((nssfDed + nhifDed + taxDed + payeDeduction))
return [nssfDed, nhifDed, taxDed, payeDeduction, netSalary]
}
console.log (netSalary(20000, 15000))
let num1 = prompt ("Enter your salary")
let num2 = prompt ("Enter your benefits")
let p = document.getElementById("netSalary")
const result = netSalary(num1, num2)
p.innerHTML = `Your NSSF deduction is ${result[0]} <br> Your NHIF deduction is ${result[1]} <br> Your PAYE deduction is ${result[2]} <br> Your PAYE deduction is ${result[3]} <br> Your net salary is ${result[4]}`