// EquipmentSelector.js
import React from "react";
import equipmentData from "./equipmentData";

// Load all images from /images automatically
const images = require.context("./images", false, /\.webp$/);

function getImageForName(name) {
    // Replace spaces with underscores
    const fileName = name.replace(/ /g, "_") + ".webp";
    try {
        return images(`./${fileName}`);
    } catch (err) {
        console.warn(`Image not found for ${name}: ${fileName}`);
        return null;
    }
}

function EquipmentSelector({
    selectedHero,
    selectedEquipment,
    onEquipmentSelect,
}) {
    if (!selectedHero?.name) return null;

    const options = [
        ...(equipmentData[selectedHero.name]?.common || []).map((e) => ({
            ...e,
            rarity: "Common",
            img: getImageForName(e.name),
        })),
        ...(equipmentData[selectedHero.name]?.epic || []).map((e) => ({
            ...e,
            rarity: "Epic",
            img: getImageForName(e.name),
        })),
    ];

    return (
        <div className="equipment-selector">
            {options.map((equipment) => (
                <div
                    key={equipment.name}
                    className={`equipment-item ${
                        selectedEquipment?.name === equipment.name
                            ? "selected"
                            : ""
                    }`}
                    onClick={() => onEquipmentSelect(equipment)}
                >
                    {equipment.img && (
                        <img src={equipment.img} alt={equipment.name} />
                    )}
                    <h4>{equipment.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default EquipmentSelector;
