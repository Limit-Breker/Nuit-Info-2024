import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Confirm from "../confirm/confirm";

interface HeaderProps {
}

const HeaderAccueil: React.FC<HeaderProps> = ({  }) => {
    const navigate = useNavigate();

    function toTest() {
        navigate('/test');
    }

    return (
        <header className="bg-main-dark text-font_color p-4 pt-5 h-10p flex justify-between px-16">
            <div>
                <h1 className="text-3xl  font-bold text-font-color">Nuit de l'info 2024 header</h1>
            </div>
            <div className="flex">
                <Confirm title="Demo redirection" couleur="green" onClick={toTest} classNameAddon="flex-1"/>
            </div>
        </header>
    );
};

export default HeaderAccueil;
