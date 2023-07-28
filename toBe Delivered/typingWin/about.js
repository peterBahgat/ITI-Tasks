const textToDisplay = 'Hello MEARN track letter by letter';
let index = 0;

function showTextLetterByLetter() {
  const textContainer = document.getElementById('text-container');
  if (index < textToDisplay.length) {
    textContainer.append(textToDisplay.charAt(index));
    index++;
    setTimeout(showTextLetterByLetter, 100);
    setTimeout(function () {
      window.close();
    }, 5000);
  }
}

showTextLetterByLetter();
