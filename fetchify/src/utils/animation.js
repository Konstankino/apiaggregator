import "../styles/HeaderAnimation.css";

document.addEventListener("DOMContentLoaded", () => {
  var mouseX, mouseY;
  var traX, traY;
  document.addEventListener("mousemove", e => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    const el = document.getElementsByClassName("title")[0];
    el.style.backgroundPosition = traX + "%" + traY + "%";
  });
});
