let userScore = 0;
let machineScore = 0;
let machineNumber = 0;
let userNumber = 0;
let btn2 = document.getElementById("btn2");
let btn = document.getElementById("btn");
btn2.disabled = true;

function init() {
    let name = prompt("What is your name?");
    if (name === null || name === undefined || name === "") {
        name = "Unknown";
    }
    document.getElementById("user").innerText = name;
    document.getElementById("userNumber").textContent = userNumber;
    document.getElementById("machineNumber").textContent = machineNumber;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("machineScore").textContent = machineScore;
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
function generate(){
    machineNumber = Math.ceil((Math.random()*21) - 10);
    userNumber = Math.ceil((Math.random()*21) - 10);
    document.getElementById("userNumber").textContent = userNumber;
    document.getElementById("machineNumber").textContent = machineNumber;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("machineScore").textContent = machineScore;
    if(machineNumber === userNumber){
        setTimeout(()=>{alert("DRAW!")},550);
    }
    if(machineNumber < userNumber){
        ++userScore;
        document.getElementById("userScore").textContent = userScore;
    } else if(machineNumber > userNumber){
        ++machineScore;
        document.getElementById("machineScore").textContent = machineScore;
    }
    if(machineScore >= 3){
        setTimeout(()=>{alert("GAME OVER! MACHINES WIN!!!")},550);
        btn.disabled = true;
        btn2.disabled = false;
    }
    if(userScore >= 3){
        setTimeout(()=>{alert("GAME OVER! HUMANS WIN!!!")},550);
        btn.disabled = true;
        btn2.disabled = false;
    }
}
function reset(){
    userScore = 0;
    machineScore = 0;
    userNumber = 0;
    machineNumber = 0;
    document.getElementById("userNumber").textContent = userNumber;
    document.getElementById("machineNumber").textContent = machineNumber;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("machineScore").textContent = machineScore;
    btn.disabled = false;
    btn2.disabled = true;
}