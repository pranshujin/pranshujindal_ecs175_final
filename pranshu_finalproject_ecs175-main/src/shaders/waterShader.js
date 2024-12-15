export const vertexShaderSource = `
    attribute vec2 a_position;
    attribute float a_size;
    attribute vec4 a_color;

    varying vec4 v_color;

    void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        gl_PointSize = a_size;
        v_color = a_color;
    }
`;

export const fragmentShaderSource = `
    precision mediump float;
    varying vec4 v_color;

    void main() {
        gl_FragColor = v_color;
    }
`;
