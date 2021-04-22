var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init () {
    var text = document.getElementById('text');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    resize();
}

fetch("/sidenav.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidenav").innerHTML = data;
});
fetch("/bottom.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("bottom").innerHTML = data;
});

document.getElementById("lastedited").innerHTML = document.lastModified;
