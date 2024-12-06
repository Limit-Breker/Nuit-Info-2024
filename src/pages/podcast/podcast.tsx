import { useState, useEffect } from "react";
import HeaderAccueil from "../../components/header_footer/headerAccueil";
import ParallaxOcean from "../../components/ParallaxOcean";

const Podcast: React.FC = () => {

    return (
    
        <div className="flex-col flex items-center justify-start w-full max-w-[100vw] overflow-x-hidden relative">
            <HeaderAccueil />

            <h3 className="text-3xl font-bold text-center pt-24">Podcast : Florian Sevellec</h3>
            <video width="320" height="240" controls >
                <source src="Florian Sevellec.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3 className="text-3xl font-bold text-center pt-24">Podcast : Frederic Le Moigne </h3>
            <video width="320" height="240" controls >
                <source src="FredericleMoigne.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
export default Podcast;