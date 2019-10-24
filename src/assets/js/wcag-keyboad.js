window.addEventListener('keydown', function (e) {
  if (e.keyCode == 32 && (document.activeElement.classList.contains("button"))) {
    e.preventDefault();
  }
  if (e.keyCode == 32 && (document.activeElement.classList.contains("preventScroll"))) {
    return false;
  }
});
