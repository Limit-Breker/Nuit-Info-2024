import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Confirm from "../confirm/confirm";

interface HeaderProps {
}

const HeaderAccueil: React.FC<HeaderProps> = ({ }) => {
    const navigate = useNavigate();

    function toTest() {
        navigate('/test');
    }

    return (
        <header className="bg-none backdrop-blur text-font_color p-4 pt-5 h-10p flex justify-between px-16 fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-center gap-x-16">
                <h1 className="text-3xl font-bold text-normal-blue">Nuit de l'info 2024</h1>
                <div className="flex items-center justify-center gap-x-5 bg-light-gray/40 px-5 py-2.5 rounded-jb">
                    <Link to="/" className="text-black hover:text-normal-blue transition-colors font-Lato font-semibold text-base">Accueil</Link>
                    <Link to="/credit" className="text-black hover:text-normal-blue transition-colors font-Lato font-semibold text-base">Crédits</Link>
                    <Link to="/captcha" className="text-black hover:text-normal-blue transition-colors font-Lato font-semibold text-base">Captcha</Link>
                </div>
            </div>
            <Confirm title="Demo redirection" couleur="blue" onClick={toTest} />
        </header>
    );
};

export default HeaderAccueil;
