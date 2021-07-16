/**
 * Compile and link a shader program.
 * @param gl
 * @param vertexSource
 * @param fragmentSource
 */
export function compileShaderProgram(
  gl: WebGL2RenderingContext,
  vertexSource: string,
  fragmentSource: string
): WebGLProgram {
  const vshader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fshader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  const program = gl.createProgram();
  if (!program) {
    throw new Error("Failed to create program object");
  }

  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  } else {
    throw new Error(gl.getProgramInfoLog(program)!);
  }
}

/**
 * Delete a shader program.
 * @param gl
 * @param program
 */
function deleteShaderProgram(
  gl: WebGL2RenderingContext,
  program: WebGLProgram
): void {
  gl.deleteProgram(program);
}

function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error("Failed to create shader object");
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  } else {
    throw new Error(gl.getShaderInfoLog(shader)!);
  }
}
