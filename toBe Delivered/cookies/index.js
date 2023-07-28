var form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const maleRadio = document.getElementById('male');
  const femaleRadio = document.getElementById('female');
  const gender = maleRadio.checked ? maleRadio.value : femaleRadio.value;
  const color = document.getElementById('color').value;

  const profileUrl = `./profile.html?name=${encodeURIComponent(
    name,
  )}&age=${encodeURIComponent(age)}&gender=${encodeURIComponent(
    gender,
  )}&color=${encodeURIComponent(color)}`;

  window.location.href = profileUrl;
});
