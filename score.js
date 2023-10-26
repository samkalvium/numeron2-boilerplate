// Iteration 8: Making scoreboard functional
const plyagain = document.querySelector("#play-again-button")
const totsr = sessionStorage.getItem('score');

plyagain.addEventListener("click",() =>{ 
    sessionStorage.removeItem("score")
    window.location.href = "game.html"
})
//incrementing the score part
const scre = document.getElementById("score-board")
scre.innerText = totsr;