import { appendBody, getWindowSize, createCanvasElement } from "./dom";

export class GLContext {
  public constructor(size: [number, number]) {
    this._canvas = createCanvasElement("render-canvas");
    this.setSize(size);

    this._gl = this._canvas.getContext("webgl2") as WebGL2RenderingContext;
    if (this._gl !== undefined) {
      appendBody(this._canvas);
    } else {
      throw new Error("Unable to create WebGL2 context");
    }

    this.initialGLSetup();
  }

  /**
   * Set new size.
   * @param size
   */
  public setSize(size: [number, number]): void {
    if (this._canvas !== undefined) {
      const [width, height] = size;
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

  /**
   * Get canvas.
   * @returns The canvas
   */
  public canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  private render(): void {
    const [width, height] = getWindowSize();
    this._gl.viewport(0, 0, width, height);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);

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
    this._gl.enable(this._gl.DEPTH_TEST);
  }

  private _gl: WebGL2RenderingContext;
  private _canvas: HTMLCanvasElement;
  private _entities: Entity[] = [];
}
