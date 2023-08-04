$(document).ready(function () {
  // the first eventListener for showing the popup container
  $('img').on('mouseenter', function () {
    $(this).css('border', '2px solid red');
    var largeImgSrc = $(this).data('src');
    $('#popup-img').attr('src', largeImgSrc);
    $('#popup-container').fadeIn(1);
  });

  // the second eventListener for getting the position of popup container
  $('img').on('mousemove', function (event) {
    // Get the mouse position
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    // Get the width and height of the popup container
    var popupWidth = $('#popup-container').outerWidth();
    var popupHeight = $('#popup-container').outerHeight();

    // Calculate the position of the popup container
    var popupTop = mouseY + 20;
    var popupLeft = mouseX + 20;

    // Check if the popup will go off the right side of the screen
    var screenWidth = $(window).width();
    if (popupLeft + popupWidth > screenWidth) {
      popupLeft = mouseX - popupWidth - 20; // Position it on the left side of the pointer
    }

    // Set the position of the popup container
    $('#popup-container').css({ top: popupTop + 'px', left: popupLeft + 'px' });
  });

  // hide the popup
  $('img').on('mouseleave', function () {
    $(this).css('border', '1px solid #ccc');
    $('#popup-container').fadeOut(0);
  });
});
const circle = { prop1: 'a' };
const square = { prop2: 'b' };

const peter = Object.assign({}, circle, square);
console.log(peter);
