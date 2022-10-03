let html = document.getElementsByTagName('html')[0];
let body = document.getElementsByTagName('body')[0];
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

// Toggling how contrast mode
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

// Increasing font size
let buttonFontIncrease = document.getElementById('btn-font-increase');
buttonFontIncrease.addEventListener('click', function (e) {
    let computedFontSize = window.getComputedStyle(html).fontSize;
    let fontSize = parseInt(computedFontSize);
    let fontUnit = computedFontSize.replace(/[^a-z]/gi, '');
    let newFontSize = Math.floor(fontSize + Math.max(fontSize / 10, 1)) + fontUnit;
    html.style.fontSize = newFontSize;
});

// Decreasing font size
let buttonFontDecrease = document.getElementById('btn-font-decrease');
buttonFontDecrease.addEventListener('click', function (e) {
    let computedFontSize = window.getComputedStyle(html).fontSize;
    let fontSize = parseInt(computedFontSize);
    let fontUnit = computedFontSize.replace(/[^a-z]/gi, '');
    let newFontSize = Math.floor(fontSize - Math.max(fontSize / 10, 1)) + fontUnit;
    html.style.fontSize = newFontSize;
});

// Removing active class which is assigned on the middle bar
let sections = document.querySelectorAll('.section');
sections.forEach(function (elm) {
    elm.addEventListener('mouseover', function (e) {
        sections.forEach(function (elm) {
            elm.classList.remove('active');
        });
    });
});

// Video player for iOS/Other
let videoElements = document.querySelectorAll('video');
videoElements.forEach(video => {
    var id = video.id;
    var canvasId = `for-${id}`;
    var canvas = document.getElementById(canvasId);
    canvas.style.display = isIOS ? 'block' : 'none';
    video.style.display = isIOS ? 'none' : 'block';

    if (isIOS) {
        var canvasVideo = new CanvasVideoPlayer({
            videoSelector: `#${id}`,
            canvasSelector: `#${canvasId}`,
            timelineSelector: false,
            autoplay: true,
            makeLoop: true,
            pauseOnClick: false,
            audio: false
        });
    }
});
