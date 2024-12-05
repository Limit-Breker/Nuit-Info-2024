
import { useState, useEffect } from "react";
import HeaderAccueil from "../../components/header_footer/headerAccueil";

const Accueil: React.FC = () => {

    // bateau track cursor
    const [mouseX, setMouseX] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMouseX(event.clientX);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    const leftMargin = 100; // Marge gauche (bordure)
    const rightMargin = 100; // Marge droite (bordure)
    const maxLeft = Math.max(leftMargin, mouseX - 465); // Position minimale (gauche)
    const maxRight = Math.min(mouseX - 250, window.innerWidth - rightMargin - 200); // Position maximale (droite)

    return (
        <div className="flex-col flex items-center justify-start w-full max-w-[100vw] overflow-x-hidden">
            <HeaderAccueil />
            <div className="bg-normal-blue min-h-[100vh] pt-24 overflow-hidden w-full max-w-[100vw] relative">
                <img
                    src={process.env.PUBLIC_URL + "/images/vrai_bateau.svg"}
                    alt="accueil"
                    style={{
                        position: 'absolute',
                        left: `${Math.max(maxLeft, Math.min(maxRight, window.innerWidth - 500))}px`,
                        transition: 'left 0.3s ease-out',
                        animation: 'tangage 2s infinite ease-in-out',
                    }}
                />
            </div>
        </div>
    );
};
export default Accueil;