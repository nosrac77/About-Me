'use strict';

var db = [];

var correctUserAnswers = 7;

var welcome = alert('Hey there, I see you made your way to my page. Prepare your mind! Five questions I shall ask thee...');

var name = prompt('Wait, first of all who am I speaking with? Enter your name below. Or, ya know, don\'t. Might mess a few things up though... ');

while (!name) {
  alert ('Alright, wise guy. Enter a valid name. Ya gotta type something!');
  name = prompt('Wait, first of all who am I speaking with? Enter your name below. Or, ya know, don\'t. Stay in this while loop. While you keep misbehaving it\'ll keep the alerts coming (seriously, free yourself by entering something or hitting cancel).');
}

if (name) {
  console.log('User has input ' + name + ' as his or her name.');
  alert(name + ', huh? Interesting, is that a family name or something? Well alright then ' + name + ', it\'s truly time to begin! This is a guessing game! Can you guess what you\'ll be doing? Answer five questions in Y or N format, but beware!! Invalid inputs can yield rather... dangerous results. Mwahahahaha!');
}

function question1Function() {

  var question1 = prompt('Do I have a dog? Answer Y or N to submit a valid response. Like, seriously ' + name + ', don\'t type some random bullshit.').toUpperCase();
  db[0] = {'Do I have a dog? Correct anwser: Y...': question1};

  if (question1 === 'N') {
    console.log(name + ' is correct. Correct as HELL.');
    alert('Oh, well hello there friend. Glad to see you know me so well!');
  } else if (question1 === 'Y') {
    console.log(name + ' is dumb and also hates me.');
    alert('Wow... wrong. Just cuz Adam has a dog we all have dogs? And here I thought we were homies.');
    correctUserAnswers --;
  } else {
    console.log(name + ' is dumb and also hates me.');
    alert('Seriously? Even after I said no bullshit? Come on man! Alright, you lose. 0 for 0 so far, happy now?');
    correctUserAnswers --;
  }
};

question1Function();

function question2Function() {

  var question2 = prompt('Ok ' + name + ', next up is an easy one. Is my favorite pair of shoes Nike brand or nah? Answer Y or N to submit a valid response... no tricks. Just Y or N. You can do this.').toUpperCase();
  db[1] = {'Is my favorite pair of shoes Nike brand or nah? Correct answer Y...': question2};

  if (question2 === 'Y'){
    console.log(name + ' is correct. Correct as HELL.');
    alert('Indeed they are! Free Runs to be exact. Pricey but sooo worth it.');
  } else if (question2 === 'N') {
    console.log(name + ' is dumb and also hates me.');
    alert('Goodness gracious. That was a lay-up! Come on, wrongy mcwrongface! Look alive!');
    correctUserAnswers --;
  } else {
    console.log(name + ' is dumb and also hates me.');
    alert('Dammit. Simple instructions yo, ya gotta follow em! You\'re not doing hot right now.');
    correctUserAnswers --;
  }
};

question2Function();

function question3Function() {

  var question3 = prompt('Third question! See how easy this is ' + name + '? You\'re more than halfway done! Anyway, another easy one. Is my birthday next month? Again, answer Y or N. No shenanigans.').toUpperCase();
  db[2] = {'Is my birthday next month? Correct answer N...': question3};

  if (question3 === 'N'){
    console.log(name + ' is correct. Correct as HELL.');
    alert('Haha, I knew we were best friends. I KNEW IT. You ditching me last Friday was a total fluke huh?! Anyway, enjoy being correct!');
  } else if (question3 === 'Y') {
    console.log(name + ' is dumb and also hates me.');
    alert('First answer you\'ve gotten wrong, chump? I honestly don\'t know, this JavaScript isn\'t sophisticated enough to tell! But I\'m willing to bet it isn\'t! Anyway, you\'re wrong!');
    correctUserAnswers --;
  } else {
    console.log(name + ' is dumb and also hates me.');
    alert('Wow... can\'t type a Y or an N? Too cool for school? Whatever, you get this one wrong for your defiance.');
    correctUserAnswers --;
  }
};

