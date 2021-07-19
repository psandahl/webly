import { appendBody, getWindowSize, createCanvasElement } from "./dom";

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

  /**
   * Set new entities.
   * @param entities New entities.
   */
  public setEntities(entities: Entity[]): void {
    this._entities = entities;
  }

  /**
   * Enter the render loop.
   */
  public enterRenderLoop(): void {
    this.render();
  }

  /**
   * Get the GL context.
   * @returns The GL context
   */
  public gl(): WebGL2RenderingContext {
    return this._gl;
  }

  private render(): void {
    const [width, height] = getWindowSize();
    this._gl.viewport(0, 0, width, height);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT);

    this._entities.forEach((entity) => {
      entity.render(this._gl);
    });

    requestAnimationFrame(this.render.bind(this));
  }

  private initialGLSetup(): void {
    this._gl.clearColor(0.9, 0.9, 0.9, 1);
    this._gl.frontFace(this._gl.CCW);
    this._gl.enable(this._gl.CULL_FACE);
    this._gl.cullFace(this._gl.BACK);
  }

  private _gl: WebGL2RenderingContext;
  private _canvas: HTMLCanvasElement;
  private _entities: Entity[] = [];
}
