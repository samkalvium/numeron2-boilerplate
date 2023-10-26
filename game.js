// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const rdnum1 = document.getElementById("number1")
const rdnum2 = document.getElementById("number2")

const num1 = Math.floor(Math.random() * 100)
const num2 = Math.floor(Math.random() * 100)

// console.log(num1)
// console.log(num2)

rdnum1.innerText = num1
rdnum2.innerText = num2

// Iteration 3: Creating variables required to make the game functional

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = Math.floor(num1 / num2);
const modulo = num1 % num2;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const num3 = document.getElementById("number3")


// Iteration 5: Creating a randomise function to make the game functional
// function randomise() {
const arrayOfMath = [addition,subtraction,multiplication,division,modulo];
const randm = arrayOfMath[Math.floor(Math.random()*5)]
num3.innerText = randm;
// const res= arrayOfMath[randm];


// }

// Iteration 6: Making the Operators (button) functional
var score = Number(sessionStorage.getItem("score")) || 0;
// const addbtn = document.getElementById("plus")
// const subbtn = document.getElementById("minus")
// const mulbtn = document.getElementById("mul")
// const divbtn = document.getElementById("divide")
// const modbtn = document.getElementById("modulus")
const gmeBtn = document.querySelectorAll("#buttons")

gmeBtn.forEach((e) =>{
    e.addEventListener("click", (ele) => {
        // console.log(ele.target)
        if (num1 + num2 == Number(randm) && ele.target.id == "plus") {
            console.log("correct")
            seconds = 6;
            score += 1;
            sessionStorage.setItem("score", score);
            window.location.href = "game.html"
        }
        else if (num1 - num2 == Number(randm) && ele.target.id == "minus") {
            console.log("correct")
            seconds = 6;
            score += 1;
            sessionStorage.setItem("score", score);
            window.location.href = "game.html"
        }
        else if (num1 * num2 == Number(randm) && ele.target.id == "mul") {
            console.log("correct")
            seconds = 6;
            score += 1;
            sessionStorage.setItem("score", score);
            window.location.href = "game.html"
        }
        else if (Math.floor(num1 / num2) == Number(randm) && ele.target.id == "divide") {
            console.log("correct")
            seconds = 6;
            score += 1;
            sessionStorage.setItem("score", score);
            window.location.href = "game.html"
        }
        else if (num1 % num2 == Number(randm) && ele.target.id == "modulus") {
            console.log("correct")
            seconds = 6;
            score += 1;
            sessionStorage.setItem("score", score);
            window.location.href = "game.html"
        }
        else {
            console.log("wrong")
            window.location.href = "gameover.html"
            sessionStorage.setItem("score", score);
        }
    })
    
})


// const arrayOfImg = [addbtn,subbtn,mulbtn,divbtn,modbtn]

// arrayOfImg.forEach((el) =>{
// el.addEventListener("click",()=>{
// console.log("helloooooo")
// })
// })


// Iteration 7: Making Timer functional

const timr = document.getElementById("timer")
let seconds = 21;
// let timeInterval;

function updateTime(){
    seconds--;
    timr.innerHTML = seconds;
    if(seconds == 0){
        window.location.href = "gameover.html"
    }
}

let timeInterval = setInterval(updateTime,1000)