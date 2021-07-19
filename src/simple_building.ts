import { BufferSet } from "./buffer_set";
import { compileShaderProgram } from "./compiler";

import { Matrix4 } from "@math.gl/core";
import Matrix from "@math.gl/core/src/classes/base/matrix";

export class SimpleBuilding implements Entity {
  public constructor(gl: WebGL2RenderingContext) {
    this._bufferSet = new BufferSet(gl, [3, 3], this._data);
    this._program = compileShaderProgram(
      gl,
      this._vertexShader,
      this._fragmentShader
    );

    this._projectionMatrix = new Matrix4().identity();
    this._projectionMatrixU = gl.getUniformLocation(
      this._program,
      "u_projectionMatrix"
    )!;

    this._viewMatrix = new Matrix4().identity();
    this._viewMatrixU = gl.getUniformLocation(this._program, "u_viewMatrix")!;

    this._modelMatrix = new Matrix4().identity();
    this._modelMatrixU = gl.getUniformLocation(this._program, "u_modelMatrix")!;
  }

  public render(gl: WebGL2RenderingContext): void {
    this._bufferSet.bind();
    gl.useProgram(this._program);

    gl.uniformMatrix4fv(
      this._projectionMatrixU,
      false,
      this._projectionMatrix.toFloat32Array()
    );
    gl.uniformMatrix4fv(
      this._viewMatrixU,
      false,
      this._viewMatrix.toFloat32Array()
    );
    gl.uniformMatrix4fv(
      this._modelMatrixU,
      false,
      this._modelMatrix.toFloat32Array()
    );

    gl.drawArrays(gl.TRIANGLES, 0, this._data.length / 6);

    gl.useProgram(null);
    this._bufferSet.unbind();
  }

  public setProjectionMatrix(mat: Matrix4): void {
    this._projectionMatrix = mat;
  }

  public setViewMatrix(mat: Matrix4): void {
    this._viewMatrix = mat;
  }

  public setModelMatrix(mat: Matrix4): void {
    this._modelMatrix = mat;
  }

  private _bufferSet: BufferSet;
  private _program: WebGLProgram;
  private _projectionMatrix: Matrix4;
  private _projectionMatrixU: WebGLUniformLocation;
  private _viewMatrix: Matrix4;
  private _viewMatrixU: WebGLUniformLocation;
  private _modelMatrix: Matrix4;
  private _modelMatrixU: WebGLUniformLocation;

  // Per vertex: x y z r g b
  private readonly _data = [
    // First wall - short side positive z.
    -2.0, 3.0, 3.0, 1.0, 0.0, 0.0,

    -2.0, 0.0, 3.0, 1.0, 0.0, 0.0,

    2.0, 0.0, 3.0, 1.0, 0.0, 0.0,

    -2.0, 3.0, 3.0, 1.0, 0.0, 0.0,

    2.0, 0.0, 3.0, 1.0, 0.0, 0.0,

    2.0, 3.0, 3.0, 1.0, 0.0, 0.0,

    0.0, 5.0, 3.0, 0.6, 0.6, 0.6,

    -2.0, 3.0, 3.0, 0.6, 0.6, 0.6,

    2.0, 3.0, 3.0, 0.6, 0.6, 0.6,

    // Second wall - long side positive x.
    2.0, 3.0, 3.0, 1.0, 0.0, 0.0,

    2.0, 0.0, 3.0, 1.0, 0.0, 0.0,

    2.0, 0.0, -3.0, 1.0, 0.0, 0.0,

    2.0, 3.0, 3.0, 1.0, 0.0, 0.0,

    2.0, 0.0, -3.0, 1.0, 0.0, 0.0,

    2.0, 3.0, -3.0, 1.0, 0.0, 0.0,

    // Third wall - short side negative z.
    2.0, 3.0, -3.0, 1.0, 0.0, 0.0,

    2.0, 0.0, -3.0, 1.0, 0.0, 0.0,

    -2.0, 0.0, -3.0, 1.0, 0.0, 0.0,

    2.0, 3.0, -3.0, 1.0, 0.0, 0.0,

    -2.0, 0.0, -3.0, 1.0, 0.0, 0.0,

    -2.0, 3.0, -3.0, 1.0, 0.0, 0.0,

    0.0, 5.0, -3.0, 0.6, 0.6, 0.6,

    2.0, 3.0, -3.0, 0.6, 0.6, 0.6,

    -2.0, 3.0, -3.0, 0.6, 0.6, 0.6,

    // Fourth wall - long side negative x.
    -2.0, 3.0, -3.0, 1.0, 0.0, 0.0,

    -2.0, 0.0, -3.0, 1.0, 0.0, 0.0,

    -2.0, 0.0, 3.0, 1.0, 0.0, 0.0,

    -2.0, 3.0, -3.0, 1.0, 0.0, 0.0,

    -2.0, 0.0, 3.0, 1.0, 0.0, 0.0,

    -2.0, 3.0, 3.0, 1.0, 0.0, 0.0,

    // Roof - negative x.
    0.0, 5.0, -3.0, 0.0, 0.0, 0.0,

    -2.0, 3.0, -3.0, 0.0, 0.0, 0.0,

    -2.0, 3.0, 3.0, 0.0, 0.0, 0.0,

    0.0, 5.0, -3.0, 0.0, 0.0, 0.0,

    -2.0, 3.0, 3.0, 0.0, 0.0, 0.0,

    0.0, 5.0, 3.0, 0.0, 0.0, 0.0,

    // Roof - positive x.
    0.0, 5.0, 3.0, 0.0, 0.0, 0.0,

    2.0, 3.0, 3.0, 0.0, 0.0, 0.0,

    2.0, 3.0, -3.0, 0.0, 0.0, 0.0,

    0.0, 5.0, 3.0, 0.0, 0.0, 0.0,

    2.0, 3.0, -3.0, 0.0, 0.0, 0.0,

    0.0, 5.0, -3.0, 0.0, 0.0, 0.0,

    // Bottom plate.
    -2.0, 0.0, 3.0, 0.0, 0.0, 1.0,

    -2.0, 0.0, -3.0, 0.0, 0.0, 1.0,

    2.0, 0.0, -3.0, 0.0, 0.0, 1.0,

    -2.0, 0.0, 3.0, 0.0, 0.0, 1.0,

    2.0, 0.0, -3.0, 0.0, 0.0, 1.0,

    2.0, 0.0, 3.0, 0.0, 0.0, 1.0,
  ];

  private readonly _vertexShader = `#version 300 es

layout (location = 0) in vec4 a_position;
layout (location = 1) in vec3 a_color;

uniform mat4 u_projectionMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_modelMatrix;

out vec3 v_color;

void main() {
  mat4 mat = u_projectionMatrix * u_viewMatrix * u_modelMatrix;

  v_color = a_color;
  gl_Position = mat * a_position;
}`;

  private readonly _fragmentShader = `#version 300 es

precision highp float;

in vec3 v_color;
out vec4 color;

void main() {
  color = vec4(v_color, 1);
}`;
}
