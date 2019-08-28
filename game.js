var game = function game() {
  var words = [
    {
      "ru": "четверг",
      "en": "Thursday"
    },
    {
      "ru": "13",
      "en": "thirteen"
    }
  ];


  var shuffledWords = shuffle(words);

  var game = document.querySelector('.game');

  if (!game) return false;

  var startButton = game.querySelector('.game__action_start');
  var translateButton = game.querySelector('.game__action_translation');
  var nextButton = game.querySelector('.game__action_next');
  var playAgainButton = game.querySelector('.end__play-again');

  var diceDiv = game.querySelector('.game__dice');
  var wordDiv = game.querySelector('.game__word');
  var translationDiv = game.querySelector('.game__translation');
  var currentWord;

  startButton.addEventListener('click', function(e) {
    e.preventDefault();

    // hide button
    addClass(startButton, 'hide');

    currentWord = getWord(wordDiv, diceDiv, translateButton, words);

    removeClass(translateButton, 'hide');
    removeClass(diceDiv, 'hide');
    removeClass(wordDiv, 'hide');
  });

  translateButton.addEventListener('click', function(e) {
    e.preventDefault();

    translationDiv.innerHTML = currentWord.en;
    removeClass(translationDiv, 'hide');
    removeClass(nextButton, 'hide');
    addClass(translateButton, 'hide');
  });

  nextButton.addEventListener('click', function(e) {
    e.preventDefault();

    currentWord = getWord(wordDiv, diceDiv, translateButton, words);

    if (currentWord) {
      removeClass(translateButton, 'hide');
      addClass(nextButton, 'hide');
      addClass(translationDiv, 'hide');
    } else {
      game.remove();
      removeClass(document.querySelector('.end'), 'hide');
    }
  });

  playAgainButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.reload();
  })
};

var getWord = function getWord(wordDiv, diceDiv, translateButton, words) {
  var currentWord = words.shift();
  if (!currentWord) return false;

  wordDiv.innerHTML = currentWord.ru;
  diceDiv.innerHTML = getRandomInt(1, 6);

  return currentWord;
};

var shuffle = function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var hasClass = function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

var addClass = function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
};

var removeClass = function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
};

document.addEventListener('DOMContentLoaded', game);
