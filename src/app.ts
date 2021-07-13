import { getWindowSize } from './dom';

window.onload = () => {
    const [w, h] = getWindowSize();
    const msg = `Window loaded with size width: ${w} and height: ${h}`;

    const p = document.createElement('p');
    p.textContent = msg;
    document.body.appendChild(p);    
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