import React from "react";

const Controls = ({
    onFlowRateChange,
    onSizeChange,
    onSpeedChange,
    onWidthChange,
    onTransparencyChange, 
}) => (
    <>
        <label>
            Flow Rate:
            <input
                type="range"
                min="100"
                max="1000"
                step="10"
                onChange={(e) => onFlowRateChange(+e.target.value)}
            />
        </label>
        <label>
            Size:
            <input
                type="range"
                min="1"
                max="10"
                step="0.1"
                onChange={(e) => onSizeChange(+e.target.value)}
            />
        </label>
        <label>
            Particle Speed:
            <input
                type="range"
                min="0.01"
                max="2.6"
                step="0.025"
                onChange={(e) => onSpeedChange(+e.target.value)}
            />
        </label>
        <label>
            Waterfall Width:
            <input
                type="range"
                min="0.3"
                max="1"
                step="0.1"
                onChange={(e) => onWidthChange(+e.target.value)}
            />
        </label>
        <label>
            Water Transparency:
            <input
                type="range"
                min="0.2"
                max="1.0"
                step="0.2"
                onChange={(e) => onTransparencyChange(+e.target.value)} // Transparency slider
            />
        </label>
    </>
);

export default Controls;
