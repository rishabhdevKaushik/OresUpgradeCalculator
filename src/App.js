// src/App.js

import React, { useState } from "react";
import HeroSelector from "./HeroSelector";
import EquipmentSelector from "./EquipmentSelector";
import CommonEquipment from "./CommonEquipment";
import EpicEquipment from "./EpicEquipment"; // Ensure to import this

function App() {
    const [selectedHero, setSelectedHero] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    return (
        <div className="container">
            <h1>Ores Upgrade Calculator</h1>
			<HeroSelector selectedHero={selectedHero} onHeroSelect={setSelectedHero} />
            {selectedHero && (
                <>
                    {/* <h2>Selected Hero: {selectedHero.name}</h2> */}
                    <EquipmentSelector
                        selectedHero={selectedHero}
                        selectedEquipment={selectedEquipment}
                        onEquipmentSelect={setSelectedEquipment}
                    />
                    {selectedEquipment &&
                        (selectedEquipment.rarity === "Epic" ? ( // Use rarity property to check
                            <EpicEquipment equipment={selectedEquipment} />
                        ) : (
                            <CommonEquipment equipment={selectedEquipment} />
                        ))}
                </>
            )}
        </div>
    );
}

export default App;
