window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && (document.activeElement.classList.contains("preventScroll"))) {
        e.preventDefault();
    }
});


