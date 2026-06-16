const btn = document.querySelector('button');
const container = document.querySelector('.container');

const timer = document.querySelector('.timer');
const time = document.querySelector('.time');

const scorer = document.querySelector('.scorer');
const score = document.querySelector('.score');

const overlay = document.querySelector('.overlay');

const box = document.createElement('div');
box.classList.add('box');

let t = 0;
let s = 0;

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const shuffle = () => {
    clicked = false;
    
    box.style.display = 'block';
    container.append(box);
    box.style.backgroundColor = generateRandomColor();

    t++;
    time.textContent = t;

    const maxH = container.clientHeight - box.offsetHeight;
    const maxW = container.clientWidth - box.offsetWidth;

    const mX = Math.random() * maxW;
    const mY = Math.random() * maxH;

    box.style.left = `${mX}px`;
    box.style.top = `${mY}px`;
}

let interval;
let gameTimeout;
let resetTimeout;

btn.addEventListener('click', () => {
    btn.disabled = true;

    clearInterval(interval);
    clearTimeout(gameTimeout);
    clearTimeout(resetTimeout);

    t = 0;
    s = 0;

    time.textContent = t;
    score.textContent = s;

    overlay.style.display = 'none';

    interval = setInterval(shuffle, 1000);

    gameTimeout = setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = 'flex';

        resetTimeout = setTimeout(() => {
            box.style.display = 'none';
            overlay.style.display = 'none';

            t = 0;
            s = 0;

            time.textContent = t;
            score.textContent = s;

            btn.disabled = false;
        }, 3000);

    }, 11000);
});

let clicked = false;

box.addEventListener('click', () => {
    if(clicked) return;
    clicked = true;
    s++;
    score.textContent = s;
})