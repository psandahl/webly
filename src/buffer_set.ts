export class BufferSet {
  public constructor(
    gl: WebGL2RenderingContext,
    attrib: number[],
    data: number[]
  ) {
    this._buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, this._buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    this._vao = gl.createVertexArray()!;
    gl.bindVertexArray(this._vao);

    const itemSize = 4; // Float is four bytes wide.
    const totalValues = attrib.reduce((acc, value) => acc + value, 0);

    let valueCount = 0;
    attrib.forEach((numValues, index) => {
      gl.enableVertexAttribArray(index);
      gl.vertexAttribPointer(
        index,
        numValues,
        gl.FLOAT,
        false,
        itemSize * totalValues,
        valueCount * itemSize
      );
      valueCount += numValues;
    });

    this._gl = gl;
  }

  public bind(): void {
    this._gl.bindVertexArray(this._vao);
  }

  public unbind(): void {
    this._gl.bindVertexArray(null);
  }

  private _buf: WebGLBuffer;
  private _vao: WebGLVertexArrayObject;
  private _gl: WebGL2RenderingContext;
}
