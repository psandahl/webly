import { createCanvasElement, getWindowSize } from "./dom";
import { compileShaderProgram } from "./compiler";

export class RenderEngine {

    private _canvas: HTMLCanvasElement;
    private _gl: WebGL2RenderingContext;
    private _program0: WebGLProgram;
    
    /**
     * Create a RenderEngine.
     */
    public constructor() {
        this._canvas = createCanvasElement("rendercanvas");
        this.resize();
        this._gl = this._canvas.getContext("webgl2") as WebGL2RenderingContext;
        if (this._gl === undefined) {
            throw new Error("Unable to create WebGL2");
        }

        const [succ, program] = compileShaderProgram(this._gl, this._vs0, this._fs0);
        if (!succ) {
            throw new Error("Failed to compile shader program");
        }

        this._program0 = program;

        document.body.appendChild(this._canvas);        
    }

    /**
     * Start the engine.
     */
    public start() {        

        this._gl.clearColor(0.0, 0.0, 0.0, 1.0);

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
        
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
        this._gl.useProgram(this._program0);
        
        requestAnimationFrame(this.loop.bind(this));
    }

    private _vs0 = 
    `#version 300 es

in vec3 a_position;

void main() {
    gl_Position = vec4(a_position, 1);
}
`;

    private _fs0 =
    `#version 300 es

precision highp float;
    
out vec4 color;

void main() {
    color = vec4(1, 0, 0.5, 1);
}
`;
};