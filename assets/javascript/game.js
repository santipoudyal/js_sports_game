let team1shoot = document.querySelector("#teamone-shoot-button");
let team1numbershoot = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals")
team1shoot.addEventListener("click",function() {
console.log("team1shoot clicked");
let team1number = Number(team1numbershoot.innerHTML) + 1;
team1numbershoot.innerHTML = team1number;
if (Math.random() * 100 < 90) {
    console.log("hi");
    let scoregoals = Number(team1goals.innerHTML) + 1;
    team1goals.innerHTML = scoregoals;
    }
})

let team2shoot = document.querySelector("#teamtwo-shoot-button");
let team2numbershoot = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals")
team2shoot.addEventListener("click",function() {
    console.log("team2shoot clicked");
    let team2number = Number(team2numbershoot.innerHTML) + 1;
    team2numbershoot.innerHTML = team2number;
    if (Math.random() * 100 < 50) {
        console.log("hi");
        let scoregoals = Number(team2goals.innerHTML) + 1;
        team2goals.innerHTML = scoregoals;
        }
})

let numberofresets = document.querySelector("#reset-button");
let resetbutton = document.querySelector("#num-resets");
numberofresets.addEventListener("click", function() {
    console.log("reset clicked");
    let numberofresets = Number(resetbutton.innerHTML) + 1;
    resetbutton.innerHTML = numberofresets;
    team1numbershoot.innerHTML = 0
    team2numbershoot.innerHTML = 0
    team1goals.innerHTML = 0
    team2goals.innerHTML = 0
})


