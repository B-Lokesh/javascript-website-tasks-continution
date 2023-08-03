
let score = JSON.parse(localStorage.getItem('score')) /*after initialize next onwards it gets updated in localstorage until reset clicks.this gives null and null is a falsy--> false value */
|| { //when  reset clicks again initialization done here as removed from local gets error without this
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();//for visibility purpose on page


/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove)
{
  const computerMove = pickComputerMove();

  let result = '';

  if(playerMove === 'rock')
  {
    if(computerMove === 'rock')
    {
      result = 'tie';
    }
    else if(computerMove === 'paper')
    {
      result = 'you lost';
    }
    else if(computerMove === 'scissors')
    {
      result = 'you win';
    }
  }
 else if(playerMove === 'paper')
 {
    if(computerMove === 'rock')
    {
      result = 'you win';
    }
    else if(computerMove === 'paper')
    {
      result = 'tie';
    }
    else if(computerMove === 'scissors')
    {
      result = 'you lost';
    }
  }
 else if(playerMove === 'scissors')
 {
    if(computerMove === 'rock')
    {
      result = 'you lost';
    }
    else if(computerMove === 'paper')
    {
      result = 'you win';
    }
    else if(computerMove === 'scissors')
    {
      result = 'tie';
    }
  }

  if(result === 'you win')
  {
    score.wins+=1;
  }
  else if(result === 'you lost')
  {
    score.losses+=1;
  }
  else if(result === 'tie')
  {
    score.ties+=1;
  }
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();//for updating score
  
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png"
  class="move-icon">
  Computer`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
   .innerHTML = `wins:${score.wins},loss:${score.losses},tie:${score.ties}`;

}

//let computerMove = '';
function pickComputerMove()
{
  const randomNumber=Math.random();//display ran num b/w 0 to 1.
  let computerMove = '';

  if(randomNumber >=0 && randomNumber < 1/3)
  {
    computerMove = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3)
  {
    computerMove = 'paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1)
  {
    computerMove = 'scissors';
  }
  return computerMove;
}