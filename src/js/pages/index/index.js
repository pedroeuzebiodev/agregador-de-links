const body = document.querySelector("body");
const switchButton = document.querySelector("#switch #switch-button");
const switchButtonIcon = document.querySelector(
  "#switch #switch-button #switch-button-icon"
);
const img = document.querySelector("header img");

const toggleMode = () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    switchButtonIcon.setAttribute("name", "sunny-outline");

    img.setAttribute("src", "./src/images/pages/index/logo-light.png");
  } else {
    switchButtonIcon.setAttribute("name", "moon-outline");

    img.setAttribute("src", "./src/images/pages/index/logo.png");
  }
};

switchButton.addEventListener("click", toggleMode);
