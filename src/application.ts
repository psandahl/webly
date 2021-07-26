import { GLContext } from "./gl_context";
import { ImageDisplay } from "./image_display";
import { SimpleBuilding } from "./simple_building";

import { Matrix4, Vector3, Vector4, clamp, toRadians } from "@math.gl/core";

export class Application {
  public constructor(
    image: HTMLImageElement,
    depthImage: [Float32Array, number, number],
    windowSize: [number, number]
  ) {
    this.displayAspectRatio = image.naturalWidth / image.naturalHeight;
    this.windowSize = windowSize;
    this.glContext = new GLContext(this.displayAspectRatio, windowSize);
    this.simpleBuilding = new SimpleBuilding(
      depthImage,
      this.glContext.getGl()
    );
    this.imageDisplay = new ImageDisplay(image, this.glContext.getGl());
  }

  /**
   * Run the application.
   */
  public run(): void {
    this.simpleBuilding.setProjectionMatrix(this.projectionMatrix());
    this.simpleBuilding.setViewMatrix(this.viewMatrix());

    this.glContext.setEntities([this.imageDisplay, this.simpleBuilding]);
    this.glContext.enterRenderLoop();
  }

  /**
   * Set the new window size for the application.
   * @param size
   */
  public setWindowSize(windowSize: [number, number]): void {
    this.windowSize = windowSize;
    this.glContext.setWindowSize(windowSize);
    //this.simpleBuilding.setProjectionMatrix(this.projectionMatrix());
  }

  /**
   * Handle mouse navigation.
   * @param deltaX Move in x.
   * @param deltaY Move in y.
   */
  public mouseMove(deltaX: number, deltaY: number): void {
    const [w, h] = this.windowSize;

    this.azimuth -= (deltaX / w) * (2 * Math.PI);
    this.azimuth = this.azimuth % (2 * Math.PI);

    this.elevation += (deltaY / h) * (2 * Math.PI);
    this.elevation = clamp(this.elevation, toRadians(-60), toRadians(60));

    this.simpleBuilding.setViewMatrix(this.viewMatrix());
  }

  /**
   * Get the applications rendering canvas.
   */
  public canvas(): HTMLCanvasElement {
    return this.glContext.getCanvas();
  }

  private projectionMatrix(): Matrix4 {
    const param = {
      fovy: toRadians(45),
      aspect: this.displayAspectRatio,
      near: 0.1,
      far: 150,
    };

    return new Matrix4().perspective(param);
  }

  private viewMatrix(): Matrix4 {
    const x = Math.sin(this.azimuth);
    const z = Math.cos(this.azimuth);
    const y = Math.tan(this.elevation);

    const vec = new Vector3(x, y, z).normalize();

    return new Matrix4().lookAt(vec.scale(this.scale), [0, 0, 0], [0, 1, 0]);
  }

  private displayAspectRatio = 1.0;
  private windowSize: [number, number];
  private glContext: GLContext;
  private imageDisplay: ImageDisplay;
  private simpleBuilding: SimpleBuilding;
  private azimuth = 0.0;
  private elevation = 0.0;
  private scale = 100.0;
}
