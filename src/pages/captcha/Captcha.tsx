import React, { useState } from "react";

const MyComponent: React.FC = () => {
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

  return (
    <div 
      style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }} 
      tabIndex={0} // Pour capturer les événements clavier
    >
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
    </div>
  );
};

export default MyComponent;
