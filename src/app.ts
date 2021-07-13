function onLoad() {
    const [w, h] = getWindowSize();
    const msg = `Window loaded with size width: ${w} and height: ${h}`;
    document.body.innerHTML = msg;
}

function onResize() {
    const [w, h] = getWindowSize();
    const msg = `Window resized with size width: ${w} and height: ${h}`;
    document.body.innerHTML = msg;
}

// Get tuple [width, height]
function getWindowSize(): [number, number] {
    return [window.innerWidth, window.innerHeight];
}

window.onload = onLoad;
window.onresize = onResize;