document.getElementById("popupBox").animate(
  [
    // keyframes
    { transform: "translateY(1000px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
  }
);
function openPopup() {
  element = document.getElementById("popupBox");
  element.style.visibility = "visible";
}

window.onload = function () {
  setTimeout(openPopup, 5000);
};
