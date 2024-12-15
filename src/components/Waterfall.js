import React, { useEffect, useRef } from "react";
import ParticleSystem from "./ParticleSystem";

const Waterfall = ({ flowRate, size, particleSpeed, widthFactor, transparency }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext("webgl");

        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        const particleSystem = new ParticleSystem(gl, flowRate);

        // Initialize particles with size and widthFactor
        particleSystem.initializeParticles(size, widthFactor);

        const render = () => {
            gl.clear(gl.COLOR_BUFFER_BIT);
            particleSystem.updateParticles(size, particleSpeed, widthFactor, transparency);
            particleSystem.render();
            requestAnimationFrame(render);
        };

        render();
    }, [flowRate, size, particleSpeed, widthFactor, transparency]);

    return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Waterfall;
