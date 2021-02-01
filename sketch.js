var quiz = ["quiz1", "quiz2", "quiz3", "quiz4", "quiz5"];
var answertxt = ["answer1.txt", "answer2.txt", "answer3.txt", "answer4.txt", "answer5.txt"];
var quizpic = ["quiz_1.png", "quiz_2.jpg", "quiz_3.png", "quiz_4.png", "quiz_5.png"];
var answers = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var temp = ["temp1", "temp2", "temp3", "temp4", "temp5"];
// Create a variable for radio-button object 
var radio;

var count = 0;
var reshuffle=1; 

function preload() {
  answers[0] = loadStrings(answertxt[0]);
  answers[1] = loadStrings(answertxt[1]);
  answers[2] = loadStrings(answertxt[2]);
  answers[3] = loadStrings(answertxt[3]);
  answers[4] = loadStrings(answertxt[4]);
  temp[0]=answers[0];
  temp[1]=answers[1];
  temp[2]=answers[2];
  temp[3]=answers[3];
  temp[4]=answers[4];
  

  quiz[0] = loadImage(quizpic[0]);
  quiz[1] = loadImage(quizpic[1]);
  quiz[2] = loadImage(quizpic[2]);
  quiz[3] = loadImage(quizpic[3]);
  quiz[4] = loadImage(quizpic[4]);

}

function setup() {
// Create a canvas 
createCanvas(400, 400);
button1 = createButton('Change question');
button1.size(100, 20);
button1.style("font-size", "13px");
button1.position(135,300);
button1.mousePressed(next);
}

function draw() {
  clear();
  rect(10,10,350,350);
  textSize(18);
  text("The answer is ___", 135, 200); 
  loadpic(count);
 
 
  // Get the value of the radio-button 
  var val = radio.value();
  if (val) {
    if (val === temp[count][0] ) {
      
       text("Great...You Are Right", 120, 350);
  
      } 
    else 
     {
      text("Try Again", 160, 350);
      }
  }
 
}


function radio_options() {
  
answers[count]=shuffle(answers[count]);

  // Create a radio-button object 
  // and set options 
 radio = createRadio();
 
  // Option 1 : 
  radio.option(answers[count][0]);

  // Option 2 :  
  radio.option(answers[count][1]);

  // Option 3 : 
  radio.option(answers[count][2]);

  // Option 4 :  
  radio.option(answers[count][3]);

  // Option 5 : 
  radio.option(answers[count][4]);

  radio.position(50, 250);
}

function loadpic(count) {
 if (reshuffle===1)
 {
  radio_options();
  }
  if(count>=5){
    count=0;
  }
  image(quiz[count], 80, 10, 220, 220 );
  reshuffle=0;
  
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function next(){
      radio.hide();
      count++; 
      answers[count]=shuffle(answers[count]);
      radio_options();
      if(count===5){count=0;}
 }