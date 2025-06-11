var realWindow = window;
var borderSizeMultiplier = 0.5;
var zi = 9
function createWindow(window) {
    var top = document.createElement("img");
    top.src = "windowBorder/borderTop.png";
    window.appendChild(top);
    top.style.position = "absolute";
    top.style.left = (16 * borderSizeMultiplier).toString() + "px";
    top.style.height = (60 * borderSizeMultiplier).toString() + "px";
    top.style.width = `calc(100% - ${32 * borderSizeMultiplier}px)`;
    top.style.top = (-60 * borderSizeMultiplier).toString() + "px";
    var topLeft = document.createElement("img");
    topLeft.src = "windowBorder/borderTopLeft.png";
    window.appendChild(topLeft);
    topLeft.style.position = "absolute";
    topLeft.style.left = (-8 * borderSizeMultiplier).toString() + "px";
    topLeft.style.width = (30 * borderSizeMultiplier).toString() + "px";
    topLeft.style.top = (-60 * borderSizeMultiplier).toString() + "px";
    var topRight = document.createElement("img");
    topRight.src = "windowBorder/borderTopRight.png";
    window.appendChild(topRight);
    topRight.style.position = "absolute";
    topRight.style.right = (-8 * borderSizeMultiplier).toString() + "px";
    topRight.style.width = (30 * borderSizeMultiplier).toString() + "px";
    topRight.style.top = (-60 * borderSizeMultiplier).toString() + "px";
    var bottomLeft = document.createElement("img");
    bottomLeft.src = "windowBorder/borderBottomRight.png";
    window.appendChild(bottomLeft);
    bottomLeft.style.position = "absolute";
    bottomLeft.style.left = (-8 * borderSizeMultiplier).toString() + "px";
    bottomLeft.style.width = (8 * borderSizeMultiplier).toString() + "px";
    bottomLeft.style.bottom = (-8 * borderSizeMultiplier).toString() + "px";
    bottomLeft.classList.add("flipX");
    var bottomRight = document.createElement("img");
    bottomRight.src = "windowBorder/borderBottomRight.png";
    window.appendChild(bottomRight);
    bottomRight.style.position = "absolute";
    bottomRight.style.right = (-8 * borderSizeMultiplier).toString() + "px";
    bottomRight.style.width = (8 * borderSizeMultiplier).toString() + "px";
    bottomRight.style.bottom = (-8 * borderSizeMultiplier).toString() + "px";
    var bottom = document.createElement("img");
    bottom.src = "windowBorder/borderBottom.png";
    window.appendChild(bottom);
    bottom.style.position = "absolute";
    bottom.style.left = "-1px";
    bottom.style.height = (8 * borderSizeMultiplier).toString() + "px";
    bottom.style.width = "calc(100% + 2px)";
    bottom.style.bottom = (-8 * borderSizeMultiplier).toString() + "px";
    var left = document.createElement("img");
    left.src = "windowBorder/borderRight.png";
    window.appendChild(left);
    left.style.position = "absolute";
    left.style.top = "-1px";
    left.style.width = (8 * borderSizeMultiplier).toString() + "px";
    left.style.height = "calc(100% + 2px)";
    left.style.left = (-8 * borderSizeMultiplier).toString() + "px";
    left.classList.add("flipX");
    var right = document.createElement("img");
    right.src = "windowBorder/borderRight.png";
    window.appendChild(right);
    right.style.position = "absolute";
    right.style.top = "-1px";
    right.style.width = (8 * borderSizeMultiplier).toString() + "px";
    right.style.height = "calc(100% + 2px)";
    right.style.right = (-8 * borderSizeMultiplier).toString() + "px";
    var close = document.createElement("img");
    close.src = "windowBorder/close.png";
    window.appendChild(close);
    close.style.position = "absolute";
    close.style.top = (-48 * borderSizeMultiplier).toString() + "px";
    close.style.right = (4 * borderSizeMultiplier).toString() + "px";
    close.style.width = (40 * borderSizeMultiplier).toString() + "px";
    close.classList.add("closeButton");
    top.classList.add("topBar");
    var titleP = document.createElement("p")
    titleP.innerText = window.getAttribute("title");
    window.appendChild(titleP);
    titleP.style.zIndex = 2;
    titleP.style.position = "absolute";
    titleP.style.top = (-50 * borderSizeMultiplier).toString() + "px";
    titleP.style.left = (16 * borderSizeMultiplier).toString() + "px";
    titleP.style.color = "white";
    titleP.style.textShadow = `${4 * borderSizeMultiplier}px ${4 * borderSizeMultiplier}px ${4 * borderSizeMultiplier}px black`;
    if (window.getAttribute("image") != "") {
        var image = document.createElement("img");
        image.src = window.getAttribute("image");
        window.appendChild(image);
        image.style.position = "absolute";
        image.style.top = (-40 * borderSizeMultiplier).toString() + "px";
        image.style.left = (10 * borderSizeMultiplier).toString() + "px";
        image.style.width = (32 * borderSizeMultiplier).toString() + "px";
        titleP.style.left = (56 * borderSizeMultiplier).toString() + "px";
    }
    topLeft.setAttribute('draggable', false);
    topRight.setAttribute('draggable', false);
    bottomLeft.setAttribute('draggable', false);
    bottomRight.setAttribute('draggable', false);
    close.setAttribute('draggable', false);
    left.setAttribute('draggable', false);
    right.setAttribute('draggable', false);
    top.setAttribute('draggable', false);
    bottom.setAttribute('draggable', false);
    close.addEventListener("click", () => {
        window.remove();
    });
    var dragging = false;
    var startOffsetX = 0;
    var startOffsetY = 0;
    var clientX = 0;
    var clientY = 0;
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });
    function drag() {
        if (dragging == true) {
            window.style.top = (clientY - startOffsetY).toString() + "px";
            window.style.left = (clientX - startOffsetX).toString() + "px";
        }
        setTimeout(() => {
            drag();
        }, 1);
    }
    top.addEventListener("mousedown", e => {
        var l = window.style.left;
        l = l.substring(0, l.length - 2);
        var t = window.style.top;
        t = t.substring(0, t.length - 2);
        startOffsetX = e.clientX - l;
        startOffsetY = e.clientY - t;
        window.style.top = (e.clientY - startOffsetY).toString() + "px";
        window.style.left = (e.clientX - startOffsetX).toString() + "px";
        dragging = true;
        zi++;
        window.style.zIndex = (zi).toString();
    });
    document.addEventListener("mouseup", e => {
        dragging = false;
        var l = window.style.left;
        l = l.substring(0, l.length - 2);
        var t = window.style.top;
        t = t.substring(0, t.length - 2);
        if (l < 0) {
            window.style.left = "0px";
        }
        if (t < window.offsetHeight/2+56 * borderSizeMultiplier) {
            window.style.top = (window.offsetHeight/2+56 * borderSizeMultiplier).toString() + "px";
        }
        if (l > realWindow.innerWidth) {
            window.style.left = (realWindow.innerWidth).toString() + "px";
        }
        if (t > realWindow.innerHeight) {
            window.style.top = (realWindow.innerHeight).toString() + "px";
        }
    });
    drag();
}
document.querySelectorAll(".window").forEach(window => {
    createWindow(window);
});
function openWindow(id, iframeSrc, title, favicon) {
    var window = document.getElementById(id);
    window = window.cloneNode(true);
    window.style.display = "block";
    document.body.appendChild(window);
    window.classList.add("window");
    if (iframeSrc != null) {
        var iframe = document.createElement("iframe");
        iframe.src = iframeSrc;
        iframe.width = "100%";
        iframe.height = "100%";
        window.appendChild(iframe);
        iframe.addEventListener("click", () => {
            iframe.focus();
        });
    }
    if (favicon != null) {
        window.image = favicon
    }
    if (title != null) {
        window.title = title;
    }
    createWindow(window);
}
openWindow("imPugsby");