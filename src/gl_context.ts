import { appendBody, createCanvasElement } from "./dom";

export class GLContext {
  public constructor(aspectRatio: number, size: [number, number]) {
    this.aspectRatio = aspectRatio;
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
   * Set new aspect ratio.
   * @param aspectRatio
   */
  public setAspectRatio(aspectRatio: number): void {
    this.aspectRatio = aspectRatio;
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
    // First try to fill complete width of window.
    let viewportWidth = this.width;
    let viewportHeight = this.width * (1.0 / this.aspectRatio);

    // Oops, too high. Adapt to height instead.
    if (viewportHeight > this.height) {
      viewportHeight = this.height;
      viewportWidth = this.height * this.aspectRatio;
    }

    //console.log(`AR: ${viewportWidth / viewportHeight}`);

    // Set viewport origin.
    const startX = this.width / 2.0 - viewportWidth / 2.0;
    const startY = this.height / 2.0 - viewportHeight / 2.0;

    this.gl.scissor(startX, startY, viewportWidth, viewportHeight);
    this.gl.viewport(startX, startY, viewportWidth, viewportHeight);
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
    this.gl.enable(this.gl.SCISSOR_TEST);
  }

  private aspectRatio: number = 1.0;
  private width: number = 0.0;
  private height: number = 0.0;
  private gl: WebGL2RenderingContext;
  private canvas: HTMLCanvasElement;
  private entities: Entity[] = [];
}
