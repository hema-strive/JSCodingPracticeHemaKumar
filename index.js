let num1 = 0
let num2 = 0
document.getElementById("display-1").innerText = num1
document.getElementById("display-2").innerText = num2
function add1() {
    num1 += 1
    document.getElementById("display-1").innerText = num1
}
function add3() {
    num1 += 3
    document.getElementById("display-1").innerText = num1
}
function add5() {
    num1 += 5
    document.getElementById("display-1").innerText = num1
}
function ad1() {
    num2 += 1
    document.getElementById("display-2").innerText = num2
}
function ad3() {
    num2 += 3
    document.getElementById("display-2").innerText = num2
}
function ad5() {
    num2 += 5
    document.getElementById("display-2").innerText = num2
}