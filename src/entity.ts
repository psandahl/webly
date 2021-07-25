/**
 * Interface for a renderable entity.
 */
interface Entity {
  render(
    gl: WebGL2RenderingContext,
    viewport: [number, number, number, number]
  ): void;
}
