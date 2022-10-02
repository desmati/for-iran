let html = document.getElementsByTagName('html')[0];
let body = document.getElementsByTagName('body')[0];
let buttonContrast = document.getElementById('btn-contrast');
buttonContrast.addEventListener('click', function (e) {
    if (body.classList.contains('hide-images')) {
        body.classList.remove("hide-images");
        buttonContrast.innerHTML = 'High Contrast';
    } else {
        body.classList.add("hide-images");
        buttonContrast.innerHTML = 'Normal';
    }
});

let buttonFontIncrease = document.getElementById('btn-font-increase');
buttonFontIncrease.addEventListener('click', function (e) {
    let computedFontSize = window.getComputedStyle(html).fontSize;
    let fontSize = parseInt(computedFontSize);
    let fontUnit = computedFontSize.replace(/[^a-z]/gi, '');
    let newFontSize = Math.floor(fontSize + Math.max(fontSize / 10, 1)) + fontUnit;
    html.style.fontSize = newFontSize;
});

let buttonFontDecrease = document.getElementById('btn-font-decrease');
buttonFontDecrease.addEventListener('click', function (e) {
    let computedFontSize = window.getComputedStyle(html).fontSize;
    let fontSize = parseInt(computedFontSize);
    let fontUnit = computedFontSize.replace(/[^a-z]/gi, '');
    let newFontSize = Math.floor(fontSize - Math.max(fontSize / 10, 1)) + fontUnit;
    html.style.fontSize = newFontSize;
});

let sections = document.querySelectorAll('.section');
sections.forEach(function (elm) {
    elm.addEventListener('mouseover', function (e) {
        sections.forEach(function (elm) {
            elm.classList.remove('active');
        });
    });
});




