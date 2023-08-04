// array of image sources
const imageSources = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
];

// a function to create gallery that takes input as an array of image sources
function createGallery(images) {
  // select elements through jquery selectors
  const galleryContainer = $('#gallery-container');
  const displayedImage = $('#displayed-image');
  const prevButton = $('#prev-button');
  const nextButton = $('#next-button');
  const slider = $('.gallery-slider');
  const imageWidth = $('.gallery-image').outerWidth(true);

  let currentIndex = 0;

  function updateDisplayedImageWithAnimation(index) {
    const imageUrl = images[index];

    displayedImage.fadeOut(300, function () {
      displayedImage.attr('src', imageUrl).fadeIn(300);
    });

    slider.css('transform', `translateX(-${index * imageWidth}px)`);

    $('.gallery-image')
      .removeClass('displayed')
      .eq(index)
      .addClass('displayed');
  }

  function handleNextButtonClick() {
    currentIndex = (currentIndex + 1) % images.length;
    updateDisplayedImageWithAnimation(currentIndex);
  }

  function handlePrevButtonClick() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDisplayedImageWithAnimation(currentIndex);
  }

  nextButton.on('click', handleNextButtonClick);
  prevButton.on('click', handlePrevButtonClick);

  for (let i = 0; i < images.length; i++) {
    $('<img>')
      .addClass('gallery-image')
      .attr('src', images[i])
      .appendTo(galleryContainer)
      .on('click', function () {
        currentIndex = i;
        updateDisplayedImageWithAnimation(currentIndex);
      });
  }

  updateDisplayedImageWithAnimation(currentIndex);
}
// invoking the createGallery function when the document loaded
$(document).ready(function () {
  createGallery(imageSources);
});
