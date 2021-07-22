import { appendBody, createCanvasElement } from "./dom";

export class GLContext {
  public constructor(size: [number, number]) {
    this.canvas = createCanvasElement("render-canvas");
    this.setSize(size);

    this.gl = this.canvas.getContext("webgl2") as WebGL2RenderingContext;
    if (this.gl !== undefined) {
      appendBody(this.canvas);
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
    const [width, height] = size;

    this.width = width;
    this.height = height;

    if (this.canvas !== undefined) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  /**
   * Set new entities.
   * @param entities New entities.
   */
  public setEntities(entities: Entity[]): void {
    this.entities = entities;
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
  public getGl(): WebGL2RenderingContext {
    return this.gl;
  }

  /**
   * Get canvas.
   * @returns The canvas
   */
  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  private render(): void {
    this.gl.viewport(0, 0, this.width, this.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    this.entities.forEach((entity) => {
      entity.render(this.gl);
    });

    requestAnimationFrame(this.render.bind(this));
  }

  private initialGLSetup(): void {
    this.gl.clearColor(0.9, 0.9, 0.9, 1);
    this.gl.frontFace(this.gl.CCW);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.cullFace(this.gl.BACK);
    this.gl.enable(this.gl.DEPTH_TEST);
  }

  private width: number = 0.0;
  private height: number = 0.0;
  private gl: WebGL2RenderingContext;
  private canvas: HTMLCanvasElement;
  private entities: Entity[] = [];
}
