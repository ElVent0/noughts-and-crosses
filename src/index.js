import './sass/index.css';

let counter = 1;
let counterGlobal = 1;
let victoriesCounterFirst = 0;
let victoriesCounterSecond = 0;

let ratingListFirst = {};

let ratingListSecond = {};

const queueEl = document.querySelector('.hero__queue');
const numberFirstEl = document.querySelector('.hero__number--one');
const numberSecondEl = document.querySelector('.hero__number--two');
const listEl = document.querySelector('.hero__list');
const buttonResetEl = document.querySelector('.hero__button--reset');
const buttonRatingEl = document.querySelector('.hero__button--rating');
const itemOneEl = document.querySelector('.hero__item--one');
const itemTwoEl = document.querySelector('.hero__item--two');
const itemThreeEl = document.querySelector('.hero__item--three');
const itemFourEl = document.querySelector('.hero__item--four');
const itemFiveEl = document.querySelector('.hero__item--five');
const itemSixEl = document.querySelector('.hero__item--six');
const itemSevenEl = document.querySelector('.hero__item--seven');
const itemEightEl = document.querySelector('.hero__item--eight');
const itemNineEl = document.querySelector('.hero__item--nine');

listEl.addEventListener('click', onPlay);

buttonRatingEl.addEventListener('click', () => {
  victoriesCounterFirst = 0;
  victoriesCounterSecond = 0;

  numberFirstEl.textContent = 0;
  numberSecondEl.textContent = 0;

  counterGlobal = 1;

  reset();
});

buttonResetEl.addEventListener('click', reset);

itemOneEl.addEventListener('click', onChangeResultOne);
itemTwoEl.addEventListener('click', onChangeResultTwo);
itemThreeEl.addEventListener('click', onChangeResultThree);
itemFourEl.addEventListener('click', onChangeResultFour);
itemFiveEl.addEventListener('click', onChangeResultFive);
itemSixEl.addEventListener('click', onChangeResultSix);
itemSevenEl.addEventListener('click', onChangeResultSeven);
itemEightEl.addEventListener('click', onChangeResultEight);
itemNineEl.addEventListener('click', onChangeResultNine);

function onPlay(e) {
  if (e.target.innerHTML === '') {
    if (counter % 2 === 0) {
      const markup = `<svg width="100" height="100" class="hero__svg">
          <use href="./images/symbol-defs.svg#icon-cross"></use>
        </svg>`;
      e.target.innerHTML = markup;
    } else {
      const markup = `<svg width="100" height="100" class="hero__svg">
          <use href="./images/symbol-defs.svg#icon-nought"></use>
        </svg>`;
      e.target.innerHTML = markup;
    }
    counter += 1;
  }
  if (
    [...Object.keys(ratingListFirst), ...Object.keys(ratingListSecond)]
      .length === 9
  ) {
    buttonResetEl.classList.add('hero__button--orange');
    queueEl.textContent = 'Упс, схоже, це нічия';
  }
}

function reset() {
  counter = 1;
  itemOneEl.innerHTML = ``;
  itemTwoEl.innerHTML = ``;
  itemThreeEl.innerHTML = ``;
  itemFourEl.innerHTML = ``;
  itemFiveEl.innerHTML = ``;
  itemSixEl.innerHTML = ``;
  itemSevenEl.innerHTML = ``;
  itemEightEl.innerHTML = ``;
  itemNineEl.innerHTML = ``;

  delete ratingListFirst.one;
  delete ratingListFirst.two;
  delete ratingListFirst.three;
  delete ratingListFirst.four;
  delete ratingListFirst.five;
  delete ratingListFirst.six;
  delete ratingListFirst.seven;
  delete ratingListFirst.eight;
  delete ratingListFirst.nine;

  delete ratingListSecond.one;
  delete ratingListSecond.two;
  delete ratingListSecond.three;
  delete ratingListSecond.four;
  delete ratingListSecond.five;
  delete ratingListSecond.six;
  delete ratingListSecond.seven;
  delete ratingListSecond.eight;
  delete ratingListSecond.nine;

  buttonResetEl.classList.remove('hero__button--orange');

  if (counterGlobal % 2 === 0) {
    queueEl.textContent = 'Зараз починає гравець 2';
    counter = 2;
  } else {
    queueEl.textContent = 'Зараз починає гравець 1';
    counter = 1;
  }
}

function resetAfterVictory() {
  delete ratingListFirst.one;
  delete ratingListFirst.two;
  delete ratingListFirst.three;
  delete ratingListFirst.four;
  delete ratingListFirst.five;
  delete ratingListFirst.six;
  delete ratingListFirst.seven;
  delete ratingListFirst.eight;
  delete ratingListFirst.nine;

  delete ratingListSecond.one;
  delete ratingListSecond.two;
  delete ratingListSecond.three;
  delete ratingListSecond.four;
  delete ratingListSecond.five;
  delete ratingListSecond.six;
  delete ratingListSecond.seven;
  delete ratingListSecond.eight;
  delete ratingListSecond.nine;

  counterGlobal += 1;

  buttonResetEl.classList.add('hero__button--orange');
}

function onChangeResultOne() {
  if (counter % 2 === 0) {
    ratingListSecond.one = true;
  } else {
    ratingListFirst.one = true;
  }
  onCheckResult();
}

