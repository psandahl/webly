import { createCanvasElement, getWindowSize } from "./dom";
import { compileShaderProgram } from "./compiler";

export class RenderEngine {

    private _canvas: HTMLCanvasElement;
    private _gl: WebGL2RenderingContext;
    private _program0: WebGLProgram = null!;
    
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

        document.body.appendChild(this._canvas);        
    }

    /**
     * Start the engine.
     */
    public start() {

        // Compile program.
        const [succ, program] = compileShaderProgram(this._gl, this._vs0, this._fs0);
        if (!succ) {
            throw new Error("Failed to compile shader program");
        }
        
        this._program0 = program;

        // Create and populate position buffer.
        this._posBuf0 = this._gl.createBuffer()!;
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._posBuf0);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(this._pos0), this._gl.STATIC_DRAW);

        // Setup vao.
        const positionAttributeLocation = this._gl.getAttribLocation(this._program0, "a_position");
        this._vao0 = this._gl.createVertexArray()!;
        this._gl.bindVertexArray(this._vao0);
        this._gl.enableVertexAttribArray(positionAttributeLocation);
        this._gl.vertexAttribPointer(positionAttributeLocation, 2, this._gl.FLOAT, false, 0, 0);

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
        
        const [width, height] = getWindowSize();

        this._gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this._gl.viewport(0, 0, width, height);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);

        this._gl.useProgram(this._program0);
        this._gl.bindVertexArray(this._vao0);
        this._gl.drawArrays(this._gl.TRIANGLES, 0, 3);

        requestAnimationFrame(this.loop.bind(this));
    }

    private _pos0 = [
        0.0, 0.25,
        -0.1, -0.1,
        0.4, -0.4
    ];

    private _posBuf0: WebGLBuffer = null!;
    private _vao0: WebGLVertexArrayObject = null!;

    private _vs0 = 
    `#version 300 es

in vec4 a_position;

void main() {
    gl_Position = a_position;
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