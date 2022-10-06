function E(selector) {
    switch (selector[0]) {
        case '#': return document.getElementById(selector.substring(1));
        default: return document.querySelectorAll(selector);
    }
}