function onChangeResultTwo() {
  if (counter % 2 === 0) {
    ratingListSecond.two = true;
  } else {
    ratingListFirst.two = true;
  }
  onCheckResult();
}
function onChangeResultThree() {
  if (counter % 2 === 0) {
    ratingListSecond.three = true;
  } else {
    ratingListFirst.three = true;
  }
  onCheckResult();
}
function onChangeResultFour() {
  if (counter % 2 === 0) {
    ratingListSecond.four = true;
  } else {
    ratingListFirst.four = true;
  }
  onCheckResult();
}
function onChangeResultFive() {
  if (counter % 2 === 0) {
    ratingListSecond.five = true;
  } else {
    ratingListFirst.five = true;
  }
  onCheckResult();
}
function onChangeResultSix() {
  if (counter % 2 === 0) {
    ratingListSecond.six = true;
  } else {
    ratingListFirst.six = true;
  }
  onCheckResult();
}
function onChangeResultSeven() {
  if (counter % 2 === 0) {
    ratingListSecond.seven = true;
  } else {
    ratingListFirst.seven = true;
  }
  onCheckResult();
}
function onChangeResultEight() {
  if (counter % 2 === 0) {
    ratingListSecond.eight = true;
  } else {
    ratingListFirst.eight = true;
  }
  onCheckResult();
}
function onChangeResultNine() {
  if (counter % 2 === 0) {
    ratingListSecond.nine = true;
  } else {
    ratingListFirst.nine = true;
  }
  onCheckResult();
}

function onCheckResult() {
  console.log([...Object.keys(ratingListFirst)]);
  if (
    conditionOne1() ||
    conditionOne2() ||
    conditionOne3() ||
    conditionOne4() ||
    conditionOne5() ||
    conditionOne6() ||
    conditionOne7() ||
    conditionOne8()
  ) {
    victoriesCounterFirst += 1;
    numberFirstEl.textContent = victoriesCounterFirst;
    onVictoryAlertFirst();
    resetAfterVictory();
  } else if (
    conditionTwo1() ||
    conditionTwo2() ||
    conditionTwo3() ||
    conditionTwo4() ||
    conditionTwo5() ||
    conditionTwo6() ||
    conditionTwo7() ||
    conditionTwo8()
  ) {
    victoriesCounterSecond += 1;
    numberSecondEl.textContent = victoriesCounterSecond;
    onVictoryAlertSecond();
    resetAfterVictory();
  }
}

function onVictoryAlertFirst() {
  queueEl.textContent = 'Переміг гравець 1';
}

function onVictoryAlertSecond() {
  queueEl.textContent = 'Переміг гравець 2';
}

const conditionOne1 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('one') &&
    [...Object.keys(ratingListFirst)].includes('two') &&
    [...Object.keys(ratingListFirst)].includes('three')
  );
};
const conditionTwo1 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('one') &&
    [...Object.keys(ratingListSecond)].includes('two') &&
    [...Object.keys(ratingListSecond)].includes('three')
  );
};

const conditionOne2 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('four') &&
    [...Object.keys(ratingListFirst)].includes('five') &&
    [...Object.keys(ratingListFirst)].includes('six')
  );
};
const conditionTwo2 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('four') &&
    [...Object.keys(ratingListSecond)].includes('five') &&
    [...Object.keys(ratingListSecond)].includes('six')
  );
};
const conditionOne3 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('seven') &&
    [...Object.keys(ratingListFirst)].includes('eight') &&
    [...Object.keys(ratingListFirst)].includes('nine')
  );
};
const conditionTwo3 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('seven') &&
    [...Object.keys(ratingListSecond)].includes('eight') &&
    [...Object.keys(ratingListSecond)].includes('nine')
  );
};
const conditionOne4 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('one') &&
    [...Object.keys(ratingListFirst)].includes('four') &&
    [...Object.keys(ratingListFirst)].includes('seven')
  );
};
const conditionTwo4 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('one') &&
    [...Object.keys(ratingListSecond)].includes('four') &&
    [...Object.keys(ratingListSecond)].includes('seven')
  );
};
const conditionOne5 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('two') &&
    [...Object.keys(ratingListFirst)].includes('five') &&
    [...Object.keys(ratingListFirst)].includes('eight')
  );
};
const conditionTwo5 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('two') &&
    [...Object.keys(ratingListSecond)].includes('five') &&
    [...Object.keys(ratingListSecond)].includes('eight')
  );
};
const conditionOne6 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('three') &&
    [...Object.keys(ratingListFirst)].includes('six') &&
    [...Object.keys(ratingListFirst)].includes('nine')
  );
};
const conditionTwo6 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('three') &&
    [...Object.keys(ratingListSecond)].includes('six') &&
    [...Object.keys(ratingListSecond)].includes('nine')
  );
};
const conditionOne7 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('one') &&
    [...Object.keys(ratingListFirst)].includes('five') &&
    [...Object.keys(ratingListFirst)].includes('nine')
  );
};
const conditionTwo7 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('one') &&
    [...Object.keys(ratingListSecond)].includes('five') &&
    [...Object.keys(ratingListSecond)].includes('nine')
  );
};
const conditionOne8 = () => {
  return (
    [...Object.keys(ratingListFirst)].includes('three') &&
    [...Object.keys(ratingListFirst)].includes('five') &&
    [...Object.keys(ratingListFirst)].includes('seven')
  );
};
const conditionTwo8 = () => {
  return (
    [...Object.keys(ratingListSecond)].includes('three') &&
    [...Object.keys(ratingListSecond)].includes('five') &&
    [...Object.keys(ratingListSecond)].includes('seven')
  );
};
