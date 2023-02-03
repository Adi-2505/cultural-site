import React from "react";
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
// import "./styles.css";

export default function Intro() {
    const customInit = (tsParticles) => {
        loadSeaAnemonePreset(tsParticles);
    };

    const options = {
        preset: "seaAnemone",
        backgroundMode: {
            enable: true,
            zIndex: -1
        }
    };

    return (


        <Particles options={options} init={customInit} />

    );
}
