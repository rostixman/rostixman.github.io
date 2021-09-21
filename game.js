var game = function game() {
  var irregularVerbsForElementary=[{ru:"быть - являться - находиться",en:"be - was were - been"},{ru:"становиться",en:"become - became - become"},{ru:"начинать",en:"begin - began - begun"},{ru:"ломать",en:"break - broke - broken"},{ru:"приносить",en:"bring - brought - brought"},{ru:"строить",en:"build - built - built"},{ru:"покупать",en:"buy - bought - bought"},{ru:"мочь - уметь",en:"can - could - 0"},{ru:"ловить",en:"catch - caught - caught"},{ru:"приходить",en:"come - came - come"},{ru:"стоить",en:"cost - cost - cost"},{ru:"делать (напр дз)",en:"do - did - done"},{ru:"пить - выпивать",en:"drink - drank - drunk"},{ru:"водить",en:"drive - drove - driven"},{ru:"кушать",en:"eat - ate - eaten"},{ru:"падать",en:"fall - fell - fallen"},{ru:"чувствовать",en:"feel - felt - felt"},{ru:"находить",en:"find - found - found"},{ru:"летать",en:"fly - flew - flown"},{ru:"забывать",en:"forget - forgot - forgotten"},{ru:"получать",en:"get - got - got"},{ru:"давать",en:"give - gave - given"},{ru:"идти - ходить",en:"go - went - gone"},{ru:"иметь - владеть",en:"have - had - had"},{ru:"слышать",en:"hear - heard - heard"},{ru:"знать",en:"know - knew - known"},{ru:"покидать",en:"leave - left - left"},{ru:"терять",en:"lose - lost - lost"},{ru:"делать (напр ужин) - изготавливать",en:"make - made - made"},{ru:"встречать(ся)",en:"meet - met - met"},{ru:"платить",en:"pay - paid - paid"},{ru:"ставить - класть - помещать",en:"put - put - put"},{ru:"читать",en:"read - read - read"},{ru:"бегать",en:"run - ran - run"},{ru:"говорить - сказать",en:"say - said - said"},{ru:"видеть",en:"see - saw - seen"},{ru:"отправлять",en:"send - sent - sent"},{ru:"петь",en:"sing - sang - sung"},{ru:"сидеть",en:"sit - sat - sat"},{ru:"спать",en:"sleep - slept - slept"},{ru:"говорить (напр на англ)",en:"speak - spoke - spoken"},{ru:"тратить",en:"spend - spent - spent"},{ru:"стоять",en:"stand - stood - stood"},{ru:"плавать",en:"swim - swam - swum"},{ru:"учить",en:"teach - taught - taught"},{ru:"брать",en:"take - took - taken"},{ru:"рассказывать - сообщать",en:"tell - told - told"},{ru:"думать",en:"think - thought - thought"},{ru:"понимать",en:"understand - understood - understood"},{ru:"просыпаться",en:"wake - woke - woken"},{ru:"носить (напр одежду)",en:"wear - wore - worn"},{ru:"побеждать",en:"win - won - won"},{ru:"писАть",en:"write - wrote - written"}];
  var elementarySixUnits=[{ru:"четверг",en:"Thursday"},{ru:"13",en:"thirteen"},{ru:"12",en:"twelve"},{ru:"Европа",en:"Europe"},{ru:"Китай",en:"China"},{ru:"ключ",en:"key"},{ru:"тетрадь",en:"notebook"},{ru:"носовые платочки",en:"tissues"},{ru:"грязный",en:"dirty"},{ru:"дорогой",en:"expensive"},{ru:"высокий (о чем-то)",en:"high"},{ru:"сильный",en:"strong"},{ru:"горячий",en:"hot"},{ru:"сложный",en:"difficult"},{ru:"низкий (о чем-то)",en:"low"},{ru:"правильный",en:"right"},{ru:"маленький",en:"small"},{ru:"говорить на английском",en:"speak English"},{ru:"играть на гитаре",en:"play the guitar"},{ru:"готовить ужин",en:"cook/make dinner"},{ru:"носить очки",en:"wear glasses"},{ru:"стоматолог",en:"dentist"},{ru:"мед сестра",en:"nurse"},{ru:"официант",en:"waiter"},{ru:"дядя",en:"uncle"},{ru:"дочь",en:"daughter"},{ru:"муж",en:"husband"},{ru:"теща",en:"mother-in-law"},{ru:"просыпаться",en:"wake up"},{ru:"опаздывать",en:"be late"},{ru:"пешком идти на работу",en:"walk to work"},{ru:"принимать ванну",en:"have/take a bath"},{ru:"Который час?",en:"What time is it?/What's the time?"},{ru:"2 раза в год",en:"twice a year"},{ru:"обычно",en:"usually/normally"},{ru:"никогда",en:"never"},{ru:"существительное",en:"noun"},{ru:"местоимение",en:"pronoun"},{ru:"тот, этот",en:"that, this"},{ru:"испытывающий жажду",en:"thirsty"},{ru:"заскучавший",en:"bored"},{ru:"снаружи",en:"outside"},{ru:"выходные (сб, вс)",en:"weekend"},{ru:"49",en:"forty-nine"},{ru:"20",en:"twenty"},{ru:"Ирландия",en:"Ireland"},{ru:"Как это пишется?",en:"How do you spell it?"},{ru:"наушники",en:"headphones"},{ru:"журнал",en:"magazine"},{ru:"наручные часы",en:"watch"},{ru:"безопасный",en:"safe"},{ru:"далекий",en:"far"},{ru:"длинный",en:"long"},{ru:"неправильный",en:"wrong"},{ru:"дешевый",en:"cheap"},{ru:"полный",en:"full"},{ru:"близкий",en:"near"},{ru:"короткий",en:"short"},{ru:"слабый",en:"weak"},{ru:"делать д/з",en:"do homework"},{ru:"завтрак",en:"breakfast"},{ru:"архитектор",en:"architect"},{ru:"парикмахер",en:"hairdresser"},{ru:"солдат",en:"soldier"},{ru:"официантка",en:"waitress"},{ru:"племянник",en:"nephew"},{ru:"сын",en:"son"},{ru:"родители",en:"parents"},{ru:"принимать душ",en:"have/take a shower"},{ru:"вставать",en:"get up"},{ru:"приходить рано",en:"come early"},{ru:"расслабляться",en:"relax"},{ru:"четверть",en:"quarter"},{ru:"неделя",en:"week"},{ru:"всегда",en:"always"},{ru:"иногда",en:"sometimes"},{ru:"страна",en:"country"},{ru:"глагол",en:"verb"},{ru:"вспомогательный глагол",en:"auxiliary"},{ru:"те/эти",en:"those/these"},{ru:"злой",en:"angry"},{ru:"банкомат",en:"ATM/cash machine"},{ru:"пара",en:"couple"},{ru:"Увидимся в субботу!",en:"See you on Saturday!"},{ru:"11",en:"eleven"},{ru:"67",en:"sixty-seven"},{ru:"японский",en:"Japanese"},{ru:"монета",en:"coin"},{ru:"ноутбук",en:"laptop"},{ru:"ножницы",en:"scissors"},{ru:"опасный",en:"dangerous"},{ru:"легкий (не сложный)",en:"easy"},{ru:"быстрый",en:"fast"},{ru:"богатый",en:"rich"},{ru:"старый",en:"old"},{ru:"чистый",en:"clean"},{ru:"пустой",en:"empty"},{ru:"бедный",en:"poor"},{ru:"медленный",en:"slow"},{ru:"высокий (о ком-то)",en:"tall"},{ru:"играть в футбол",en:"play football"},{ru:"делать работу по дому",en:"do housework"},{ru:"обед",en:"lunch"},{ru:"повар",en:"cook"},{ru:"музыкант",en:"musician"},{ru:"ветеринар",en:"vet"},{ru:"тетя",en:"aunt"},{ru:"племянница",en:"niece"},{ru:"жена",en:"wife"},{ru:"отчим",en:"step-father"},{ru:"одеваться",en:"get dressed"},{ru:"поздно ложиться спать",en:"go to bed late"},{ru:"поздно приходить домой",en:"get home late"},{ru:"спать 8 часов",en:"sleep for 8 hours"},{ru:"половина",en:"half"},{ru:"1 раз в месяц",en:"once a month"},{ru:"часто",en:"often"},{ru:"почти никогда",en:"hardly ever"},{ru:"возраст",en:"age"},{ru:"прилагательное",en:"adjective"},{ru:"отель",en:"hotel"},{ru:"голодный",en:"hungry"},{ru:"уставший",en:"tired"},{ru:"внутри",en:"inside"},{ru:"здоровый",en:"healthy"},{ru:"покупать",en:"buy"},{ru:"звонить кому-то по телефону",en:"call/phone"},{ru:"рисовать картину (не краски)",en:"draw a picture"},{ru:"найти",en:"find"},{ru:"забыть",en:"forget"},{ru:"давать",en:"give"},{ru:"слышать",en:"hear"},{ru:"искать",en:"look for smth"},{ru:"встретиться за чашечкой кофе",en:"meet for a coffee"},{ru:"рисовать картину (краски)",en:"paint a picture"},{ru:"играть в шахматы",en:"play chess"},{ru:"вспоминать/помнить",en:"remember"},{ru:"петь песню",en:"sing a song"},{ru:"плавать в море",en:"swim in the sea"},{ru:"фотографировать",en:"take a photo"},{ru:"разговаривать с другом",en:"talk to your friend"},{ru:"рассказать кому-то секрет",en:"tell smbd a secret"},{ru:"ждать автобус",en:"wait for a bus"},{ru:"облачно",en:"cloudy"},{ru:"туманно",en:"foggy"},{ru:"солнечно",en:"sunny"},{ru:"ветрено",en:"windy"},{ru:"Идёт дождь.",en:"It's raining."},{ru:"Снег идет.",en:"It's snowing."},{ru:"весна",en:"spring"},{ru:"лето",en:"summer"},{ru:"зима",en:"winter"},{ru:"осень",en:"autumn/fall"},{ru:"июнь",en:"June"},{ru:"июль",en:"July"},{ru:"август",en:"August"},{ru:"январь",en:"January"},{ru:"Какая сегодня погода?",en:"What's the weather like today?"},{ru:"занятой",en:"busy"},{ru:"также/тоже",en:"also"},{ru:"возвращаться",en:"go back"},{ru:"судья/судить",en:"judge"},{ru:"лаять",en:"bark"},{ru:"спорить",en:"argue"},{ru:"соседи",en:"neighbours"},{ru:"рубашка",en:"shirt"},{ru:"футболка",en:"T-shirt"},{ru:"обувь",en:"shoes"},{ru:"пиджак/куртка",en:"jacket"},{ru:"юбка",en:"skirt"},{ru:"примерочная",en:"changing room/fitting room"},{ru:"Мне нужно идти.",en:"I have to go."}];
  var speakOut2PreInt=[{ru:"быть - являться - находиться",en:"be - was were - been"},{ru:"бить - отбивать - побеждать",en:"beat - beat - beaten"},{ru:"становиться",en:"become - became - become"},{ru:"начинать",en:"begin - began - begun"},{ru:"кусать - откусывать",en:"bite - bit - bitten"},{ru:"дуть",en:"blow - blew - blown"},{ru:"ломать",en:"break - broke - broken"},{ru:"приносить",en:"bring - brought - brought"},{ru:"строить",en:"build - built - built"},{ru:"сжигать - гореть",en:"burn - burned (burnt) - burned (burnt)"},{ru:"покупать",en:"buy - bought - bought"},{ru:"мочь - уметь",en:"can - could - 0"},{ru:"ловить",en:"catch - caught - caught"},{ru:"выбирать",en:"choose - chose - chosen"},{ru:"приходить",en:"come - came - come"},{ru:"стоить",en:"cost - cost - cost"},{ru:"резать - отрезать",en:"cut - cut - cut"},{ru:"иметь дело ",en:"deal - dealt - dealt"},{ru:"делать (напр дз)",en:"do - did - done"},{ru:"рисовать",en:"draw- drew - drawn"},{ru:"мечтать - сниться",en:"dream - dreamed (dreamt) - dreamed (dreamt)"},{ru:"пить - выпивать",en:"drink - drank - drunk"},{ru:"водить",en:"drive - drove - driven"},{ru:"кушать",en:"eat - ate - eaten"},{ru:"падать",en:"fall - fell - fallen"},{ru:"чувствовать",en:"feel - felt - felt"},{ru:"бороться - драться",en:"fight - fought - fought"},{ru:"находить",en:"find - found - found"},{ru:"летать",en:"fly - flew - flown"},{ru:"забывать",en:"forget - forgot - forgotten"},{ru:"прощать",en:"forgive - forgave - forgiven"},{ru:"замораживать",en:"freeze - froze - frozen"},{ru:"получать",en:"get - got - got"},{ru:"давать",en:"give - gave - given"},{ru:"идти - ходить",en:"go - went - gone"},{ru:"расти",en:"grow - grew - grown"},{ru:"висеть",en:"hang - hung - hung"},{ru:"иметь - владеть",en:"have - had - had"},{ru:"слышать",en:"hear - heard - heard"},{ru:"прятать(ся)",en:"hide - hid - hidden"},{ru:"бить - попадать - нажимать",en:"hit - hit - hit"},{ru:"держать",en:"hold - held - held"},{ru:"ранить - болеть (о ране)",en:"hurt - hurt - hurt"},{ru:"держать - сохранять",en:"keep - kept - kept"},{ru:"знать",en:"know - knew - known"},{ru:"учить - узнавать",en:"learn - learned (learnt) - learned (learnt)"},{ru:"покидать",en:"leave - left - left"},{ru:"одалживать (кому-то)",en:"lend - lent - lent"},{ru:"позволять",en:"let - let- let"},{ru:"лежать",en:"lie - lay - lain"},{ru:"терять",en:"lose - lost - lost"},{ru:"делать (напр ужин) - изготавливать",en:"make - made - made"},{ru:"значить",en:"mean - meant - meant"},{ru:"встречать(ся)",en:"meet - met - met"},{ru:"платить",en:"pay - paid - paid"},{ru:"ставить - класть - помещать",en:"put - put - put"},{ru:"читать",en:"read - read - read"},{ru:"ездить верхом",en:"ride - rode - ridden"},{ru:"звонить - звенеть",en:"ring - rang - rung"},{ru:"бегать",en:"run - ran - run"},{ru:"говорить - сказать",en:"say - said - said"},{ru:"видеть",en:"see - saw - seen"},{ru:"продавать",en:"sell - sold - sold"},{ru:"отправлять",en:"send - sent - sent"},{ru:"устанавливать",en:"set - set - set"},{ru:"трясти",en:"shake - shook - shaken"},{ru:"сиять",en:"shine - shone - shone"},{ru:"показывать",en:"show - showed - shown"},{ru:"закрывать - запирать",en:"shut - shut - shut"},{ru:"петь",en:"sing - sang - sung"},{ru:"сидеть",en:"sit - sat - sat"},{ru:"спать",en:"sleep - slept - slept"},{ru:"нюхать - пахнуть",en:"smell - smelled (smelt) - smelled (smelt)"},{ru:"говорить (напр на англ)",en:"speak - spoke - spoken"},{ru:"писАть по буквам - колдовать",en:"spell - spelt - spelt"},{ru:"тратить",en:"spend - spent - spent"},{ru:"проливать",en:"spill - spilled (spilt) - spilled (spilt)"},{ru:"стоять",en:"stand - stood - stood"},{ru:"красть",en:"steal - stole - stolen"},{ru:"плавать",en:"swim - swam - swum"},{ru:"брать",en:"take - took - taken"},{ru:"учить",en:"teach - taught - taught"},{ru:"разрывать",en:"tear - tore - torn"},{ru:"рассказывать - сообщать",en:"tell - told - told"},{ru:"думать",en:"think - thought - thought"},{ru:"кидать",en:"throw - threw - thrown"},{ru:"понимать",en:"understand - understood - understood"},{ru:"просыпаться",en:"wake - woke - woken"},{ru:"носить (напр одежду)",en:"wear - wore - worn"},{ru:"побеждать",en:"win - won - won"},{ru:"писАть",en:"write - wrote - written"}];
  var speakOut2Int=[{ru:"быть - являться - находиться",en:"be - was were - been"},{ru:"бить - отбивать - побеждать",en:"beat - beat - beaten"},{ru:"становиться",en:"become - became - become"},{ru:"начинать",en:"begin - began - begun"},{ru:"сгибать - наклоняться",en:"bend - bent - bent"},{ru:"делать ставку",en:"bet - bet - bet"},{ru:"кусать - откусывать",en:"bite - bit - bitten"},{ru:"кровоточить",en:"bleed - bled - bled"},{ru:"дуть",en:"blow - blew - blown"},{ru:"ломать",en:"break - broke - broken"},{ru:"приносить",en:"bring - brought - brought"},{ru:"транслировать",en:"broadcast - broadcast - broadcast"},{ru:"строить",en:"build - built - built"},{ru:"сжигать - гореть",en:"burn - burned (burnt) - burned (burnt)"},{ru:"разрываться - разразиться",en:"burst - burst - burst"},{ru:"покупать",en:"buy - bought - bought"},{ru:"мочь - уметь",en:"can - could - 0"},{ru:"ловить",en:"catch - caught - caught"},{ru:"выбирать",en:"choose - chose - chosen"},{ru:"приходить",en:"come - came - come"},{ru:"стоить",en:"cost - cost - cost"},{ru:"резать - отрезать",en:"cut - cut - cut"},{ru:"иметь дело ",en:"deal - dealt - dealt"},{ru:"копать",en:"dig - dig - dug"},{ru:"делать (напр дз)",en:"do - did - done"},{ru:"рисовать",en:"draw- drew - drawn"},{ru:"мечтать - сниться",en:"dream - dreamed (dreamt) - dreamed (dreamt)"},{ru:"пить - выпивать",en:"drink - drank - drunk"},{ru:"водить",en:"drive - drove - driven"},{ru:"кушать",en:"eat - ate - eaten"},{ru:"падать",en:"fall - fell - fallen"},{ru:"чувствовать",en:"feel - felt - felt"},{ru:"кормить",en:"feed - fed - fed"},{ru:"бороться - драться",en:"fight - fought - fought"},{ru:"находить",en:"find - found - found"},{ru:"летать",en:"fly - flew - flown"},{ru:"запрещать",en:"forbid - forbade - forbidden"},{ru:"забывать",en:"forget - forgot - forgotten"},{ru:"прощать",en:"forgive - forgave - forgiven"},{ru:"замораживать",en:"freeze - froze - frozen"},{ru:"получать",en:"get - got - got"},{ru:"давать",en:"give - gave - given"},{ru:"идти - ходить",en:"go - went - gone"},{ru:"расти - выращивать",en:"grow - grew - grown"},{ru:"висеть",en:"hang - hung - hung"},{ru:"иметь - владеть",en:"have - had - had"},{ru:"слышать",en:"hear - heard - heard"},{ru:"прятать(ся)",en:"hide - hid - hidden"},{ru:"бить - попадать - нажимать",en:"hit - hit - hit"},{ru:"держать",en:"hold - held - held"},{ru:"ранить - болеть (о ране)",en:"hurt - hurt - hurt"},{ru:"держать - сохранять",en:"keep - kept - kept"},{ru:"знать",en:"know - knew - known"},{ru:"укладывать",en:"lay - laid - laid"},{ru:"руководить - приводить",en:"lead - led - led"},{ru:"перепрыгивать",en:"leap - leapt - leapt"},{ru:"учить - узнавать",en:"learn - learned (learnt) - learned (learnt)"},{ru:"покидать",en:"leave - left - left"},{ru:"одалживать (кому-то)",en:"lend - lent - lent"},{ru:"позволять",en:"let - let- let"},{ru:"лежать",en:"lie - lay - lain"},{ru:"освещать - зажигать",en:"light - lit - lit"},{ru:"терять",en:"lose - lost - lost"},{ru:"делать (напр ужин) - изготавливать",en:"make - made - made"},{ru:"значить",en:"mean - meant - meant"},{ru:"встречать(ся)",en:"meet - met - met"},{ru:"ошибаться - путать",en:"mistake - mistook - mistaken"},{ru:"платить",en:"pay - paid - paid"},{ru:"ставить - класть - помещать",en:"put - put - put"},{ru:"читать",en:"read - read - read"},{ru:"ездить верхом",en:"ride - rode - ridden"},{ru:"звонить - звенеть",en:"ring - rang - rung"},{ru:"возрастать",en:"rise - rose - risen"},{ru:"бегать",en:"run - ran - run"},{ru:"говорить - сказать",en:"say - said - said"},{ru:"видеть",en:"see - saw - seen"},{ru:"продавать",en:"sell - sold - sold"},{ru:"отправлять",en:"send - sent - sent"},{ru:"устанавливать - настраивать",en:"set - set - set"},{ru:"трясти",en:"shake - shook - shaken"},{ru:"сиять",en:"shine - shone - shone"},{ru:"стрелять - снимать",en:"shoot - shot - shot"},{ru:"показывать",en:"show - showed - shown"},{ru:"сокращаться - сжиматься",en:"shrink - shrank - shrunk"},{ru:"закрывать - запирать",en:"shut - shut - shut"},{ru:"петь",en:"sing - sang - sung"},{ru:"тонуть",en:"sink - sank - sunk"},{ru:"сидеть",en:"sit - sat - sat"},{ru:"спать",en:"sleep - slept - slept"},{ru:"скатываться - скользить",en:"slide - slid - slid"},{ru:"нюхать - пахнуть",en:"smell - smelled (smelt) - smelled (smelt)"},{ru:"говорить (напр на англ)",en:"speak - spoke - spoken"},{ru:"писАть по буквам - колдовать",en:"spell- spelt - spelt"},{ru:"тратить",en:"spend - spent - spent"},{ru:"проливать",en:"spill - spilled (spilt) - spilled (spilt)"},{ru:"разделять",en:"split - split - split"},{ru:"распространять(ся)",en:"spread - spread - spread"},{ru:"стоять",en:"stand - stood - stood"},{ru:"красть",en:"steal - stole - stolen"},{ru:"прилепать - застревать",en:"stick - stuck - stuck"},{ru:"жалить",en:"sting - stung - stung"},{ru:"плавать",en:"swim - swam - swum"},{ru:"брать",en:"take - took - taken"},{ru:"учить кого-то",en:"teach - taught - taught"},{ru:"разрывать - рвать",en:"tear - tore - torn"},{ru:"рассказывать - сообщать",en:"tell - told - told"},{ru:"думать",en:"think - thought - thought"},{ru:"кидать",en:"throw - threw - thrown"},{ru:"понимать",en:"understand - understood - understood"},{ru:"просыпаться",en:"wake - woke - woken"},{ru:"носить (напр одежду)",en:"wear - wore - worn"},{ru:"побеждать",en:"win - won - won"},{ru:"писАть",en:"write - wrote - written"}];

  var words = irregularVerbsForElementary;
  shuffle(words);
  words = words.slice(0, 45);

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

    // removeClass(translateButton, 'hide');
    removeClass(nextButton, 'hide');
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
      addClass(translateButton, 'hide');
      // addClass(nextButton, 'hide');
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
