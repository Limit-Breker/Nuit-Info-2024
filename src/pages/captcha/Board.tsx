import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState, useEffect } from "react";

const Board: React.FC = () => {
  const [icebergs, setIcebergs] = useState<{ x: number; y: number }[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  // Position initiale du bateau
  const [position, setPosition] = useState({ x: 10, y: 30 }); // Y positionné en bas de la mer

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 5; // Déplacement en vw/vh
    switch (e.key) {
      case "ArrowRight":
        setPosition((prev) => ({ ...prev, x: Math.min(prev.x + step, 90) })); // Limite à droite
        break;
      case "ArrowLeft":
        setPosition((prev) => ({ ...prev, x: Math.max(prev.x - step, 0) })); // Limite à gauche
        break;
      case "ArrowDown":
        setPosition((prev) => ({ ...prev, y: Math.min(prev.y + step, 90) })); // Limite en bas
        break;
      case "ArrowUp":
        setPosition((prev) => ({ ...prev, y: Math.max(prev.y - step, 0) })); // Limite en haut
        break;
      default:
        break;
    }
  };

  const generateIcebergs = () => {
    const positions = [];
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 80; // Limite dans la mer
      const y = Math.random() * 50; // Limite supérieure
      positions.push({ x, y });
    }
    return positions;
  };

  useEffect(() => {
    const generatedIcebergs = generateIcebergs();
    setIcebergs(generatedIcebergs);

    // Intervalle pour révéler les icebergs un par un
    const interval = setInterval(() => {
      setVisibleCount((prevCount) => {
        if (prevCount < generatedIcebergs.length) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 2000);

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
      <div
        style={{
          backgroundImage: "url('/images/captcha/eau.png')",
          backgroundSize: "cover",
          position: "relative",
          width: "50vw",
          height: "100vh",
          overflow: "hidden",
        }}
        tabIndex={0} // Pour capturer les événements clavier
        onKeyDown={handleKeyDown}
      >
        {/* Bateau */}
        <img
          src="/images/captcha/boat.png"
          alt="boat"
          style={{
            position: "absolute",
            left: `${position.x}vw`,
            top: `${position.y}vh`,
            width: "15vw",
            height: "15vh",
            transition: "left 0.1s, top 0.1s",
          }}
        />

        {/* Icebergs */}
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
