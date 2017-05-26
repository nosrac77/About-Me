'use strict';

var welcome = alert('Hey there, I see you made your way to my page. Prepare your mind! Five questions I shall ask thee...');

var question1 = prompt('Do I have a dog? Answer Y or N to submit a valid response. Like, seriously, don\'t type some random bullshit.').toUpperCase();

if (question1 === 'N') {
  console.log('The user is correct. Correct as HELL.');
  alert('Oh, well hello there friend. Glad to see you know me so well!');
} else if (question1 === 'Y') {
  console.log('The user is dumb and also hates me.');
  alert('Wow... wrong. Just cuz Adam has a dog we all have dogs? And here I thought we were homies.');
} else {
  alert('Seriously? Even after I said no bullshit? Come on man! Alright, you lose. 0 for 0 so far, happy now?');
}

var question2 = prompt('Ok, next up is an easy one. Is my favorite pair of shoes Nike brand or nah? Answer Y or N to submit a valid response... no tricks. Just Y or N. You can do this.');

if (question2 === 'Y'){
  console.log('The user is correct. Correct as HELL.');
  alert('Indeed they are! Free Runs to be exact. Pricey but sooo worth it.');
} else if (question2 === 'N') {
  console.log('The user is dumb and also hates me.');
  alert('Goodness gracious. That was a lay-up! Come on, wrongy mcwrongface! Look alive!');
} else {
  alert('Dammit. Simple instructions yo, ya gotta follow em! 0 for 2 now. You\'re not doing hot right now.');
}
