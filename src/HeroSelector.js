// src/HeroSelector.js

import React from "react";
import barbarianKingImg from "./images/Barbarian_King.webp";
import archerQueenImg from "./images/Archer_Queen.webp";
import grandWardenImg from "./images/Grand_Warden.webp";
import royalChampionImg from "./images/Royal_Champion.webp";
import minionPrinceImg from "./images/Minion_Prince.webp";

const heroes = [
    { name: "Barbarian King", img: barbarianKingImg },
    { name: "Archer Queen", img: archerQueenImg },
    { name: "Minion Prince", img: minionPrinceImg },
    { name: "Grand Warden", img: grandWardenImg },
    { name: "Royal Champion", img: royalChampionImg },
];

function HeroSelector({ selectedHero, onHeroSelect }) {
    return (
        <div className="hero-selector">
            {heroes.map((hero) => (
                <div
                    key={hero.name}
                    className={`hero-item ${
                        selectedHero?.name === hero.name ? "selected" : ""
                    }`}
                    onClick={() => onHeroSelect(hero)}
                >
                    <img src={hero.img} alt={hero.name} />
                    <h4>{hero.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default HeroSelector;
