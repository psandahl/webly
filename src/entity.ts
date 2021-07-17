/**
 * Interface for a renderable entity.
 */
interface Entity {
  render(gl: WebGL2RenderingContext): void;
}
