export class RenderEngine {
    private _frame = 0;

    public constructor() {
        console.log("RenderEngine created");
    }

    public start() {
        // Initialize stuff.
        this.loop();
    }

    private loop() {
        requestAnimationFrame(this.loop.bind(this));
        ++this._frame;

        const msg = `Frame counter is ${this._frame}`;
        let p = document.getElementById('framecount');
        if (p != null) {
            p.textContent = msg;
        } else {
            p = document.createElement('p');
            p.id = "framecount";
            p.textContent = msg;
            document.body.appendChild(p);
        }
    }
};