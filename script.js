var phone = localStorage.getItem("phoneShow").toLowerCase();
if (phone === "no") {
  document.getElementById("phoneL").innerHTML = "Cann't Show Phone";
} else {
  document.getElementById("phoneL").innerHTML = localStorage.getItem("phone");
}
document.getElementById("nameL").innerHTML = localStorage.getItem("name");
document.getElementById("description").innerHTML =
  localStorage.getItem("description");
document.getElementById("description2").innerHTML =
  localStorage.getItem("description");
document.getElementById("main").src = localStorage.getItem("image");
document.getElementById("price").innerHTML = localStorage.getItem("price");
document.getElementById("location").innerHTML =
  localStorage.getItem("location");
document.getElementById("productName").innerHTML =
  localStorage.getItem("productName");

function showData() {
  var data = JSON.parse(localStorage.getItem("users"));
  var email = localStorage.getItem("email");
  var isAuthenticated = localStorage.getItem("isAuthenticated");
  for (let i = 0; i < data.length; i++) {
    if (email == data[i].email && isAuthenticated === "true") {
      document.getElementById("login__sell").innerHTML = `
       <img class="avatar" onclick="profilePage()" width="60px"src="./images/avatar.png" />
                 <button onclick="sell()" class="sell__btn">+ Sell</button>
                `;
    }
  }
}

function sell() {
  var data = JSON.parse(localStorage.getItem("users"));
  var email = localStorage.getItem("email");
  var isAuthenticated = localStorage.getItem("isAuthenticated");
  var flage = true;
  for (let i = 0; i < data.length; i++) {
    if (email == data[i].email && isAuthenticated === "true") {
      flage = false;
      window.location.href = "./sell.html";
    }
  }
  if (flage === true) {
    document.getElementById("login").classList.remove("hidden");
  }
}

function profilePage() {
  window.location.href = "./profile.html";
}
showData();

function openLogin() {
  document.getElementById("login").classList.remove("hidden");
}

function closeLogin() {
  document.getElementById("login").classList.add("hidden");
}

function emailLogin() {
  document.getElementById("email").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

function closeEmail() {
  document.getElementById("email").classList.add("hidden");
}

function backEmail() {
  document.getElementById("email").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function phoneLogin() {
  document.getElementById("phone").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

function closePhone() {
  document.getElementById("phone").classList.add("hidden");
}

function backPhone() {
  document.getElementById("phone").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function createAccountPage() {
  document.getElementById("signUp").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

function closeSignUp() {
  document.getElementById("signUp").classList.add("hidden");
}

function backSignUp() {
  document.getElementById("signUp").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function signUp() {
  let data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  let flage = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === document.getElementById("signEmail").value) {
      flage = true;
      alert("You have entered a duplicate email address");
    }
  }
  if (flage === false) {
    let users = [];
    let obj = {
      name: document.getElementById("name").value,
      email: document.getElementById("signEmail").value,
      gender: document.getElementById("gender").value,
      phone: document.getElementById("signphone").value,
      isAuthenticated: true,
    };
    users = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("signUp").classList.add("hidden");
    document.getElementById("email").classList.remove("hidden");
  }
}

function login() {
  let email = document.getElementById("emailLogin").value;
  let users = JSON.parse(localStorage.getItem("users"));
  var flage = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      flage = true;
      alert("You have successfully Login");
      localStorage.setItem("name", users[i].name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", users[i].phone);
      localStorage.setItem("isAuthenticated", users[i].isAuthenticated);
      window.location.reload();
    }
  }
  if (flage == false) {
    alert("Please enter a valid email and password");
  }
}