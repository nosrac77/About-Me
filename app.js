'use strict';

var welcome = alert('Hey there, I see you made your way to my page. Prepare your mind! Five questions I shall ask thee...');

var name = prompt('Wait, first of all who am I speaking with? Enter your name below. Or, ya know, don\'t. Might mess a few things up though... ');

while (!name || name === null) {
  alert ('Alright, wise guy. Enter a valid name. Ya gotta type something!');
  var name = prompt('Wait, first of all who am I speaking with? Enter your name below. Or, ya know, don\'t. Stay in this while loop. While you keep misbehaving it\'ll keep the alerts coming (seriously, free yourself by entering something or hitting cancel).');
}

if (name) {
  console.log('User has input ' + name + ' as his or her name.');
  alert(name + ', huh? Interesting, is that a family name or something? Well alright then ' + name + ', it\'s truly time to begin! This is a guessing game! Can you guess what you\'ll be doing? Answer five questions in Y or N format, but beware!! Invalid inputs can yield rather... dangerous results. Mwahahahaha!');
}

var question1 = prompt('Do I have a dog? Answer Y or N to submit a valid response. Like, seriously ' + name + ', don\'t type some random bullshit.').toUpperCase();

if (question1 === 'N') {
  console.log(name + ' is correct. Correct as HELL.');
  alert('Oh, well hello there friend. Glad to see you know me so well!');
} else if (question1 === 'Y') {
  console.log(name + ' is dumb and also hates me.');
  alert('Wow... wrong. Just cuz Adam has a dog we all have dogs? And here I thought we were homies.');
} else {
  alert('Seriously? Even after I said no bullshit? Come on man! Alright, you lose. 0 for 0 so far, happy now?');
}

var question2 = prompt('Ok ' + name + ', next up is an easy one. Is my favorite pair of shoes Nike brand or nah? Answer Y or N to submit a valid response... no tricks. Just Y or N. You can do this.').toUpperCase();

if (question2 === 'Y'){
  console.log(name + ' is correct. Correct as HELL.');
  alert('Indeed they are! Free Runs to be exact. Pricey but sooo worth it.');
} else if (question2 === 'N') {
  console.log(name + ' is dumb and also hates me.');
  alert('Goodness gracious. That was a lay-up! Come on, wrongy mcwrongface! Look alive!');
} else {
  alert('Dammit. Simple instructions yo, ya gotta follow em! You\'re not doing hot right now.');
}

var question3 = prompt('Third question! See how easy this is ' + name + '? You\'re more than halfway done! Anyway, another easy one. Is my birthday next month? Again, answer Y or N. No shenanigans.').toUpperCase();

if (question3 === 'N'){
  console.log(name + ' is correct. Correct as HELL.');
  alert('Haha, I knew we were best friends. I KNEW IT. You ditching me last Friday was a total fluke huh?! Anyway, enjoy being correct!');
} else if (question3 === 'Y') {
  console.log(name + ' is dumb and also hates me.');
  alert('First answer you\'ve gotten wrong, chump? I honestly don\'t know, this JavaScript isn\'t sophisticated enough to tell! But I\'m willing to bet it isn\'t! Anyway, you\'re wrong!');
} else {
  alert('Wow... can\'t type a Y or an N? Too cool for school? Whatever, you get this one wrong for your defiance.');
}

var question4 = prompt('You\'re being a trooper ' + name + '. Alright, next question (and be careful, this one\'s a bit of a zinger). Is my favorite actor Nick Cage? Also apart of the same question: if so, do I also have a Nick Cage pillow on my bed? Answer Y if you think I love Nick Cage and own a Nick Cage pillow or N to say no to both. And again, just type in Y or N. Don\'t try to get wise on me now.').toUpperCase();

if (question4 === 'N') {
  console.log(name + ' is correct. Correct as HELL.');
  alert('Ah, not even the zingers can throw you huh? A true comrade. We\'d get along swimmingly, I\'m sure. Let\'s hang out and not watch Nick Cage movies.');
} else if (question4 === 'Y') {
  console.log(name + ' is dumb and also hates me.');
  alert('Ha! I gotcha with a zinger! Although Nick Cage is great (seriously though the man deserves more credit, Raising Arizona is a classic) he\'s certainly not my favorite and I don\'t own a Nick Cage pillow.');
} else {
  alert('Tried to get wise on me huh?! I told ya not to! That\'s a big fail, ' + name + '.');
}

var question5 = prompt('Ok ' + name + ', final question. This is it. Your life whole has lead up to this moment. You ready? Take a deep breath... ok now exhale. Look at m- LOOK AT ME. You. Can. Do this. Alright, here we go... is my name Carlton? Focus now ' + name + ', focus. Just hit me with a Y or an N.').toUpperCase();

if (question5 === 'N') {
  console.log(name + ' is correct. Correct as HELL.');
  alert('CORRECT! YOU DID IT!! Haha ah ' + name + ', I knew you had it in you! Well relax and take a well deserved look at some sweet html and css!');
} else if (question5 === 'Y') {
  console.log(name + ' is dumb and also hates me.');
  alert('Dammit... my name is definitely not Carlton. It\'s Carson... I\'m not gonna lie I feel let down. I\'d say we can still be friends but we can\'t, friends have to know each other\'s names. It\'s probably the one and only actual requirement of friendship. So now we have to part ways... But know this. I\'ll always remember you ' + name + '. ALWAYS.');
} else {
  alert('You failed ' + name + ', and that cuts deep. But maybe us taking a look at my page together can help us heal. Maybe there\'s... maybe there\'s still time.');
}
