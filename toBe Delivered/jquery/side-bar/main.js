$(document).ready(function () {
  const sideBarContainer = $('#side-bar-container');
  const tail = $('#tail');
  const menuContainers = $('.menu');

  tail.on('mouseenter', function () {
    setTimeout(function () {
      tail.css('display', 'none');
    }, 500);
    sideBarContainer.css('left', '0');
  });

  sideBarContainer.on('mouseleave', function () {
    setTimeout(function () {
      tail.css('display', 'flex');
    }, 100);
    sideBarContainer.css('left', '-300px');
    menuContainers.find('.menu-list').hide();
  });

  menuContainers.on('click', function () {
    const clickedMenu = $(this);
    const clickedList = clickedMenu.find('.menu-list');
    const isOpen = clickedList.is(':visible'); // Check if the list is currently visible

    if (isOpen) {
      // If the list is already open, animate its height to 0 to hide it
      clickedList.animate({ height: '0' }, 300, function () {
        // After the animation is complete, hide the list completely
        clickedList.hide();
      });
    } else {
      // If the list is hidden, show it and animate its height to its scroll height to display it
      clickedList.show().animate({ height: clickedList[0].scrollHeight }, 300);

      // Hide other lists (if any) by setting their height to 0
      menuContainers
        .not(clickedMenu)
        .find('.menu-list')
        .hide()
        .css('height', '0');
    }
  });
});
