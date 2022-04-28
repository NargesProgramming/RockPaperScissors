const choices=["rock","paper","scissors"];

const userChoice=prompt("choose rock,paper,scissors");
if(userChoice){
    console.log(`You choosed : ${userChoice}`);
}else{
    console.log("You cheated")
}

const randomNumber=Math.floor(Math.random()*3);
const computerChoice=choices[randomNumber];
console.log(`computer choosed: ${computerChoice}`);

if(userChoice === computerChoice){
    console.log("It's a tie")
}else if( userChoice === "rock" ){
    if(computerChoice === "scissors"){
        console.log("You won")
    }else{
        console.log("You lost")
    }
}else if( userChoice === "scissors"){
    if( computerChoice === "paper"){
        console.log("You won")
    }else{
        console.log("You lost")
    }
}else if( userChoice === "paper"){
    if( computerChoice === "rock"){
        console.log("You won")
    }else{
        console.log("You lost")
    }
}