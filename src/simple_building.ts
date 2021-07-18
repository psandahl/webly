import { BufferSet } from "./buffer_set";
import { compileShaderProgram } from "./compiler";

export class SimpleBuilding implements Entity {
  public constructor(gl: WebGL2RenderingContext) {
    this._bufferSet = new BufferSet(gl, [3, 3], this._data);
    this._program = compileShaderProgram(
      gl,
      this._vertexShader,
      this._fragmentShader
    );
  }

  public render(gl: WebGL2RenderingContext): void {
    this._bufferSet.bind();
    gl.useProgram(this._program);

    gl.drawArrays(gl.TRIANGLES, 0, this._data.length / 6);

    gl.useProgram(null);
    this._bufferSet.unbind();
  }

  private _bufferSet: BufferSet;
  private _program: WebGLProgram;

  // Per vertex: x y z r g b
  private readonly _data = [
    0.0, 0.25, 0.0, 1.0, 0.0, 0.0, 0.1, -0.3, 0.0, 0.0, 1.0, 0.0, 0.5, 0.1, 0.0,
    0.0, 0.0, 1.0,
  ];

  private readonly _vertexShader = `#version 300 es

layout (location = 0) in vec4 a_position;
layout (location = 1) in vec3 a_color;

out vec3 v_color;

void main() {
  v_color = a_color;
  gl_Position = a_position;
}`;

  private readonly _fragmentShader = `#version 300 es

precision highp float;

in vec3 v_color;
out vec4 color;

void main() {
  color = vec4(v_color, 1);
}`;
}
