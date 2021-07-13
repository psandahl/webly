import { getWindowSize } from './dom';
import { RenderEngine } from './render_engine';

let renderEngine: RenderEngine;

window.onload = () => {
    const [w, h] = getWindowSize();
    const msg = `Window loaded with size width: ${w} and height: ${h}`;

    console.log(msg);

    renderEngine = new RenderEngine();
    renderEngine.start();
}

window.onresize = () => {
    const [w, h] = getWindowSize();
    const msg = `Window resized with size width: ${w} and height: ${h}`;

    console.log(msg);

    renderEngine.resize();
}