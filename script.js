let outputElement = document.querySelector('.printer');

function printWithDelays(messages, callback) {
  let totalDelay = 0;

  messages.forEach((messageWithDelay, messageIndex) => {
    const lastSpaceIndex = messageWithDelay.lastIndexOf(' ');
    let message = messageWithDelay.substring(0, lastSpaceIndex).replace(/\(line break\)/g, '<br>');
    const delay = parseInt(messageWithDelay.substring(lastSpaceIndex + 1), 10);

    let currentDelay = totalDelay;
    let i = 0;
    while (i < message.length) {
      if (message.substring(i, i + 4) === '<br>') {
        setTimeout(() => {
          outputElement.innerHTML += '<br>';
        }, currentDelay);
        currentDelay += delay;
        i += 4;
      } else {
        setTimeout((ch) => {
          outputElement.innerHTML += ch;
        }, currentDelay, message[i]);
        currentDelay += delay;
        i++;
      }
    }

    totalDelay = currentDelay;

    setTimeout(() => {
      outputElement.innerHTML += '<br>';
      if (messageIndex === messages.length - 1) {
        setTimeout(() => {
          removeWithDelays(outputElement.innerHTML, () => {
            outputElement.style.display = 'none';
            setTimeout(() => {
              outputElement.style.display = 'block';
              outputElement.innerHTML = '';
              callback();
            }, 500);
          }, messages.length);
        }, 5000); 
      }
    }, totalDelay);
  });
}

function removeWithDelays(text, callback, messageLength) {
  const delay = 50;
  let totalDelay = 0;

  for (let i = text.length - 1; i >= 0; i--) {
    setTimeout(() => {
      outputElement.innerHTML = text.substring(0, i);
    }, totalDelay);
    totalDelay += delay;
  }

  setTimeout(() => {
    if (messageLength > 0) {
      
      callback();
    } else {
      callback();
    }
  }, totalDelay);
}

function swapWordsAndPrint() {
  let wordsToSwap = ["GitHub. https://github.com/nemuel124", "Facebook. https://www.facebook.com/nemuel124/"];
  let currentSwapIndex = 0;
  let swapCount = 0;

  function swapAndPrint() {
    let message = "You can visit me on " + wordsToSwap[currentSwapIndex] + " 100";
    printWithDelays([message], () => {
      setTimeout(() => {
        currentSwapIndex = (currentSwapIndex + 1) % wordsToSwap.length;
        swapCount++;
        if (swapCount < wordsToSwap.length) {
          swapAndPrint();
        } else {
          swapCount = 0;
          currentSwapIndex = 0;
          startPrinting();
        }
      }, 350);
    });
  }

  swapAndPrint();
}

const messages = [
  "Hi, 100",
  "I'm Nemuel 100",
  "An IT Student WEB DEVELOPER. 100"
];

function startPrinting() {
  printWithDelays(messages, () => {
    setTimeout(swapWordsAndPrint, 350);
  });
}

startPrinting();


let lastScrollTop = 50;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px';
  } else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});

let ScrollPost = 160;
const firstSkill = document.querySelector('.firstSkill');
const secondSkill = document.querySelector('.secondSkill');
const thirdSkill = document.querySelector('.thirdSkill');

const firstlad = document.querySelector('.container li:nth-child(1)');
const secondlad = document.querySelector('.container li:nth-child(2)');
const thirdlad = document.querySelector('.container li:nth-child(3)');
const fourthlad = document.querySelector('.container li:nth-child(4)');

function handleScroll() {
let scrollDown = window.pageYOffset;
let toright = 'toRight 1s 1';
let toleft = 'toLeft 1s 1';
let totop = 'toTop 1s 1';

let torightlad1 = 'toRightladder 700ms 1';
let torightlad2 = 'toRightladder 1.3s 1';
let toleftlad1 = 'toLeftladder 1s 1';
let toleftlad2 = 'toLeftladder 2s 1';






  if (scrollDown >= ScrollPost) {
    firstSkill.style.animation = toright;
    firstSkill.style.opacity = '1';
    secondSkill.style.animation = totop;
    secondSkill.style.opacity = '1';
    thirdSkill.style.animation = toleft;
    thirdSkill.style.opacity = '1';

  } else {
    firstSkill.style.animation = 'none';
    firstSkill.style.opacity = '0';
    secondSkill.style.animation = 'none';
    secondSkill.style.opacity = '0';
    thirdSkill.style.animation = 'none';
    thirdSkill.style.opacity = '0';
  }

  if(scrollDown > 1350){
    firstSkill.style.animation = 'none';
    firstSkill.style.opacity = '0';
    secondSkill.style.animation = 'none';
    secondSkill.style.opacity = '0';
    thirdSkill.style.animation = 'none';
    thirdSkill.style.opacity = '0';
  }

  if(scrollDown >= 1350){
    firstlad.style.animation = torightlad1;
    firstlad.style.opacity = '1';
    secondlad.style.animation = toleftlad1;
    secondlad.style.opacity = '1';
    thirdlad.style.animation = torightlad2;
    thirdlad.style.opacity = '1';
    fourthlad.style.animation = toleftlad2;
    fourthlad.style.opacity = '1';
  } else {
    firstlad.style.animation = 'none';
    firstlad.style.opacity = '0';
    secondlad.style.animation = 'none';
    secondlad.style.opacity = '0';
    thirdlad.style.animation = 'none';
    thirdlad.style.opacity = '0';
    fourthlad.style.animation = 'none';
    fourthlad.style.opacity = '0';
  }

   if(scrollDown >= 2560){
    firstlad.style.animation = 'none';
    firstlad.style.opacity = '0';
    secondlad.style.animation = 'none';
    secondlad.style.opacity = '0';
    thirdlad.style.animation = 'none';
    thirdlad.style.opacity = '0';
    fourthlad.style.animation = 'none';
    fourthlad.style.opacity = '0';
  }

  console.log(scrollDown);
}

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

window.addEventListener('scroll', debounce(handleScroll, 10));


