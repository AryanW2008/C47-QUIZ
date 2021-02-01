var quiz = ["quiz1", "quiz2", "quiz3", "quiz4", "quiz5"];

var quizpic = ["quiz_1.png", "quiz_2.jpg", "quiz_3.png", "quiz_4.png", "quiz_5.png"];

// Create a variable for radio-button object 
var radio;
var answers;
var pics;
var count = 0;
var reshuffle=1;

function preload() {
  answers = loadStrings("answer.txt");
  pics=answers;

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
button1.position(170,380);
button1.mousePressed(next);
}

function draw() {
  clear();
  textSize(18);
  text("The answer is ___", 135, 200); 
  loadpic(count);
 
 
  // Get the value of the radio-button 
  var val = radio.value();
  if (val) {
    if (val === pics[count] ) {
       text("Great...You Are Right", 120, 350);
  
      } 
    else 
     {
      text("Try Again", 160, 350);
      }
  }
 
}


function radio_options() {
  
answers=shuffle(answers);

  // Create a radio-button object 
  // and set options 
 radio = createRadio();
 
  // Option 1 : 
  radio.option(answers[0]);

  // Option 2 :  
  radio.option(answers[1]);

  // Option 3 : 
  radio.option(answers[2]);

  // Option 4 :  
  radio.option(answers[3]);

  // Option 5 : 
  radio.option(answers[4]);

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
  image(quiz[count], 100, 10, 200, 200 );
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
      answers=shuffle(answers);
      radio_options();
      count++; 
      if(count===5){count=0;}
 }