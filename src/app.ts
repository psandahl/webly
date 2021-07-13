import { getWindowSize } from './dom';
import { RenderEngine } from './render_engine';

let renderEngine: RenderEngine;

window.onload = () => {
    const [w, h] = getWindowSize();
    const msg = `Window loaded with size width: ${w} and height: ${h}`;

    const p = document.createElement('p');
    p.textContent = msg;
    document.body.appendChild(p);

    renderEngine = new RenderEngine();
    renderEngine.start();
}

window.onresize = () => {
    const [w, h] = getWindowSize();
    const msg = `Window resized with size width: ${w} and height: ${h}`;

    let p = document.getElementById('resizeinfo');
    if (p != null) {
        p.textContent = msg;
    } else {
        p = document.createElement('p');
        p.id = "resizeinfo";
        p.textContent = msg;
        document.body.appendChild(p);
    }    
}