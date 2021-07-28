var readlineSync = require('readline-sync');
const chalk = require('chalk');


var score = 0;

var userName = readlineSync.question(chalk.green("Enter your name please:  "));

console.log(chalk.red("Hey " + userName + "! Let's see how well you know Vidit") );
console.log("            ");



function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer){
    console.log(chalk.yellow("Well Done! It's correct. Let's see more"));
    score++;
     console.log("Current Score is: "+score);
     console.log("            ");
  }else {
    console.log(chalk.red("Oh! its wrong!"));
      console.log("Current Score is: "+score);
      console.log("            ");
  }
};



var questions = [{
  question: "What is my Home town? ",
  answer: "palampur"
},{
  question: "What is my hobby? ",
  answer: "playing guitar"
},{
  question: "Where do I Study? ",
  answer: "amity"
},{
  question: "Do I like Car rides? ",
  answer: "yes"
},{
  question: "How many Subcribers do I have on Youtube? ",
  answer: "130k"
}];


for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
};


if(score>=4){
  console.log(chalk.green.bold("You Know me really Well!! Your score is: "+score)); 
}
else if(score==3 ){
  console.log(chalk.green.bold("You Know me but Work more! Your score is: "+score)); 
}
else{
  console.log(chalk.red.bold("You need to know me more bro! "+score)); 

};