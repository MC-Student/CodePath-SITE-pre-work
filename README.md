# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Meira Cohen**

Time spent: **6** hours spent in total

Link to project: https://silky-roasted-snowstorm.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] A displayed timer starts when the user presses the start button, and stops when the stop button is pressed, when the user loses, and when the user wins
- [X] Website includes an HTML home page with a link to navigate to the HTML game page

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/q2AUxnu.gif)
![](https://i.imgur.com/PhIYz7W.gif)
![](https://i.imgur.com/Pix82UZ.gif)
![](https://i.imgur.com/y1yJR85.gif)
![](https://i.imgur.com/meBoqx6.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/
https://stackoverflow.com/
https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html
https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext

Asked a friend who is NOT applying to SITE quick random coding questions

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One challenge I encountered in creating this submission was that originally, the portion of the code given to me by the pre-work instructions did not work for me when I ran my code in terms of the audio. Specifically, when the game sequence began to play, the buttons would light up, but the audio for each button did not play, although the frequency map in the JavaScript code was entered correctly. This indicated to me that the problem with the audio was in a different location in the code. In order to check this, I opened the game in a tab instead of looking at just the preview in Glitch, and I used the “inspect → console” tool in Chrome to track the progress of the game, see where the error was occurring, and understand what exactly the error was. After running the game, I checked the console to see what errors arose, and in fact, it indicated an error in regards to the audio and the AudioContext object. When searching through the rest of the code for all of the related lines of code, I noticed a few other places where it was used. I decided to research the Context and audio constructs to better understand what was happening and why there might be an error. After using the Mozilla developers page about audio context, I realized that the audio might not be playing because either resume() was not used, or it was used in the wrong place or format. I went through the code, tried a few different occurrences of resume(), and was able to get the audio to work. Through detailed observation, research, and deduction, I was able to overcome the challenge of the audio not working.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
There are many questions I have about web development, so I chose questions for which I would most like to learn the answers. After completing my submission, I am wondering how I can make the styling of a webpage look more professional. I would also like to know how to collect data that can be generated through the use of a website, and how it can be used to improve the webpage. Another question I have is what the best way is to eliminate errors and allow for the use of the webpage across a variety of platforms, such as on a PC or mobile phone, while maintaining an easy-to-use interface. Additionally, I would like to know how JavaScript and other similar languages can be used in the most efficient manner without compromising on achieving all desired functionalities.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Some of the many changes I would implement would be as follows:
First, I would work on making the JavaScript functions easier to follow and more efficient, especially the guess() function. I would create a separate function to generate the random sequence, including both the content of the getRandomInt() function and additional code that would prevent a clue from being used more than once within one sequence.
I would also like to create three levels of the game, with the playback speed of the clues remaining the same between each turn for the easiest level, but increasing somewhat for the medium level, and increasing dramatically (without losing the playback), for the highest level. Three new buttons would appear once the start button was clicked, and it would only be possible to proceed to the next level once the player has won the game on that level. 
I would not customize the audio to random sounds or change the appearance of the buttons to images because I think it would ruin the clear and simple UX of the game. I would instead create a more realistic version of a piano, with a standard keyboard appearing in black and white keys, but with the key still changing colors on the user’s click and when the clue sequence is played.
I would also award the user a star for every correct answer, recorded with a flashing star that would flash every time a star was added, and there would be a number displaying the number of accumulated stars next to the star image. The number would reset for a new attempt, but the previous record for that level would appear as well. A message would appear at the end of each game if the record was beat.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/16d68ba426e04483b41249ab6515f78e)


## License

    Copyright [Meira Cohen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
