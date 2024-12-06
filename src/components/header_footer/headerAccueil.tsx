import React from "react";
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
        <header className="bg-none backdrop-blur p-4 md:p-6 flex flex-col md:flex-row justify-between px-4 md:px-16 fixed top-0 left-0 w-full z-50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 gap-x-4 md:gap-x-16">
                <h1 className="text-xl md:text-3xl font-bold text-normal-blue text-center md:text-left">Nuit de l'info 2024 | Limit Breker</h1>
                <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-5 bg-light-gray/40 px-3 md:px-5 py-2.5 md:py-2 rounded-jb">
                    <Link to="/" className={`${location.pathname === "/" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-sm md:text-base`}>Accueil</Link>
                    <Link to="/credit" className={`${location.pathname === "/credit" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-sm md:text-base`}>Crédits</Link>
                    <Link to="/captcha" className={`${location.pathname === "/captcha" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-sm md:text-base`}>Captcha</Link>
                    <Link to="/cookieClicker" className={`${location.pathname === "/cookieClicker" ? "text-normal-blue" : "text-black"} hover:text-normal-blue transition-colors font-Lato font-semibold text-sm md:text-base`}>CookieClicker</Link>
                    <Link to="/podcast" className="text-black hover:text-normal-blue transition-colors font-Lato font-semibold text-sm md:text-base">Podcast</Link>
                    <Link to="/port" className="text-black hover:text-normal-blue transition-colors font-Lato font-semibold text-sm md:text-base">Retrogaming</Link>
                </div>
            </div>
            <div className="mt-4 md:mt-0">
                <Confirm title="C'est parti !" couleur="blue" onClick={dialogue} />
            </div>
        </header>
    );
};

export default HeaderAccueil;
