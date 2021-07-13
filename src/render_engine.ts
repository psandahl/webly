import { createCanvasElement, getWindowSize } from "./dom";

export class RenderEngine {

    private _canvas: HTMLCanvasElement;
    private _gl: WebGL2RenderingContext;
    private _frame: number;
    
    /**
     * Create a RenderEngine.
     */
    public constructor() {
        this._canvas = createCanvasElement("rendercanvas");
        this._gl = this._canvas.getContext("webgl2") as WebGL2RenderingContext;
        if (this._gl === undefined) {
            throw new Error("Unable to create WebGL2");
        }

        document.body.appendChild(this._canvas);

        this._frame = 0;
    }

    /**
     * Start the engine.
     */
    public start() {
        this.loop();
    }

    /**
     * Act on a window resize.
     */
    public resize() {
        if (this._canvas !== undefined) {
            console.log("Catch resize event");
            const [width, height] = getWindowSize();
            this._canvas.width = width;
            this._canvas.height = height;
        }
    }

    private loop() {
        const intensity = this._frame++ % 255;

        this._gl.clearColor(intensity / 255.0, 0.0, 0.0, 1.0);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
        requestAnimationFrame(this.loop.bind(this));
    }
};