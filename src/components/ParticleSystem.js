import { vertexShaderSource, fragmentShaderSource } from "../shaders/waterShader";

export default class ParticleSystem {
    constructor(gl, particleCount) {
        this.gl = gl;
        this.particleCount = particleCount;

        this.positions = new Float32Array(particleCount * 2); // x, y
        this.velocities = new Float32Array(particleCount * 2); // vx, vy
        this.sizes = new Float32Array(particleCount);         // size
        this.colors = new Float32Array(particleCount * 4);    // r, g, b, a

        this.initGL();
    }

    initGL() {
        const gl = this.gl;

        // Compile shaders
        const vertexShader = this.compileShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.error("Program link failed:", gl.getProgramInfoLog(this.program));
            return;
        }

        // Get attribute locations
        this.positionLocation = gl.getAttribLocation(this.program, "a_position");
        this.sizeLocation = gl.getAttribLocation(this.program, "a_size");
        this.colorLocation = gl.getAttribLocation(this.program, "a_color");

        // Create buffers
        this.positionBuffer = gl.createBuffer();
        this.sizeBuffer = gl.createBuffer();
        this.colorBuffer = gl.createBuffer();

        // Set clear color
        gl.clearColor(1.0, 1.0, 1.0, 1.0); // White background
    }

    compileShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error("Shader compile failed:", this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    initializeParticles(sizeFactor = 5, widthFactor = 4) {
        for (let i = 0; i < this.particleCount; i++) {
            // Initialize positions and velocities
            this.positions[i * 2] = (Math.random() * 2 - 1) * widthFactor; // Scale x by widthFactor
            this.positions[i * 2 + 1] = Math.random() * 2 - 1; // y
            this.velocities[i * 2] = (Math.random() - 0.5) * 0.002; // Horizontal drift
            this.velocities[i * 2 + 1] = -(Math.random() * 0.01 + 0.01); // Downward velocity

            // Set initial sizes
            this.sizes[i] = Math.random() * sizeFactor + 1;

            // Set initial colors
            this.colors[i * 4] = 0.0; // Blue (r)
            this.colors[i * 4 + 1] = 0.5; // Blue (g)
            this.colors[i * 4 + 2] = 1.0; // Blue (b)
            this.colors[i * 4 + 3] = 0.7; // Alpha
        }
    }

    updateParticles(sizeFactor = 5, speedFactor = 2, widthFactor = 4, transparency = 0.7) {
        for (let i = 0; i < this.particleCount; i++) {
            // Update positions based on velocity and speedFactor
            this.positions[i * 2] += this.velocities[i * 2] * speedFactor;
            this.positions[i * 2 + 1] += this.velocities[i * 2 + 1] * speedFactor;
    
            // Dynamically update sizes
            this.sizes[i] = Math.random() * sizeFactor + 1;
    
            // Update transparency (alpha channel)
            this.colors[i * 4 + 3] = transparency;
    
            // Reset particles when out of bounds
            if (this.positions[i * 2 + 1] < -1.2) {
                this.positions[i * 2] = (Math.random() * 2 - 1) * widthFactor;
                this.positions[i * 2 + 1] = 1.1;
                this.velocities[i * 2] = (Math.random() - 0.5) * 0.002;
                this.velocities[i * 2 + 1] = -(Math.random() * 0.01 + 0.01);
            }
        }
    }    

    render() {
        const gl = this.gl;

        gl.useProgram(this.program);

        // Bind position buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(this.positionLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Bind size buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.sizeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.sizes, gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(this.sizeLocation);
        gl.vertexAttribPointer(this.sizeLocation, 1, gl.FLOAT, false, 0, 0);

        // Bind color buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.FLOAT, false, 0, 0);

        // Clear the canvas
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Draw particles
        gl.drawArrays(gl.POINTS, 0, this.particleCount);
    }
}
