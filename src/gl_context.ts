import { appendBody, getWindowSize, createCanvasElement } from "./dom";

type Entity = any;

export class GLContext {
  public constructor() {
    this._canvas = createCanvasElement("render-canvas");
    this.handleResize();

    this._gl = this._canvas.getContext("webgl2") as WebGL2RenderingContext;
    if (this._gl !== undefined) {
      appendBody(this._canvas);
    } else {
      throw new Error("Unable to create WebGL2 context");
    }

    this.initialGLSetup();
  }

  /**
   * Handle window resize event.
   */
  public handleResize(): void {
    if (this._canvas !== undefined) {
      const [width, height] = getWindowSize();
      this._canvas.width = width;
      this._canvas.height = height;
    }
  }

  public render(entities: Entity[]): void {
    this._gl.clear(this._gl.COLOR_BUFFER_BIT);

    entities.forEach((entity) => {});
  }

  /**
   * Get the GL context.
   * @returns The GL context
   */
  public glContext(): WebGL2RenderingContext {
    return this._gl;
  }

  private initialGLSetup(): void {
    this._gl.clearColor(0, 0, 0, 1);
    this._gl.frontFace(this._gl.CCW);
    this._gl.enable(this._gl.CULL_FACE);
    this._gl.cullFace(this._gl.BACK);
  }

  private _gl: WebGL2RenderingContext;
  private _canvas: HTMLCanvasElement;
}
