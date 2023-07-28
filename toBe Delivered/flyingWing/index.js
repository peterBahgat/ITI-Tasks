let flyingWindow;
let intervalId;

function openFlyingWindow() {
  flyingWindow = window.open('', '_blank', 'width=100, height=75');
  let x = 0;
  let y = 0;
  let velocityX = 5;
  let velocityY = 5;
  function moveWindow() {
    x = flyingWindow.screenX;
    y = flyingWindow.screenY;
    flyingWindow.moveTo(x + velocityX, y + velocityY);
  }
  intervalId = setInterval(moveWindow, 50);
  flyingWindow.addEventListener('beforeunload', function () {
    flyingWindow.moveTo(x - velocityX, y - velocityY);
    clearInterval(intervalId);
  });
}

const openButton = document.getElementById('openButton');
openButton.addEventListener('click', openFlyingWindow);
