document.querySelector("#setCookie").addEventListener("click", (e) => {
  e.preventDefault();

  let cookies = document.cookie;

  const date = new Date();

  let today = date.getTime();
  // let expires = 2 * 24 * 60 * 60 * 1000;
  let expires = 30 * 1000;
  console.log(expires);
  // date.setTime
  date.setTime(today + expires);
  let new_date = date.toUTCString();

  document.cookie = `login=1; expires=${new_date}`;

  console.log(cookies);
});
