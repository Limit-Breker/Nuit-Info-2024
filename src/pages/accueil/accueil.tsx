
import { useState, useEffect } from "react";
import HeaderAccueil from "../../components/header_footer/headerAccueil";
import ParallaxOcean from "../../components/ParallaxOcean";

const Accueil: React.FC = () => {

    return (
        <div className="flex-col flex items-center justify-start w-full max-w-[100vw] overflow-x-hidden relative">
            <HeaderAccueil />

            <ParallaxOcean isFixBoat={false} />
        </div>
    );
};
export default Accueil;