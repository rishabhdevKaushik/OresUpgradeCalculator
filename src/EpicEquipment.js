// src/EpicEquipment.js

import React, { useState } from "react";
import "./App.css"; // Import CSS styles

import shinyOreImg from "./images/Shiny_Ore.webp";
import glowyOreImg from "./images/Glowy_Ore.webp";
import starryOreImg from "./images/Starry_Ore.webp";

// Epic equipment ore requirements (max level 27)
const epicOreRequirements = [
    { shiny: 0, glowy: 0, starry: 0 }, // Level 1
    { shiny: 120, glowy: 0, starry: 0 },
    { shiny: 240, glowy: 20, starry: 0 },
    { shiny: 400, glowy: 0, starry: 0 },
    { shiny: 600, glowy: 0, starry: 0 },
    { shiny: 840, glowy: 100, starry: 0 },
    { shiny: 1120, glowy: 0, starry: 0 },
    { shiny: 1440, glowy: 0, starry: 0 },
    { shiny: 1800, glowy: 200, starry: 10 },
    { shiny: 1900, glowy: 0, starry: 0 },
    { shiny: 2000, glowy: 0, starry: 0 },
    { shiny: 2100, glowy: 400, starry: 20 },
    { shiny: 2200, glowy: 0, starry: 0 },
    { shiny: 2300, glowy: 0, starry: 0 },
    { shiny: 2400, glowy: 600, starry: 30 },
    { shiny: 2500, glowy: 0, starry: 0 },
    { shiny: 2600, glowy: 0, starry: 0 },
    { shiny: 2700, glowy: 600, starry: 50 },
    { shiny: 2800, glowy: 0, starry: 0 },
    { shiny: 2900, glowy: 0, starry: 0 },
    { shiny: 3000, glowy: 600, starry: 100 },
    { shiny: 3100, glowy: 0, starry: 0 },
    { shiny: 3200, glowy: 0, starry: 0 },
    { shiny: 3300, glowy: 600, starry: 120 },
    { shiny: 3400, glowy: 0, starry: 0 },
    { shiny: 3500, glowy: 0, starry: 0 },
    { shiny: 3600, glowy: 600, starry: 150 },
];

function EpicEquipment({ equipment }) {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(epicOreRequirements.length); // Default to max
    const [totalOres, setTotalOres] = useState(null);
    const [error, setError] = useState("");

    const calculateOres = () => {
        if (currentLevel >= targetLevel) {
            setError("Current level must be less than target level.");
            return null;
        }
        if (
            currentLevel < 1 ||
            targetLevel < 1 ||
            currentLevel > epicOreRequirements.length ||
            targetLevel > epicOreRequirements.length
        ) {
            setError(
                "Levels must be between 1 and " + epicOreRequirements.length
            );
            return null;
        }
        setError("");

        const total = epicOreRequirements
            .slice(currentLevel, targetLevel)
            .reduce(
                (acc, curr) => ({
                    shiny: acc.shiny + curr.shiny,
                    glowy: acc.glowy + curr.glowy,
                    starry: acc.starry + curr.starry,
                }),
                { shiny: 0, glowy: 0, starry: 0 }
            );

        return total;
    };

    const handleCalculate = () => {
        const result = calculateOres();
        if (result) {
            setTotalOres(result);
        }
    };

    return (
        <div>
            {/* <h2 style={{ textAlign: "center" }}>{equipment.name}</h2> */}

            <label>
                Current Level:
                <input
                    type="number"
                    value={currentLevel}
                    min="1"
                    max={epicOreRequirements.length}
                    onChange={(e) => setCurrentLevel(Number(e.target.value))}
                />
            </label>
            <label>
                Target Level:
                <input
                    type="number"
                    value={targetLevel}
                    min="1"
                    max={epicOreRequirements.length}
                    onChange={(e) => setTargetLevel(Number(e.target.value))}
                />
            </label>
            <button onClick={handleCalculate}>Calculate Ores</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {totalOres && (
                <div>
                    <h3>Total Ores Required:</h3>
                    <p>Shiny Ore <img src={shinyOreImg} alt="Shiny Ore" style={{  width: '15px', height: 'auto'}} />: {totalOres.shiny}</p>
                    <p>Glowy Ore <img src={glowyOreImg} alt="Glowy Ore" style={{  width: '15px', height: 'auto'}}/>: {totalOres.glowy}</p>
                    <p>Starry Ore <img src={starryOreImg} alt="Starry Ore" style={{  width: '15px', height: 'auto'}}/>: {totalOres.starry}</p>{" "}
                    {/* For epic equipment */}
                </div>
            )}
        </div>
    );
}

export default EpicEquipment;
