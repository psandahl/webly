import { GLContext } from "./gl_context";
import { SimpleBuilding } from "./simple_building";

import { Matrix4, Vector3, Vector4, clamp, toRadians } from "@math.gl/core";

export class Application {
  public constructor(size: [number, number]) {
    this.size = size;
    this.glContext = new GLContext(size);
    this.simpleBuilding = new SimpleBuilding(this.glContext.getGl());
  }

  /**
   * Run the application.
   */
  public run(): void {
    this.simpleBuilding.setProjectionMatrix(this.projectionMatrix());
    this.simpleBuilding.setViewMatrix(this.viewMatrix());

    this.glContext.setEntities([this.simpleBuilding]);
    this.glContext.enterRenderLoop();
  }

  /**
   * Set the new size for the application.
   * @param size
   */
  public setSize(size: [number, number]): void {
    this.size = size;
    this.glContext.setSize(size);
    this.simpleBuilding.setProjectionMatrix(this.projectionMatrix());
  }

  /**
   * Handle mouse navigation.
   * @param deltaX Move in x.
   * @param deltaY Move in y.
   */
  public mouseMove(deltaX: number, deltaY: number): void {
    const [w, h] = this.size;

    this.azimuth -= (deltaX / w) * (2 * Math.PI);
    this.azimuth = this.azimuth % (2 * Math.PI);

    this.elevation += (deltaY / h) * (2 * Math.PI);
    this.elevation = clamp(this.elevation, toRadians(-45), toRadians(45));

    this.simpleBuilding.setViewMatrix(this.viewMatrix());
  }

  /**
   * Get the applications rendering canvas.
   */
  public canvas(): HTMLCanvasElement {
    return this.glContext.getCanvas();
  }

  private projectionMatrix(): Matrix4 {
    const [w, h] = this.size;
    const aspect = w / h;
    const param = {
      fovy: toRadians(45),
      aspect: aspect,
      near: 0.1,
      far: 100,
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

  private size: [number, number];
  private glContext: GLContext;
  private simpleBuilding: SimpleBuilding;
  private azimuth = 0.0;
  private elevation = 0.0;
  private scale = 20.0;
}
