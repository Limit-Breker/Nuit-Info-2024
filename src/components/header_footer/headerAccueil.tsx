import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Confirm from "../confirm/confirm";

interface HeaderProps {
}

const HeaderAccueil: React.FC<HeaderProps> = ({ }) => {
    const navigate = useNavigate();
    const location = useLocation();

    function dialogue() {
        navigate('/dialogue');
    }

    return (
        <header className="bg-none backdrop-blur p-6 flex justify-between px-16 fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-center gap-x-16">
                <h1 className="text-3xl font-bold text-normal-blue">Nuit de l'info 2024 | Limit Breker</h1>
                <div className="flex items-center justify-center gap-x-5 bg-light-gray/40 px-5 py-2.5 rounded-jb">
                    <Link to="/" className={`${location.pathname === "/" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-base`}>Accueil</Link>
                    <Link to="/credit" className={`${location.pathname === "/credit" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-base`}>Crédits</Link>
                    <Link to="/captcha" className={`${location.pathname === "/captcha" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-base`}>Captcha</Link>
                    <Link to="/cookieClicker" className={`${location.pathname === "/cookieClicker" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-base`}>CookieClicker</Link>
                    <Link to="/podcast" className="text-black hover:text-normal-blue transition-colors font-Lato font-semibold text-base">Podcast</Link>
                </div>
            </div>
            <Confirm title="C'est parti !" couleur="blue" onClick={dialogue} />
        </header>
    );
};

export default HeaderAccueil;
