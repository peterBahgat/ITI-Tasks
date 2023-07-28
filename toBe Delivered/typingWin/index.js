const btn = document.getElementById('start');
var openedWindow = null;

btn.addEventListener('click', function (e) {
  e.preventDefault();
  const width = 800;
  const height = 600;
  const left = (window.screen.width - width) / 3;
  const top = (window.screen.height - height) / 3;
  openedWindow = window.open(
    './about.html',
    '_blank',
    `width=${width}, height=${height}, left=${left}, top=${top}`,
  );
});
