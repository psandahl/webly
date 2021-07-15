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
): [boolean, WebGLProgram] {
  const [succvs, vs] = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  const [succfs, fs] = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  if (!succvs || !succfs) {
    return [false, null!];
  }

  const program = gl.createProgram();
  if (!program) {
    console.log("Failed to create program");
    return [false, null!];
  }

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return [true, program];
  } else {
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return [false, null!];
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
) {
  gl.deleteProgram(program);
}

function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
): [boolean, WebGLShader] {
  const shader = gl.createShader(type);
  if (!shader) {
    console.log("Failed to create shader");
    return [false, null!];
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return [true, shader];
  } else {
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return [false, null!];
  }
}
