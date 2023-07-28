const marbles = document.querySelectorAll('.marble');
const container = document.getElementById('container');
let intervalId = null;
let index = 0;

function addActiveClassWithDelay(marble) {
  marble.classList.add('active');
  setTimeout(() => {
    marble.classList.remove('active');
  }, 1000);
}

function animateMarbles() {
  if (index < marbles.length) {
    addActiveClassWithDelay(marbles[index]);
    index++;
  } else {
    index = 0;
  }
}

function startAnimation() {
  if (!intervalId) {
    intervalId = setInterval(animateMarbles, 1000);
  }
}

function stopAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    index = 0;
    marbles.forEach((marble) => {
      marble.classList.remove('active');
    });
  }
}

container.addEventListener('mouseenter', startAnimation);
container.addEventListener('mouseleave', stopAnimation);
