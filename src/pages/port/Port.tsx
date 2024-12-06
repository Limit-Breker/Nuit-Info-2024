import { useNavigate } from "react-router-dom";
import HeaderAccueil from "../../components/header_footer/headerAccueil";
import React, { useEffect, useState } from "react";

const Port: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const halfScreen = window.innerWidth / 2;

            if (event.clientY < 100) {
                return;
            }

            if (event.clientX > halfScreen - 150) {
                window.open('https://modx-catamarans.com/', '_blank');
            } else {
                window.open('https://www.raceforwater.org/fr/odyssee-2017-2021/', '_blank');
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="flex-col flex items-center justify-start overflow-x-hidden relative bg-black">
            <HeaderAccueil />
            <img src="port.png" alt="port" className="w-full h-full object-cover" />
        </div>

    );
};
export default Port;