question3Function();

function question4Function() {

  var question4 = prompt('You\'re being a trooper ' + name + '. Alright, next question (and be careful, this one\'s a bit of a zinger). Is my favorite actor Nick Cage? Also apart of the same question: if so, do I also have a Nick Cage pillow on my bed? Answer Y if you think I love Nick Cage and own a Nick Cage pillow or N to say no to both. And again, just type in Y or N. Don\'t try to get wise on me now.').toUpperCase();
  db[3] = {'Is my fav actor Nick Cage and do I have a Nick Cage pillow? Correct anwser N...': question4};

  if (question4 === 'N') {
    console.log(name + ' is correct. Correct as HELL.');
    alert('Ah, not even the zingers can throw you huh? A true comrade. We\'d get along swimmingly, I\'m sure. Let\'s hang out and not watch Nick Cage movies.');
  } else if (question4 === 'Y') {
    console.log(name + ' is dumb and also hates me.');
    alert('Ha! I gotcha with a zinger! Although Nick Cage is great (seriously though the man deserves more credit, Raising Arizona is a classic) he\'s certainly not my favorite and I don\'t own a Nick Cage pillow.');
    correctUserAnswers --;
  } else {
    console.log(name + ' is dumb and also hates me.');
    alert('Tried to get wise on me huh?! I told ya not to! That\'s a big fail, ' + name + '.');
    correctUserAnswers --;
  }
};

question4Function();

function question5Function() {

  var question5 = prompt('Ok ' + name + ', final question. This is it. Your whole life has lead up to this moment. You ready? Take a deep breath... ok now exhale. Look at m- LOOK AT ME. You. Can. Do this. Alright, here we go... is my name Carlton? Focus now ' + name + ', focus. Just hit me with a Y or an N.').toUpperCase();
  db[4] = {'Is my name Carlton? Correct answer N...': question5};

  if (question5 === 'N') {
    console.log(name + ' is correct. Correct as HELL.');
    alert('CORRECT! YOU DID IT!! Haha ah ' + name + ', I knew you had it in you!');
  } else if (question5 === 'Y') {
    console.log(name + ' is dumb and also hates me.');
    alert('Dammit... my name is definitely not Carlton. It\'s Carson... I\'m not gonna lie I feel let down. I\'d say we can still be friends but we can\'t, friends have to know each other\'s names. It\'s probably the one and only actual requirement of friendship. So now we have to part ways... But know this. I\'ll always remember you ' + name + '. ALWAYS.');
    correctUserAnswers --;
  } else {
    console.log(name + ' is dumb and also hates me.');
    alert('You failed ' + name + ', and that cuts deep. But maybe us taking a look at my page together can help us heal. Maybe there\'s... maybe there\'s still time.');
    correctUserAnswers --;
  }
};

question5Function();

var correctNumber = Math.floor((Math.random() * 100) + 1);
console.log(correctNumber);

function question6Function() {

  var attemptsNumbers = 4;

  for (var i = 0; i < 4; i++) {

    var question6 = prompt('Oh, did I mention that there are actually two more questions? I guess I didn\'t. Well, suprise! Alright ' + name + ', this time you get to do something besides Y or N. I want you to guess my favorite number. It\'s between 1 and 100 and it\'s totally not random. You get four tries. Hell, I\'ll even tell you if your guess too high or too low. Enter your guess below!');
    db[5] = {'Guess my favorite number.': question6};

    while (!question6) {
      alert('You\'re getting this because you\'re doing some falsey type nonsense. Now you better shape up ' + name + ', the lord is watching.');
      break;
    }

    if (question6 < correctNumber) {
      attemptsNumbers --;
      alert('Not quite, a bit too low. Come on ' + name + ', YOU GOT THIS. You have ' + attemptsNumbers + ' attempts left!');
      console.log('The user ' + name + ' guessed incorrectly.');
    } else if (question6 > correctNumber){
      attemptsNumbers --;
      alert('Not quite, too high! Come on ' + name + ', YOU GOT THIS. You have ' + attemptsNumbers + ' attempts left!');
      console.log('The user ' + name + ' guessed incorrectly.');
    } else if (question6 == correctNumber){
      alert('Holy shit, you actually guessed that?! How?! Well hey, kudos. I\'m pleasantly surprised. That was a random number and you got it. Nicely done!');
      console.log('The user' + name + ' somehow guessed this number correctly!');
      break;
    }
  }

  if (attemptsNumbers == 0) {
    correctUserAnswers --;
    alert('Ah damn, you were probably so close. The correct answer was ' + correctNumber + '!');
  }
};

