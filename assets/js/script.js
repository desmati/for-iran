let html = E('html')[0];
let body = E('body')[0];
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform);



// Removing active class which is assigned on the middle bar
let sections = E('.bars__bar');
sections.forEach(function (elm) {
    elm.addEventListener('mouseover', function (e) {
        sections.forEach(function (elm) {
            elm.classList.remove('active');
        });
    });
});

// Video player for iOS/Other
let videoElements = E('.bars__bar--video');
videoElements.forEach(video => {
    var id = video.id;
    var canvasId = `for-${id}`;
    video.style.display = isIOS ? 'none' : 'block';

    if (isIOS) {
        video.insertAdjacentHTML('afterend', `<canvas id="${canvasId}" class="bars__bar--video-ios"></canvas>`);
        var canvas = E(`#${canvasId}`);
        canvas.style.display = isIOS ? 'block' : 'none';
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

