// src/CommonEquipment.js

import React, { useState } from 'react';
import './App.css'; // Import CSS styles

import shinyOreImg from "./images/Shiny_Ore.webp";
import glowyOreImg from "./images/Glowy_Ore.webp";




// Common equipment ore requirements (max level 18)
const commonOreRequirements = [
    { shiny: 0, glowy: 0 }, // Level 1
    { shiny: 120, glowy: 0 },
    { shiny: 240, glowy: 20 },
    { shiny: 400, glowy: 0 },
    { shiny: 600, glowy: 0 },
    { shiny: 840, glowy: 100 },
    { shiny: 1120, glowy: 0 },
    { shiny: 1440, glowy: 0 },
    { shiny: 1800, glowy: 200 },
    { shiny: 1900, glowy: 0 },
    { shiny: 2000, glowy: 0 },
    { shiny: 2100, glowy: 400 },
    { shiny: 2200, glowy: 0 },
    { shiny: 2300, glowy: 0 },
    { shiny: 2400, glowy: 600 },
    { shiny: 2500, glowy: 0 },
    { shiny: 2600, glowy: 0 },
    { shiny: 2700, glowy: 600 },
];

function CommonEquipment({ equipment }) {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [targetLevel, setTargetLevel] = useState(commonOreRequirements.length);
    const [totalOres, setTotalOres] = useState(null);
    const [error, setError] = useState('');

    const calculateOres = () => {
        if (currentLevel >= targetLevel) {
            setError("Current level must be less than target level.");
            return null;
        }
        if (
            currentLevel < 1 ||
            targetLevel < 1 ||
            currentLevel > commonOreRequirements.length ||
            targetLevel > commonOreRequirements.length
        ) {
            setError(
                "Levels must be between 1 and " + commonOreRequirements.length
            );
            return null;
        }
        setError("");

        const total = commonOreRequirements
            .slice(currentLevel, targetLevel)
            .reduce(
                (acc, curr) => ({
                    shiny: acc.shiny + curr.shiny,
                    glowy: acc.glowy + curr.glowy,
                }),
                { shiny: 0, glowy: 0 }
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
            {/*  */}
            {/* <h2 style={{ textAlign: "center" }}>{equipment.name}</h2> */}
            <label>
                Current Level:
                <input
                    type="number"
                    value={currentLevel}
                    min="1"
                    max={commonOreRequirements.length}
                    onChange={(e) => setCurrentLevel(Number(e.target.value))}
                />
            </label>
            <label>
                Target Level:
                <input
                    type="number"
                    value={targetLevel}
                    min="1"
                    max={commonOreRequirements.length}
                    onChange={(e) => setTargetLevel(Number(e.target.value))}
                />
            </label>
            <button onClick={handleCalculate}>Calculate Ores</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {totalOres && (
                <div>
                    <h3>Total Ores Required:</h3>
                    <p>Shiny Ore <img src={shinyOreImg} alt="Shiny Ore" style={{  width: '15px', height: 'auto'}}/>:  {totalOres.shiny}</p>
                    <p>Glowy Ore <img src={glowyOreImg} alt="Glowy Ore" style={{  width: '15px', height: 'auto'}}/>: {totalOres.glowy}</p>
                </div>
            )}
        </div>
    );
}

export default CommonEquipment;
