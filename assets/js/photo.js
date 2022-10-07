var photos = E("figure img");
photos.forEach(img => {
    var src = img.getAttribute('src');
    var alt = img.getAttribute('alt') + "";
    console.log(img);
    img.addEventListener('click', function () {
        if (src && alt) {
            var html = `
                <div class="dialog" id="dialog">
                <button id="close">X</button>
                    <img src="${src}" alt="${alt}" />
                    <p>${alt}</p>
                </div>
            `;
            document.getElementsByTagName('footer')[0].insertAdjacentHTML('afterend', html);
            var close = E('#close');
            close.addEventListener('click', function () {
                E('#dialog').remove();
            });
        }
    }.bind(this));
});