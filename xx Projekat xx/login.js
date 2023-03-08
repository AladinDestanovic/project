document.getElementById("submit").addEventListener("click", function () {
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  let singUpData = {
    password: password,
    username: username,
  };

  fetch("https://js-course-server.onrender.com/user/signup", {
    method: "POST",
    body: JSON.stringify(singUpData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then( (response)=> {
      return response.json();
    })
    .then( ()=> {
      window.location.href = "pitanja.html";
    });
});
