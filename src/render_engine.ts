import { createCanvasElement } from "./dom";

export class RenderEngine {

    private _gl: WebGL2RenderingContext;
    private _frame: number;
    
    public constructor() {
        const canvas = createCanvasElement([640, 480], "rendercanvas");
        this._gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
        if (this._gl === undefined) {
            throw new Error("Unable to create WebGL2");
        }

        document.body.appendChild(canvas);

        this._frame = 0;
    }

    public start() {
        this.loop();
    }

    private loop() {
        const intensity = this._frame++ % 255;

        this._gl.clearColor(intensity / 255.0, 0.0, 0.0, 1.0);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
        requestAnimationFrame(this.loop.bind(this));
    }
};