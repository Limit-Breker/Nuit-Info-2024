import { useState, useEffect } from "react";
import HeaderAccueil from "../../components/header_footer/headerAccueil";
import ParallaxOcean from "../../components/ParallaxOcean";

const Podcast: React.FC = () => {

    return (
    
        <div className="flex-col flex items-center justify-end pt-24 w-full max-w-[100vw] overflow-hidden relative min-h-[100vh] bg-gray-800">
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