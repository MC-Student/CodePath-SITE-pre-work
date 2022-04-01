// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var clueLength = 9;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //starting at 1000ms, how long to hold each clue's light/sound
var strikeCount = 0;

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);



function getRandomInt(max) {
 return Math.floor(Math.random() * Math.floor(max) + 1);
}

function startGame(){
  
  pattern = [];
  for (var i =0; i < clueLength; i ++) {
  pattern.push(getRandomInt(9));
}
  console.log('pattern: ' + pattern);
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
  
  startTimer();
  
playClueSequence();
  
}
function stopGame(){
  stopTimer();
    gamePlaying = false;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
}



function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    AudioContext().resume();
  }
  console.log("playSingleClue complete");
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
   console.log("playClueSequence complete");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!!!");
}

  
 /*function guess(btn, strikeCount){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //Game over
        winGame();
      }
      else{
        //correct, increment guess number
        progress++;
        playClueSequence();
      }
    }
    else{
      //check next guess
      guessCounter++;
    }
  }
   else{
    //Incorrect, game over
     
      strikeCount++;
     
     if (strikeCount==3){
       loseGame();
     
     }
     
     else{
      
       progress++;
      playClueSequence();
     }
    //loseGame();
  }
}    */

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //Game over
        winGame();
      }
      else{
        //correct, increment guess number
        progress++;
        playClueSequence();
      }
    }
    else{
      //check next guess
      guessCounter++;
    }
  }
   else{
    //when get one wrong
     strikeCount++;
     //three strikes and you're out
     if (strikeCount==3){
       loseGame();
     }
     //otherwise continue the game
     else{
      progress++;
      playClueSequence();
     }
  }
}    

// Sound Synthesis Functions
const freqMap = {
  1: 170,
  2: 200,
  3: 250,
  4: 300,
  5: 350,
  6: 400,
  7: 450,
  8: 500,
  9: 530,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

//code for the stopwatch creation, and when to start and stop

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

//document.getElementById('startBtn').addEventListener('click', );


//document.getElementById('stopBtn').addEventListener('click', ()=>{


function startTimer(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}

function stopTimer(){
  clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
}

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}