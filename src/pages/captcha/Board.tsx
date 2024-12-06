import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState, useEffect } from "react";

const Board: React.FC = () => {
    const [icebergs, setIcebergs] = useState<{ x: number; y: number }[]>([]);
    const [visibleCount, setVisibleCount] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
        
    // État pour stocker la position de l'image
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        const step = 10; // Pas de déplacement en pixels
        switch (e.key) {
          case "ArrowRight":
            setPosition((prev) => ({ ...prev, x: prev.x + step })); // Déplacement vers la droite
            break;
          case "ArrowLeft":
            setPosition((prev) => ({ ...prev, x: prev.x - step })); // Déplacement vers la gauche
            break;
          case "ArrowDown":
            setPosition((prev) => ({ ...prev, y: prev.y + step })); // Déplacement vers le bas
            break;
          case "ArrowUp":
            setPosition((prev) => ({ ...prev, y: prev.y - step })); // Déplacement vers le haut
            break;
          default:
            break;
        }
      };
    const generateIcebergs = () => {
        const positions = [];
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * 20;
            const y = Math.random() * 50;
            positions.push({ x, y });
        }
        return positions;
    };

    useEffect(() => {
        const generatedIcebergs = generateIcebergs();
        setIcebergs(generatedIcebergs);

        // Interval to reveal icebergs one by one
        const interval = setInterval(() => {
            setVisibleCount((prevCount) => {
                if (prevCount < generatedIcebergs.length) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 2000); // Delay of 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setIcebergs((prevIcebergs) =>
                prevIcebergs.map((iceberg, index) => {
                    if (index < visibleCount && iceberg.x < 50) {
                        return { ...iceberg, x: iceberg.x + 0.2, y: iceberg.y + 0.2 };
                    }
                    return iceberg;
                })
            );
        }, 100);

        return () => clearInterval(moveInterval);
    }, [visibleCount]);

    return (
        <div>
             <div>
            <p>Progress:</p>
            <ProgressBar completed={progressValue} width="50vw" />
        </div>
        <div style={{ backgroundImage: "url('/images/captcha/eau.png')", backgroundSize: "cover", width: "50vw", height: "100vh" }}>
            <img
        src="/images/captcha/boat.png"
        alt="Image to move"
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 0.1s, top 0.1s", // Optionnel : animation fluide
        }}
        tabIndex={0} // Permet à l'image de recevoir le focus
        onKeyDown={handleKeyDown}
      />
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                {icebergs.slice(0, visibleCount).map((iceberg, index) => (
                    <img
                        key={index}
                        className="w-20 h-20"
                        src="/images/captcha/iceberg.png"
                        alt="iceberg"
                        style={{
                            position: "absolute",
                            left: `${iceberg.x}vw`,
                            top: `${iceberg.y}vh`,
                            transition: "left 0.1s, top 0.1s",
                        }}
                    />
                ))}
            </div>
        </div>
       
        </div>
    );
};

export default Board;
