const body = document.querySelector("body");
const switchButton = document.querySelector("#switch #switch-button");
const switchButtonIcon = document.querySelector("#switch #switch-button #icon");

const toggleMode = () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    switchButtonIcon.setAttribute("name", "sunny-outline");
  } else {
    switchButtonIcon.setAttribute("name", "moon-outline");
  }
};

switchButton.addEventListener("click", toggleMode);
