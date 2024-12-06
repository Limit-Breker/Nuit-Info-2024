
import { useState, useEffect } from "react";
import HeaderAccueil from "../../components/header_footer/headerAccueil";
import ParallaxOcean from "../../components/ParallaxOcean";

const Podcast: React.FC = () => {

    return (
        <div className="flex-col flex items-center justify-start w-full max-w-[100vw] overflow-x-hidden relative">
            <HeaderAccueil />

            <a href="https://www.youtube.com/watch?v=Zvz2Jz9oT2k" target="_blank" rel="noreferrer">podcast 1
            </a>
        </div>
    );
};
export default Podcast;