import { getWindowSize } from './dom';

window.onload = () => {
    const [w, h] = getWindowSize();
    const msg = `Window loaded with size width: ${w} and height: ${h}`;
    document.body.innerHTML = msg;
}

window.onresize = () => {
    const [w, h] = getWindowSize();
    const msg = `Window resized with size width: ${w} and height: ${h}`;
    document.body.innerHTML = msg;
}