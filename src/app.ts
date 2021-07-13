import { getWindowSize } from './dom';

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

window.onload = onLoad;
window.onresize = onResize;