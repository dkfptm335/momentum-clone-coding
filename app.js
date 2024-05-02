const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const userName = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click", onLoginBtnClick);