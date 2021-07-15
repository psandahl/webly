import { createCanvasElement, getWindowSize } from "./dom";
import { compileShaderProgram } from "./compiler";
import { BufferSet } from "./buffer_set";

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

    console.log(
      `Max number of vertex attributes: ${this._gl.getParameter(
        this._gl.MAX_VERTEX_ATTRIBS
      )}`
    );
  }

  /**
   * Start the engine.
   */
  public start() {
    // Compile program.
    const [succ, program] = compileShaderProgram(
      this._gl,
      this._vs0,
      this._fs0
    );
    if (!succ) {
      throw new Error("Failed to compile shader program");
    }

    this._program0 = program;

    // Create buffer set.
    this._bufferSet0 = new BufferSet(
      this._gl,
      [2, 3],
      [
        0.0, 0.25, 1.0, 0.0, 0.0, 
        -0.1, -0.1, 0.0, 1.0, 0.0, 
        0.4, -0.4, 0.0, 0.0, 1.0,
      ]
    );

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
    this._bufferSet0.bind();
    this._gl.drawArrays(this._gl.TRIANGLES, 0, 3);

    requestAnimationFrame(this.loop.bind(this));
  }

  private _bufferSet0: BufferSet = null!;

  private _vs0 = `#version 300 es

layout (location = 0) in vec4 a_position;
layout (location = 1) in vec3 a_color;

out vec3 v_color;

void main() {
    v_color = a_color;
    gl_Position = a_position;
}
`;

  private _fs0 = `#version 300 es

precision highp float;
  
in vec3 v_color;
out vec4 color;

void main() {
    color = vec4(v_color, 1);
}
`;
}
