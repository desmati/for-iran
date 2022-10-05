// Toggling how contrast mode
let buttonContrast = document.getElementById('a11y__contrast--toggle');
buttonContrast.addEventListener('click', function (e) {
    // body.classList.toggle("hide-images");
    if (body.classList.contains('hide-images')) {
        body.classList.remove("hide-images");
        buttonContrast.innerHTML = 'High Contrast';
    } else {
        body.classList.add("hide-images");
        buttonContrast.innerHTML = 'Normal';
    }
});

// Increasing font size
let buttonFontIncrease = document.getElementById('a11y__font--increase');
buttonFontIncrease.addEventListener('click', function (e) {
    let computedFontSize = window.getComputedStyle(html).fontSize;
    let fontSize = parseInt(computedFontSize);
    let fontUnit = computedFontSize.replace(/[^a-z]/gi, '');
    let newFontSize = Math.floor(fontSize + Math.max(fontSize / 10, 1)) + fontUnit;
    html.style.fontSize = newFontSize;
});

// Decreasing font size
let buttonFontDecrease = document.getElementById('a11y__font--decrease');
buttonFontDecrease.addEventListener('click', function (e) {
    let computedFontSize = window.getComputedStyle(html).fontSize;
    let fontSize = parseInt(computedFontSize);
    let fontUnit = computedFontSize.replace(/[^a-z]/gi, '');
    let newFontSize = Math.floor(fontSize - Math.max(fontSize / 10, 1)) + fontUnit;
    html.style.fontSize = newFontSize;
});