document.addEventListener('DOMContentLoaded', function () {
  // Function to get URL parameters
  function getUrlParameter(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Function to get a cookie value
  function getCookieValue(name) {
    const nameEQ = name + '=';
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }

  // Function to set a cookie value
  function setCookieValue(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  // Get the URL parameters
  const name = getUrlParameter('name');
  const age = getUrlParameter('age');
  const gender = getUrlParameter('gender');
  const color = getUrlParameter('color');

  // Function to update the visit count on the page
  function updateVisitCountOnPage(visitCount) {
    const profileDataDiv = document.getElementById('profileData');
    const genderImg =
      gender === 'male'
        ? '<img src="./img/1.jpg" alt="male" />'
        : '<img src="./img/2.jpg" alt="female" />';
    profileDataDiv.innerHTML = `
      <div style="display: flex; align-items: center;">
        ${genderImg}
        <p>Welcome <span style="color: ${color}">${name}</span>, You have visited this site <span style="color: ${color}"> ${visitCount}</span> times.</p>
      </div>
    `;
  }

  // Get the visit count from the cookie or set it to 0 if the cookie doesn't exist
  let visitCount = getCookieValue('visitCount');
  if (!visitCount) {
    visitCount = 0;
  }

  // Increment the visit count and update the cookie
  visitCount++;
  setCookieValue('visitCount', visitCount, 365); // Set the cookie to expire in 1 year (365 days)

  // Display the form data and visit count on the page
  updateVisitCountOnPage(visitCount);
});
