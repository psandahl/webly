export function shaderSource(name: string): string {
  if (name === "colored.vs") {
    return `#version 300 es

    layout (location = 0) in vec4 a_position;
    layout (location = 1) in vec3 a_color;
    
    out vec3 v_color;
    
    void main() {
      v_color = a_color;
      gl_Position = a_position;
    }`;
  } else if (name == "colored.fs") {
    return `#version 300 es

    precision highp float;
      
    in vec3 v_color;
    out vec4 color;
    
    void main() {
      color = vec4(v_color, 1);
    }`;
  } else {
    throw new Error(`Requested shader code ${name} is unknown`);
  }
}
