let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".one")
const msg = document.querySelector(".mess")
const youscore = document.querySelector("#you")
const pcscore = document.querySelector("#pc")
const youchoices = document.querySelector("#yourchoice")
const pcchoices = document.querySelector("#pcchoice")

const gencompChoice = ()=>{

    const options =["stone","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const playGame = (userChoice) => {
    youchoices.innerText="your choice is "+ userChoice  
    var compChoice = gencompChoice();
    pcchoices.innerText="pc's choice is "+ compChoice
    
    if (userChoice==compChoice) {
        console.log("its a tie ! play again")
        msg.innerText="It's a tie! play again"
        msg.style.backgroundColor = "white";
        
    } else if (userChoice=="paper" && compChoice=="stone"){
        console.log("you won")
        msg.innerText="You won"
        
        msg.style.backgroundColor = "green", userScore++
        youscore.innerText=userScore;

    } else if(userChoice=="stone" && compChoice=="scissor"){
        console.log("you won")
        msg.innerText="You won";
        msg.style.backgroundColor = "green",userScore++;
        youscore.innerText=userScore;

    }else if(userChoice=="scissor" && compChoice=="paper"){
        console.log("you won")
        msg.innerText="You won";
        msg.style.backgroundColor = "green",userScore++;
        youscore.innerText=userScore;

    }else if(userChoice=="stone" && compChoice=="scissor"){
        console.log("you won")
        msg.innerText="You won";
        msg.style.backgroundColor = "green",userScore++;
        youscore.innerText=userScore;

    }else if(userChoice=="stone" && compChoice=="paper"){
        console.log("you lose")
        msg.innerText="You lose";
        msg.style.backgroundColor = "red",compScore++;
        pcscore.innerText=compScore;

    }else if(userChoice=="scissor" && compChoice=="stone"){
        console.log("you lose")
        msg.innerText="You lose";
        msg.style.backgroundColor = "red",compScore++;
        pcscore.innerText=compScore;

    }else if(userChoice=="paper" && compChoice=="scissor"){
        console.log("you lose")
       msg.innerText="You lose";
       msg.style.backgroundColor = "red",compScore++;
       pcscore.innerText=compScore;
    }
    
}
    choices.forEach((one)=>{
    one.addEventListener("click",()=>{
    const userChoice = one.getAttribute("id");
    
    playGame(userChoice)
    
    });
 });

