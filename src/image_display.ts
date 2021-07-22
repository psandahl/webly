import { BufferSet } from "./buffer_set";
import { compileShaderProgram } from "./compiler";

/**
 * The ImageDisplay is a "2D display" where two triangles are displaying a
 * texture. Geometry is given in clip space coordinates,
 * and adaption to viewport shape and form is performed by GL.
 */
export class ImageDisplay implements Entity {
  public constructor(gl: WebGL2RenderingContext) {
    this.bufferSet = new BufferSet(gl, [2, 2], this.data);
    this.program = compileShaderProgram(
      gl,
      this.vertexShader,
      this.fragmentShader
    );
  }

  public render(gl: WebGL2RenderingContext): void {
    this.bufferSet.bind();
    gl.useProgram(this.program);

    // The image must not write any depth info.
    gl.disable(gl.DEPTH_TEST);
    gl.drawArrays(gl.TRIANGLES, 0, this.data.length / 4);
    gl.enable(gl.DEPTH_TEST);

    gl.useProgram(null);
    this.bufferSet.unbind();
  }

  // Per vertex: x y (z defaults to zero) u v.
  private readonly data = [
    -1.0, 1.0, 0.0, 1.0,

    -1.0, -1.0, 0.0, 0.0,

    1.0, -1.0, 1.0, 0.0,

    1.0, 1.0, 1.0, 1.0,

    -1.0, 1.0, 0.0, 1.0,

    1.0, -1.0, 1.0, 0.0,
  ];

  private bufferSet: BufferSet;
  private program: WebGLProgram;

  private readonly vertexShader = `#version 300 es

layout (location = 0) in vec4 a_position;
layout (location = 1) in vec2 a_uv;

out vec2 v_uv;

void main() {
  v_uv = a_uv;
  gl_Position = a_position;
}`;

  private readonly fragmentShader = `#version 300 es
  
precision highp float;

in vec2 v_uv;

out vec4 color;

void main() {
  color = vec4(v_uv.x, v_uv.y, 0, 1);
}`;
}
