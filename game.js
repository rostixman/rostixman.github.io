var game = function game() {
  var words = [
    {
      "ru": "четверг",
      "en": "Thursday"
    },
    {
      "ru": "13",
      "en": "thirteen"
    },
    {
      "ru": "12",
      "en": "twelve"
    },
    {
      "ru": "Европа",
      "en": "Europe"
    },
    {
      "ru": "Китай",
      "en": "China"
    },
    {
      "ru": "ключ",
      "en": "key"
    },
    {
      "ru": "тетрадь",
      "en": "notebook"
    },
    {
      "ru": "носовые платочки",
      "en": "tissues"
    },
    {
      "ru": "грязный",
      "en": "dirty"
    },
    {
      "ru": "дорогой",
      "en": "expensive"
    },
    {
      "ru": "высокий (о чем-то)",
      "en": "high"
    },
    {
      "ru": "сильный",
      "en": "strong"
    },
    {
      "ru": "горячий",
      "en": "hot"
    },
    {
      "ru": "сложный",
      "en": "difficult"
    },
    {
      "ru": "низкий (о чем-то)",
      "en": "low"
    },
    {
      "ru": "правильный",
      "en": "right"
    },
    {
      "ru": "маленький",
      "en": "small"
    },
    {
      "ru": "говорить на английском",
      "en": "speak English"
    },
    {
      "ru": "играть на гитаре",
      "en": "play the guitar"
    },
    {
      "ru": "готовить ужин",
      "en": "cook/make dinner"
    },
    {
      "ru": "носить очки",
      "en": "wear glasses"
    },
    {
      "ru": "стоматолог",
      "en": "dentist"
    },
    {
      "ru": "мед сестра",
      "en": "nurse"
    },
    {
      "ru": "официант",
      "en": "waiter"
    },
    {
      "ru": "дядя",
      "en": "uncle"
    },
    {
      "ru": "дочь",
      "en": "daughter"
    },
    {
      "ru": "муж",
      "en": "husband"
    },
    {
      "ru": "теща",
      "en": "mother-in-law"
    },
    {
      "ru": "просыпаться",
      "en": "wake up"
    },
    {
      "ru": "опаздывать",
      "en": "be late"
    },
    {
      "ru": "пешком идти на работу",
      "en": "walk to work"
    },
    {
      "ru": "принимать ванну",
      "en": "have/take a bath"
    },
    {
      "ru": "Который час?",
      "en": "What time is it?/What's the time?"
    },
    {
      "ru": "2 раза в год",
      "en": "twice a year"
    },
    {
      "ru": "обычно",
      "en": "usually/normally"
    },
    {
      "ru": "никогда",
      "en": "never"
    },
    {
      "ru": "существительное",
      "en": "noun"
    },
    {
      "ru": "местоимение",
      "en": "pronoun"
    },
    {
      "ru": "тот, этот",
      "en": "that, this"
    },
    {
      "ru": "испытывающий жажду",
      "en": "thirsty"
    },
    {
      "ru": "заскучавший",
      "en": "bored"
    },
    {
      "ru": "снаружи",
      "en": "outside"
    },
    {
      "ru": "выходные (сб, вс)",
      "en": "weekend"
    },
    {
      "ru": "49",
      "en": "forty-nine"
    },
    {
      "ru": "20",
      "en": "twenty"
    },
    {
      "ru": "Ирландия",
      "en": "Ireland"
    },
    {
      "ru": "Как это пишется?",
      "en": "How do you spell it?"
    },
    {
      "ru": "наушники",
      "en": "headphones"
    },
    {
      "ru": "журнал",
      "en": "magazine"
    },
    {
      "ru": "наручные часы",
      "en": "watch"
    },
    {
      "ru": "безопасный",
      "en": "safe"
    },
    {
      "ru": "далекий",
      "en": "far"
    },
    {
      "ru": "длинный",
      "en": "long"
    },
    {
      "ru": "неправильный",
      "en": "wrong"
    },
    {
      "ru": "дешевый",
      "en": "cheap"
    },
    {
      "ru": "полный",
      "en": "full"
    },
    {
      "ru": "близкий",
      "en": "near"
    },
    {
      "ru": "короткий",
      "en": "short"
    },
    {
      "ru": "слабый",
      "en": "weak"
    },
    {
      "ru": "делать д/з",
      "en": "do homework"
    },
    {
      "ru": "завтрак",
      "en": "breakfast"
    },
    {
      "ru": "архитектор",
      "en": "architect"
    },
    {
      "ru": "парикмахер",
      "en": "hairdresser"
    },
    {
      "ru": "солдат",
      "en": "soldier"
    },
    {
      "ru": "официантка",
      "en": "waitress"
    },
    {
      "ru": "племянник",
      "en": "nephew"
    },
    {
      "ru": "сын",
      "en": "son"
    },
    {
      "ru": "родители",
      "en": "parents"
    },
    {
      "ru": "принимать душ",
      "en": "have/take a shower"
    },
    {
      "ru": "вставать",
      "en": "get up"
    },
    {
      "ru": "приходить рано",
      "en": "come early"
    },
    {
      "ru": "расслабляться",
      "en": "relax"
    },
    {
      "ru": "четверть",
      "en": "quarter"
    },
    {
      "ru": "неделя",
      "en": "week"
    },
    {
      "ru": "всегда",
      "en": "always"
    },
    {
      "ru": "иногда",
      "en": "sometimes"
    },
    {
      "ru": "страна",
      "en": "country"
    },
    {
      "ru": "глагол",
      "en": "verb"
    },
    {
      "ru": "вспомогательный глагол",
      "en": "auxiliary"
    },
    {
      "ru": "те/эти",
      "en": "those/these"
    },
    {
      "ru": "злой",
      "en": "angry"
    },
    {
      "ru": "банкомат",
      "en": "ATM/cash machine"
    },
    {
      "ru": "пара",
      "en": "couple"
    },
    {
      "ru": "Увидимся в субботу!",
      "en": "See you on Saturday!"
    },
    {
      "ru": "11",
      "en": "eleven"
    },
    {
      "ru": "67",
      "en": "sixty-seven"
    },
    {
      "ru": "японский",
      "en": "Japanese"
    },
    {
      "ru": "монета",
      "en": "coin"
    },
    {
      "ru": "ноутбук",
      "en": "laptop"
    },
    {
      "ru": "ножницы",
      "en": "scissors"
    },
    {
      "ru": "опасный",
      "en": "dangerous"
    },
    {
      "ru": "легкий (не сложный)",
      "en": "easy"
    },
    {
      "ru": "быстрый",
      "en": "fast"
    },
    {
      "ru": "богатый",
      "en": "rich"
    },
    {
      "ru": "старый",
      "en": "old"
    },
    {
      "ru": "чистый",
      "en": "clean"
    },
    {
      "ru": "пустой",
      "en": "empty"
    },
    {
      "ru": "бедный",
      "en": "poor"
    },
    {
      "ru": "медленный",
      "en": "slow"
    },
    {
      "ru": "высокий (о ком-то)",
      "en": "tall"
    },
    {
      "ru": "играть в футбол",
      "en": "play football"
    },
    {
      "ru": "делать работу по дому",
      "en": "do housework"
    },
    {
      "ru": "обед",
      "en": "lunch"
    },
    {
      "ru": "повар",
      "en": "cook"
    },
    {
      "ru": "музыкант",
      "en": "musician"
    },
    {
      "ru": "ветеринар",
      "en": "vet"
    },
    {
      "ru": "тетя",
      "en": "aunt"
    },
    {
      "ru": "племянница",
      "en": "niece"
    },
    {
      "ru": "жена",
      "en": "wife"
    },
    {
      "ru": "отчим",
      "en": "step-father"
    },
    {
      "ru": "одеваться",
      "en": "get dressed"
    },
    {
      "ru": "поздно ложиться спать",
      "en": "go to bed late"
    },
    {
      "ru": "поздно приходить домой",
      "en": "get home late"
    },
    {
      "ru": "спать 8 часов",
      "en": "sleep for 8 hours"
    },
    {
      "ru": "половина",
      "en": "half"
    },
    {
      "ru": "1 раз в месяц",
      "en": "once a month"
    },
    {
      "ru": "часто",
      "en": "often"
    },
    {
      "ru": "почти никогда",
      "en": "hardly ever"
    },
    {
      "ru": "возраст",
      "en": "age"
    },
    {
      "ru": "прилагательное",
      "en": "adjective"
    },
    {
      "ru": "отель",
      "en": "hotel"
    },
    {
      "ru": "голодный",
      "en": "hungry"
    },
    {
      "ru": "уставший",
      "en": "tired"
    },
    {
      "ru": "внутри",
      "en": "inside"
    },
    {
      "ru": "здоровый",
      "en": "healthy"
    },
    {
      "ru": "покупать",
      "en": "buy"
    },
    {
      "ru": "звонить кому-то по телефону",
      "en": "call/phone"
    },
    {
      "ru": "рисовать картину (не краски)",
      "en": "draw a picture"
    },
    {
      "ru": "найти",
      "en": "find"
    },
    {
      "ru": "забыть",
      "en": "forget"
    },
    {
      "ru": "давать",
      "en": "give"
    },
    {
      "ru": "слышать",
      "en": "hear"
    },
    {
      "ru": "искать",
      "en": "look for smth"
    },
    {
      "ru": "встретиться за чашечкой кофе",
      "en": "meet for a coffee"
    },
    {
      "ru": "рисовать картину (краски)",
      "en": "paint a picture"
    },
    {
      "ru": "играть в шахматы",
      "en": "play chess"
    },
    {
      "ru": "вспоминать/помнить",
      "en": "remember"
    },
    {
      "ru": "петь песню",
      "en": "sing a song"
    },
    {
      "ru": "плавать в море",
      "en": "swim in the sea"
    },
    {
      "ru": "фотографировать",
      "en": "take a photo"
    },
    {
      "ru": "разговаривать с другом",
      "en": "talk to your friend"
    },
    {
      "ru": "рассказать кому-то секрет",
      "en": "tell smbd a secret"
    },
    {
      "ru": "ждать автобус",
      "en": "wait for a bus"
    },
    {
      "ru": "облачно",
      "en": "cloudy"
    },
    {
      "ru": "туманно",
      "en": "foggy"
    },
    {
      "ru": "солнечно",
      "en": "sunny"
    },
    {
      "ru": "ветрено",
      "en": "windy"
    },
    {
      "ru": "Идёт дождь.",
      "en": "It's raining."
    },
    {
      "ru": "Снег идет.",
      "en": "It's snowing."
    },
    {
      "ru": "весна",
      "en": "spring"
    },
    {
      "ru": "лето",
      "en": "summer"
    },
    {
      "ru": "зима",
      "en": "winter"
    },
    {
      "ru": "осень",
      "en": "autumn/fall"
    },
    {
      "ru": "июнь",
      "en": "June"
    },
    {
      "ru": "июль",
      "en": "July"
    },
    {
      "ru": "август",
      "en": "August"
    },
    {
      "ru": "январь",
      "en": "January"
    },
    {
      "ru": "Какая сегодня погода?",
      "en": "What's the weather like today?"
    },
    {
      "ru": "занятой",
      "en": "busy"
    },
    {
      "ru": "также/тоже",
      "en": "also"
    },
    {
      "ru": "возвращаться",
      "en": "go back"
    },
    {
      "ru": "судья/судить",
      "en": "judge"
    },
    {
      "ru": "лаять",
      "en": "bark"
    },
    {
      "ru": "спорить",
      "en": "argue"
    },
    {
      "ru": "соседи",
      "en": "neighbours"
    },
    {
      "ru": "рубашка",
      "en": "shirt"
    },
    {
      "ru": "футболка",
      "en": "T-shirt"
    },
    {
      "ru": "обувь",
      "en": "shoes"
    },
    {
      "ru": "пиджак/куртка",
      "en": "jacket"
    },
    {
      "ru": "юбка",
      "en": "skirt"
    },
    {
      "ru": "примерочная",
      "en": "changing room/fitting room"
    },
    {
      "ru": "Мне нужно идти.",
      "en": "I have to go."
    }
  ];


  var shuffledWords = shuffle(words);

  var game = document.querySelector('.game');

  if (!game) return false;

  var startButton = game.querySelector('.game__action_start');
  var translateButton = game.querySelector('.game__action_translation');
  var nextButton = game.querySelector('.game__action_next');
  var playAgainButton = document.querySelector('.end__play-again');
  var fullscreenButton = document.querySelector('.fullscreen');

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
      document.querySelector('.game-wrap').remove();
      removeClass(document.querySelector('.end'), 'hide');
    }
  });

  playAgainButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.reload();
  });

  fullscreenButton.addEventListener('click', function(e) {
    document.querySelector('.total-wrap').requestFullscreen();
  });
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
