import React, { useState } from "react";
import Controls from "./components/Controls";
import Waterfall from "./components/Waterfall";
import "./App.css";

    const App = () => {
        const [flowRate, setFlowRate] = useState(1000);      // Flow Rate default
        const [size, setSize] = useState(7.5);                // Size default
        const [particleSpeed, setParticleSpeed] = useState(1.95); // Particle Speed default
        const [widthFactor, setWidthFactor] = useState(0.3);  // Waterfall Width default
        const [transparency, setTransparency] = useState(1.0); // Water Transparency default


    // Function to generate random values for all controls
    const randomizeValues = () => {
        setFlowRate(Math.floor(Math.random() * (1000 - 100 + 1)) + 100); 
        setSize(parseFloat((Math.random() * 10 + 1).toFixed(1)));        
        setParticleSpeed(parseFloat((Math.random() * 2.6 + 0.01).toFixed(2))); 
        setWidthFactor(parseFloat((Math.random() * 1.0 + 0.3).toFixed(1)));    
        setTransparency(parseFloat((Math.random() * 0.5 + 0.5).toFixed(2))); 
    };

    const resetSettings = () => {
        setFlowRate(1000);       // Reset Flow Rate
        setSize(7.5);             // Reset Size
        setParticleSpeed(1.95); // Reset Particle Speed
        setWidthFactor(0.3);      // Reset Waterfall Width
        setTransparency(1.0);   // Reset Water Transparency
    };
    
    return (
        <div className="App">
            <div className="visualization">
                     <div className="side-text">
                        <h1>Waterfall Simulation</h1>
                              <p>
                                 Adjust the controls below to see how flow rate, size, 
                                 speed, width, and transparency affect the waterfall 
                                 simulation. Click the <b>Randomize</b> button to generate a unique 
                                 combination of settings for an instant visual effect. Click the <b>Reset</b> button
                                 to reset the waterfall to its default state. However, please 
                                 test out the individual controls first. 
                                </p>
                            <p><b>Fun Fact:</b> The tallest waterfall in the world is Angel Falls 
                                        in Venezuela, at over 3,200 feet!</p>
                          </div>

                             {/* Buttons Wrapper */}
                                <div className="button-container">
                                      <button className="randomize-btn" onClick={randomizeValues}>
                                        Randomize
                                     </button>
                                <button className="reset-btn" onClick={resetSettings}>
                                       Reset
                                 </button>
                                 </div>
                <Waterfall
                    flowRate={flowRate}
                    size={size}
                    particleSpeed={particleSpeed}
                    widthFactor={widthFactor}
                    transparency={transparency}
                />
            </div>
            <div className="controls-panel">
                <Controls
                    onFlowRateChange={setFlowRate}
                    onSizeChange={setSize}
                    onSpeedChange={setParticleSpeed}
                    onWidthChange={setWidthFactor}
                    onTransparencyChange={setTransparency}
                />
            </div>
        </div>
    );
    
};

export default App;
