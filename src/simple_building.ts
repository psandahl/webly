import { BufferSet } from "./buffer_set";
import { compileShaderProgram } from "./compiler";

import { Matrix4 } from "@math.gl/core";
import Matrix from "@math.gl/core/src/classes/base/matrix";

export class SimpleBuilding implements Entity {
  public constructor(
    depthImage: [Float32Array, number, number],
    gl: WebGL2RenderingContext
  ) {
    this.bufferSet = new BufferSet(gl, [3, 3], this.data);
    this.program = compileShaderProgram(
      gl,
      this.vertexShader,
      this.fragmentShader
    );

    this.projectionMatrix = new Matrix4().identity();
    this.projectionMatrixU = gl.getUniformLocation(
      this.program,
      "u_projectionMatrix"
    )!;

    this.viewMatrix = new Matrix4().identity();
    this.viewMatrixU = gl.getUniformLocation(this.program, "u_viewMatrix")!;

    this.modelMatrix = new Matrix4().identity();
    this.modelMatrixU = gl.getUniformLocation(this.program, "u_modelMatrix")!;
  }

  public render(
    gl: WebGL2RenderingContext,
    viewport: [number, number, number, number]
  ): void {
    this.bufferSet.bind();
    gl.useProgram(this.program);

    gl.uniformMatrix4fv(
      this.projectionMatrixU,
      false,
      this.projectionMatrix.toFloat32Array()
    );
    gl.uniformMatrix4fv(
      this.viewMatrixU,
      false,
      this.viewMatrix.toFloat32Array()
    );
    gl.uniformMatrix4fv(
      this.modelMatrixU,
      false,
      this.modelMatrix.toFloat32Array()
    );

    gl.drawArrays(gl.TRIANGLES, 0, this.data.length / 6);

    gl.useProgram(null);
    this.bufferSet.unbind();
  }

  public setProjectionMatrix(mat: Matrix4): void {
    this.projectionMatrix = mat;
  }

  public setViewMatrix(mat: Matrix4): void {
    this.viewMatrix = mat;
  }

  public setModelMatrix(mat: Matrix4): void {
    this.modelMatrix = mat;
  }

  private bufferSet: BufferSet;
  private program: WebGLProgram;
  private projectionMatrix: Matrix4;
  private projectionMatrixU: WebGLUniformLocation;
  private viewMatrix: Matrix4;
  private viewMatrixU: WebGLUniformLocation;
  private modelMatrix: Matrix4;
  private modelMatrixU: WebGLUniformLocation;

  // Per vertex: x y z r g b
  private readonly data = [
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

  private readonly vertexShader = `#version 300 es

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

  private readonly fragmentShader = `#version 300 es

precision highp float;

in vec3 v_color;
out vec4 color;

void main() {
  color = vec4(v_color, 1);
}`;
}