question6Function();

var favoriteGames = ['The Elder Scrolls: Oblivion', 'Halo 3', 'Kingdom Hearts'];
var incorrectGames = ['Portal', 'Super Mario World', 'Bioshock', 'Zelda: Ocarina of Time/Zelda: Major\'s Mask', 'Mega-Man', 'Final Fantasy VII', 'Super Mario 64'];
var attemptsGames = 6;

function question7Function() {

  var gamesExplanation = alert('Alright, this is the final question (for realsies this time). On the page you\'re about to see is a list of my top ten favorite video-games of all time. Of every game on that list, there are three that I\'ve played more than any of the others, and you have to guess which ones they are. You have six attempts to guess the correct games. Good luck!');

  for (var i = 0; i < 6; i++) {

    var question7 = prompt('Of all the games in the list below, there are three that I have played more than any of the others. If you guess one of them, you win. Type in your answer exactly like how you see it typed, and make sure to spell it correctly!\n\nThe Elder Scrolls: Oblivion\nPortal\nSuper Mario World\nBioshock\nZelda: Ocarina of Time/Zelda: Majora\'s Mask\nMega-Man X4\nHalo 3\nFinal Fantasy VII\nKingdom Hearts\nSuper Mario 64');
    db[6] = {'Guess my top three favorite games!': question7};

    while (!question7) {
      alert('I know this seems like a daunting task, believe me. But you have to type something... Type something!');
      var question7 = prompt('Of all the games in the list below, there are three that I have played more than any of the others. Type in your answer exactly like how you see it typed, and make sure to spell it correctly!\n\nThe Elder Scrolls: Oblivion\nPortal\nSuper Mario World\nBioshock\nZelda: Ocarina of Time/Zelda: Majora\'s Mask\nMega-Man X4\nHalo 3\nFinal Fantasy VII\nKingdom Hearts\nSuper Mario 64');
    }

    if (question7 === favoriteGames[0] || question7 === favoriteGames[1] || question7 === favoriteGames[2]) {
      console.log(name + ' guessed the correct answer!');
      favoriteGames.splice(favoriteGames.indexOf(question7), 1);
      alert('Nice, you got one! The other correct answers were ' + favoriteGames[0] + ' and ' + favoriteGames[1] + '.');
      break;
    } else if (question7 === incorrectGames[0] || question7 === incorrectGames[1] || question7 === incorrectGames[2] || question7 === incorrectGames[3] || question7 === incorrectGames[4] || question7 === incorrectGames[5] || question7 === incorrectGames[6]) {
      attemptsGames --;
      alert('Nope! I know, this lineup is incredible. Believe me I know they\'re all good, but three are near and dear to my heart! Guess again! The number of attempts you have left is ' + attemptsGames + '!');
    } else {
      attemptsGames --;
      alert('Either you typed the game incorrectly or you\'re being squirrely! Try again! You have ' + attemptsGames + ' attempts left!');
    }
  }

  if (attemptsGames == 0) {
    correctUserAnswers --;
  }
};

question7Function();

alert('Congrats, you\'ve completed the guessing game! Now go take a look at some sweet CSS and HTML, and be sure to check your score!');
