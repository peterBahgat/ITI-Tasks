let buttonsContainer = document.getElementById('buttons');
let postsContainer = document.getElementById('posts-container');

async function getPosts(userId) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    let posts = await response.json();
    postsContainer.innerHTML = '';
    let fetchedPosts = posts.map((post) => {
      let postData = `<div class="posts-container active"><h1>${post.title}</h1><p>${post.body}</p></div>`;
      postsContainer.innerHTML += postData;
    });
  } catch (error) {
    console.log(error);
  }
}

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      let userButtons = users.map(
        (user) =>
          `<button onclick="getPosts(${user.id})">${user.name}</button>`,
      );
      userButtons.forEach((button) => {
        buttonsContainer.innerHTML += button;
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

getUsers();
