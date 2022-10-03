let readlineSync = require('readline-sync');
console.log('Welcome to Quiz! Are You Excited?');
console.log('How much do you know me?');
console.log();

var userName = readlineSync.question("May I know your Name?");
console.log("welcome  " + userName + '!!');

let score = 0;

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yeah! you got it correct.....");
    console.log();
    score += 1;
  }
  else {
    console.log('Sorry! You loose :-( ');
    console.log();
    score = score - 1;
  }
}
console.log('');
console.log('Ready to Play this Exciting Game? ');
console.log('');
console.log('Your current score is ' + score);
console.log('');
console.log('Remeber there is -1 for every wrong answer ');
console.log('');

let questions = [
  {
    question: "Where was ICC Women's T20 World Cup, 2020 final played? ",
    answer: "Melbourne"
  },
  {
    question: "Who is current captain of Indian women cricket team?  ",
    answer: "Harmanpreet Kaur"
  },
  {
    question: "What is the rank of Indian women's cricket team in T20 ICC Ranking?  ",
    answer: "4"
  },
  {
    question: "who is the Indian women's cricket team coach? ?",
    answer: "Ramesh Powar"
  },
  {
    question: "The India women's national cricket team made its ODI debut in which year?  ",
    answer: "1978"
  }
];

//LOOP aorund the above object

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log('Game Over!! Here is your Score .');
console.log('Yayyyy! You scored : ' + score);



