let  score = JSON.parse(localStorage.getItem('score')) 
|| {
wins:0,
losses:0,
ties: 0
};




updateScoreElement();



/*if (!score){
score ={
wins:0,
losses:0,
ties: 0};
}*/



let isAutoPlaying = false;
 let intervalId;

// const autoplay = () => {}; using an arrow function wouldn't allow hoisting. 


document.addEventListener( 'keydown', (event) => 
    { if (event.key === 'a')
   { autoPlay();}
});



function autoPlay(){

    if(!isAutoPlaying){

    intervalId = setInterval(() =>{
        const playerMove = pickComputerMove()
        playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;   
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }


    
if(isAutoPlaying){document.querySelector('.js-autoplay-button').innerHTML = 'Stop Playing';
 }else {document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play';
};
}

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
    playGame('rock');
});


document.querySelector('.js-paper-button')
.addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
    playGame('scissors');
});



/*document.addEventListener( 'keydown', (event) => 
    { if (event.key === 'a')
   { autoPlay();}
});*/





document.addEventListener('keydown',(event) => {if (event.key === 'Backspace') 
{  
    let question = document.createElement('div');
    question.innerHTML = 
    ` <p> Are you sure you want to reset the score?</p>
    <button onclick="
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();" class = "yesno yesbut-js" > Yes </button>


    <button class = "yesno nobut-js"> No </button> 
    `;

    document.body.appendChild(question);

   question.querySelector('.nobut-js').addEventListener('click', () => {
        question.innerHTML = '';});

 question.querySelector('.yesbut-js').addEventListener('click', () => {
        question.innerHTML = '';});



}
});




      



document.body.addEventListener('keydown', (event) => { if (event.key === 'r') {
playGame('rock');
}else if(event.key === 'p') {
playGame('paper');
}else if (event.key === 's') {
playGame('scissors');}
});





function playGame(playerMove){

const computerMove = pickComputerMove();

result ='';

if(playerMove ==='scissors' ){

if (computerMove === 'rock' ){result='You lose';
} else if (computerMove === 'paper'){result = 'You win';
}else if ( computerMove === 'scissors' ){result = 'Tie';}
}

else if(playerMove === 'paper'){
if (computerMove === 'rock'){result = 'You win';
} else if (computerMove === 'paper'){result = 'Tie'
}else if (computer === 'scissors'){ result = 'You lose';} 

}else if (playerMove === 'rock'){
if (computerMove === 'rock'){(result ='Tie')
} else if (computerMove === 'paper'){result = 'You lose';
}else if (computerMove === 'scissors'){result = 'You win'} 


}


if (result === 'You win'){
score.wins += 1
}else if (result === 'You lose'){score.losses +=1
} else if (result === 'Tie'){score.ties += 1;
}



localStorage.setItem('score', JSON.stringify(score));

updateScoreElement ();



document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML= `You
    <img class="move-icon" src="rock,paper.scissors.images/${playerMove}-emoji.png">

   <img class="move-icon" src="rock,paper.scissors.images/${computerMove}-emoji.png">Computer`;


}




function updateScoreElement (){document.querySelector('.js-score')
.innerHTML =`Wins:${score.wins}, 
Losses:${score.losses}, Ties:${score.ties}`

}


// functions make code easy to edit.you only need to edit inside the function 

function pickComputerMove(){

randomNum = Math.random();

let computerMove = '';

if (randomNum >= 0 && randomNum <1/3){ computerMove ='rock';
}else if (randomNum >= 1/3 && randomNum < 2/3){computerMove = 'paper';
}else if (randomNum >= 2/3 && randomNum < 1 ){computerMove = 'scissors';} 

//return statement. lets us get a value out og a function (in the console). like a recept.

return computerMove;
// anything written after the return statement will not run.


}

