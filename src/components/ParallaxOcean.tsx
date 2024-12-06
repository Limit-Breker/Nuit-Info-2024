import React, { useState, useEffect } from 'react'

interface ParallaxOceanProps {
    isFixBoat: boolean;
}

const ParallaxOcean: React.FC<ParallaxOceanProps> = ({ isFixBoat }) => {

    // bateau track cursor
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY);
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
    const maxTop = 150; // Position maximale (haut)
    const maxBottom = window.innerHeight - 600; // Position maximale (bas)

    const moveRange = 200;
    const nuageOffset = -650;
    const maxLeftNuage = Math.max(-leftMargin, mouseX - 465 + nuageOffset); // Position minimale des nuages
    const maxRightNuage = Math.min(
        mouseX - 250 + nuageOffset,
        window.innerWidth - rightMargin - 200
    ); // Position maximale des nuages avec la marge droite de 100px

    const maxLeftVague = Math.max(-leftMargin, mouseX - 465); // Position minimale des nuages
    const maxRightVague = Math.min(mouseX - 250, window.innerWidth - rightMargin - 2700); // Position maximale des nuages avec la marge droite de 100px

    const birdLeft = Math.max(maxLeft, Math.min(maxRight, window.innerWidth - 500)) + 600;
    const birdTop = Math.max(maxTop, Math.min(maxBottom, mouseY - 200)) - 20;

    return (
        <div className="bg-white min-h-[100vh] pt-24 overflow-hidden w-full relative">
            <img
                src={process.env.PUBLIC_URL + "/images/ciel.svg"}
                alt="ciel"
                className="absolute top-0 left-0 w-full h-full object-cover" />
            <img
                src={process.env.PUBLIC_URL + "/images/nuages.svg"}
                alt="nuages"
                style={{
                    position: 'absolute',
                    left: `${Math.max(maxLeftNuage, Math.min(maxRightNuage, window.innerWidth - 500))}px`, // Ajuste le mouvement à gauche et droite
                    transition: 'left 3s ease-out',
                }}
                className="top-28 w-full object-cover" />

            <div className="wing left-wing" style={{
                top: `${birdTop}px`,
                left: `${birdLeft + 4}px`,
            }}>
                <div />
            </div>
            <div className="wing right-wing" style={{
                top: `${birdTop}px`,
                left: `${birdLeft}px`,
            }}>
                <div />
            </div>

            <div
                style={{
                    zIndex: 30,
                    position: 'absolute',
                    bottom: '400px',
                    left: isFixBoat ? '40%' : `${Math.max(maxLeft, Math.min(maxRight, window.innerWidth - 500))}px`,
                    transition: 'left 0.3s ease-out',
                    animation: isFixBoat ? '' : 'tangage 2s infinite ease-in-out',
                }}
            >
                <img
                    src={process.env.PUBLIC_URL + "/images/speaker/jean-marin.svg"}
                    alt="marin"
                    className='absolute top-0 left-0 h-10 w-10 object-cover'
                />
                <img
                    src={process.env.PUBLIC_URL + "/images/vrai_bateau.svg"}
                    alt="bateau" />
                <img
                    src={process.env.PUBLIC_URL + "/images/speaker/lucie.svg"}
                    alt="lucie"
                    className='absolute top-[180px] right-0 h-10 w-10 object-cover'
                />
            </div>

            <img
                src={process.env.PUBLIC_URL + "/images/vague1.svg"}
                alt="mer"
                className="absolute bottom-0 left-0 w-full h-full object-cover" />

            <img
                src={process.env.PUBLIC_URL + "/images/vague2.svg"}
                alt="vague1"
                className="bottom-12 w-full h-[80vh] object-contain z-10"
                style={{
                    position: 'absolute',
                    left: `${Math.max(maxLeftVague, Math.min(maxRightVague, window.innerWidth - 500))}px`,
                    transition: 'left 1s ease-out',
                }} />

            <img
                src={process.env.PUBLIC_URL + "/images/vague3.svg"}
                alt="vague1"
                className="bottom-0 w-full h-[90vh] object-contain z-20"
                style={{
                    position: 'absolute',
                    left: `${Math.max(maxLeftVague, Math.min(maxRightVague, window.innerWidth - 500))}px`,
                    transition: 'left 1.5s ease-out',
                }} />
        </div >
    )
}

export default ParallaxOcean;