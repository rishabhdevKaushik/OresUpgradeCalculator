// src/EquipmentSelector.js

import React from "react";
import barbarianPuppetImg from "./images/Barbarian_Puppet.webp";
import rageVialImg from "./images/Rage_Vial.webp";
import earthquakeBootsImg from "./images/Earthquake_Boots.webp";
import vampstacheImg from "./images/Vampstache.webp";
import giantGauntletImg from "./images/Giant_Gauntlet.webp";
import spikyBallImg from "./images/Spiky_Ball.webp";

import archerPuppetImg from "./images/Archer_Puppet.webp";
import invisibilityVialImg from "./images/Invisibility_Vial.webp";
import giantArrowImg from "./images/Giant_Arrow.webp";
import healerPuppetImg from "./images/Healer_Puppet.webp";
import frozenArrowImg from "./images/Frozen_Arrow.webp";
import magicMirrorImg from "./images/Magic_Mirror.webp";

import eternalTomeImg from "./images/Eternal_Tome.webp";
import lifeGemImg from "./images/Life_Gem.webp";
import rageGemImg from "./images/Rage_Gem.webp";
import healingTomeImg from "./images/Healing_Tome.webp";
import fireballImg from "./images/Fireball_Equipment.webp";
import lavaloonPuppetImg from "./images/Lavaloon_Puppet.webp";

import royalGemImg from "./images/Royal_Gem.webp";
import seekingShieldImg from "./images/Seeking_Shield.webp";
import hogRiderPuppetImg from "./images/Hog_Rider_Puppet.webp";
import hasteVialImg from "./images/Haste_Vial.webp";
import rocketSpearImg from "./images/Rocket_Spear.webp";

const equipmentOptions = {
    "Barbarian King": [
        // Common
        { name: "Barbarian Puppet", img: barbarianPuppetImg, rarity: "Common" },
        { name: "Rage Vial", img: rageVialImg, rarity: "Common" },
        { name: "Earthquake Boots", img: earthquakeBootsImg, rarity: "Common" },
        { name: "Vampstache", img: vampstacheImg, rarity: "Common" },
        // Epic
        { name: "Giant Gauntlet", img: giantGauntletImg, rarity: "Epic" },
        { name: "Spiky Ball", img: spikyBallImg, rarity: "Epic" },
    ],
    "Archer Queen": [
        // Common
        { name: "Archer Puppet", img: archerPuppetImg, rarity: "Common" },
        {
            name: "Invisibility Vial",
            img: invisibilityVialImg,
            rarity: "Common",
        },
        { name: "Giant Arrow", img: giantArrowImg, rarity: "Common" },
        { name: "Healer Puppet", img: healerPuppetImg, rarity: "Common" },
        // Epic
        { name: "Frozen Arrow", img: frozenArrowImg, rarity: "Epic" },
        { name: "Magic Mirror", img: magicMirrorImg, rarity: "Epic" },
    ],
    "Grand Warden": [
        // Common
        { name: "Eternal Tome", img: eternalTomeImg, rarity: "Common" },
        { name: "Life Gem", img: lifeGemImg, rarity: "Common" },
        { name: "Rage Gem", img: rageGemImg, rarity: "Common" },
        { name: "Healing Tome", img: healingTomeImg, rarity: "Common" },
        // Epic
        { name: "Fireball", img: fireballImg, rarity: "Epic" },
        { name: "Lavaloon Puppet", img: lavaloonPuppetImg, rarity: "Epic" },
    ],
    "Royal Champion": [
        // Common
        { name: "Royal Gem", img: royalGemImg, rarity: "Common" },
        { name: "Seeking Shield", img: seekingShieldImg, rarity: "Common" },
        { name: "Hog Rider Puppet", img: hogRiderPuppetImg, rarity: "Common" },
        { name: "Haste Vial", img: hasteVialImg, rarity: "Common" },
        // Epic
        { name: "Rocket Spear", img: rocketSpearImg, rarity: "Epic" },
    ],
};

// function EquipmentSelector({ selectedHero, onEquipmentSelect }) {
//     return (
//         <div className="equipment-selector">
//             {equipmentOptions[selectedHero.name]?.map((equipment) => (
//                 <div
//                     key={equipment.name}
//                     className="equipment-item"
//                     onClick={() => onEquipmentSelect(equipment)}
//                 >
//                     <img src={equipment.img} alt={equipment.name} />
//                     <h4>{equipment.name}</h4>
//                 </div>
//             ))}
//         </div>
//     );
// }

function EquipmentSelector({
    selectedHero,
    selectedEquipment,
    onEquipmentSelect,
}) {
    return (
        <div className="equipment-selector">
            {equipmentOptions[selectedHero.name]?.map((equipment) => (
                <div
                    key={equipment.name}
                    className={`equipment-item ${
                        selectedEquipment?.name === equipment.name
                            ? "selected"
                            : ""
                    }`}
                    onClick={() => onEquipmentSelect(equipment)}
                >
                    <img src={equipment.img} alt={equipment.name} />
                    <h4>{equipment.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default EquipmentSelector;
