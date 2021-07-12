function onLoad() {
    console.log("Window is loaded. Size: ", getWindowSize());
}

function onResize() {
    console.log("Window is resized. Size: ", getWindowSize());
}

// Get tuple [width, height]
function getWindowSize(): [number, number] {
    return [window.innerWidth, window.innerHeight];
}

window.onload = onLoad;
window.onresize = onResize;