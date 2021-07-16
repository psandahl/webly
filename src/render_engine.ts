import { createCanvasElement, getWindowSize } from "./dom";
import { compileShaderProgram } from "./compiler";
import { BufferSet } from "./buffer_set";
import { shaderSource } from "./shaders";

export class RenderEngine {
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
  public start(): void {
    // Compile program.
    const program = compileShaderProgram(
      this._gl,
      shaderSource("colored.vs"),
      shaderSource("colored.fs")
    );    

    this._program0 = program;

    // Create buffer set.
    this._bufferSet0 = new BufferSet(
      this._gl,
      [2, 3],
      [
        0.0, 0.25, 1.0, 0.0, 0.0, -0.1, -0.1, 0.0, 1.0, 0.0, 0.4, -0.4, 0.0,
        0.0, 1.0,
      ]
    );

    this.loop();
  }

  /**
   * Act on a window resize.
   */
  public resize(): void {
    if (this._canvas !== undefined) {
      console.log("Catch resize event");
      const [width, height] = getWindowSize();
      this._canvas.width = width;
      this._canvas.height = height;
    }
  }

  private loop(): void {
    const [width, height] = getWindowSize();

    this._gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this._gl.viewport(0, 0, width, height);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT);

    this._gl.enable(this._gl.CULL_FACE);
    this._gl.cullFace(this._gl.BACK);
    this._gl.useProgram(this._program0);
    this._bufferSet0.bind();
    this._gl.drawArrays(this._gl.TRIANGLES, 0, 3);

    requestAnimationFrame(this.loop.bind(this));
  }

  private _canvas: HTMLCanvasElement;
  private _gl: WebGL2RenderingContext;
  private _program0: WebGLProgram = null!;
  private _bufferSet0: BufferSet = null!;
}
