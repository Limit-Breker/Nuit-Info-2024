import React, { useState, useEffect } from "react";

const CookieClic: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [cps, setCps] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [costAutoClicker, setCostAutoClicker] = useState(100);
  const [costMultiplier, setCostMultiplier] = useState(10);
  const [positions, setPositions] = useState({
    image: { x: 0, y: 0 },
    clicks: { x: 0, y: 0 },
    cps: { x: 0, y: 0 },
    multiplier: { x: 0, y: 0 },
    button1: { x: 0, y: 0 },
    button2: { x: 0, y: 0 },
  });

  const getRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 100) + 50; // Avoid edges
    const y = Math.random() * (window.innerHeight - 100) + 50;
    return { x, y };
  };

  const updatePositions = () => {
    setPositions({
      image: getRandomPosition(),
      clicks: getRandomPosition(),
      cps: getRandomPosition(),
      multiplier: getRandomPosition(),
      button1: getRandomPosition(),
      button2: getRandomPosition(),
    });
  };

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1 * multiplier);

    // Play a random sound
    const sounds = ["audio", "audio2", "audio3", "audio4"];
    const randomSound = document.getElementById(
      sounds[Math.floor(Math.random() * sounds.length)]
    ) as HTMLAudioElement;
    randomSound.play();

    updatePositions();
  };

  const handleMissClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const whaleElement = document.getElementById("donut");
    if (whaleElement && !whaleElement.contains(event.target as Node)) {
      alert("Oops ! Vous avez raté le requin baleine! Comment osez vous faire cet afront à la nature ! On remets votre score à 0");
      setClicks(0);
      setCps(0);
      setMultiplier(1);
      setCostAutoClicker(100);
      setCostMultiplier(10);
    }
  };

  const handleAutoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (clicks >= costAutoClicker) {
      setClicks((prevClicks) => prevClicks - costAutoClicker);
      setCps((prevCps) => prevCps + 1);
      setCostAutoClicker((prevCostAutoClicker) => Math.round(prevCostAutoClicker * 1.5));
      updatePositions();
    }
  };

  const handleMultClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (clicks >= costMultiplier) {
      setClicks((prevClicks) => prevClicks - costMultiplier);
      setMultiplier((prevMultiplier) => prevMultiplier + 1);
      setCostMultiplier((prevCostMultiplier) => Math.round(prevCostMultiplier * 1.5));
      updatePositions();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks((prevClicks) => prevClicks + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, [cps]);

  const getPositionStyle = (pos: { x: number; y: number }) => ({
    position: "absolute" as "absolute",
    top: `${pos.y}px`,
    left: `${pos.x}px`,
    transform: "translate(-50%, -50%)",
    transition: "all 0.5s ease",
  });

  return (
    <div
      className="relative w-screen h-screen bg-gray-800 text-white overflow-hidden"
      onClick={handleMissClick} // Detect missed clicks here
    >
      <div
        className="relative w-64 h-64 cursor-pointer"
        style={getPositionStyle(positions.image)}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from propagating to the parent
          handleClick();
        }}
      >
        <img
          id="donut"
          src="/requin_baleine.png"
          alt="Requin Baleine.png"
          className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-110"
        />
        <audio id="audio" src="/bruitbaleine1.mp4" />
        <audio id="audio2" src="/bruitbaleine2.mp4" />
        <audio id="audio3" src="/bruitbaleine3.mp4" />
        <audio id="audio4" src="/bruitbaleine4.mp4" />
      </div>

      <div
        id="clicks"
        className="text-2xl text-yellow-400"
        style={getPositionStyle(positions.clicks)}
      >
        Requin Baleines: {clicks}
      </div>

      <div
        id="cps"
        className="text-xl text-gray-400"
        style={getPositionStyle(positions.cps)}
      >
        CPS: {cps}
      </div>

      <div
        id="multiplier"
        className="text-xl text-green-400"
        style={getPositionStyle(positions.multiplier)}
      >
        Multiplier: x{multiplier}
      </div>

      <button
        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 flex items-center justify-center space-x-2"
        onClick={handleMultClick}
        style={getPositionStyle(positions.button1)}
      >
        <span>Increase Multiplier</span>
        <span className="flex items-center space-x-1">
          <span>{costMultiplier}</span>
          <img
            id="multiplier-icon"
            src="/requin_baleine.png"
            alt="Requin Baleine.png"
            className="w-8 h-8"
          />
        </span>
      </button>

      <button
        className="bg-blue-500 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-400 flex items-center justify-center space-x-2"
        onClick={handleAutoClick}
        style={getPositionStyle(positions.button2)}
      >
        <span>Add Auto-Clicker</span>
        <span className="flex items-center space-x-1">
          <span>{costAutoClicker}</span>
          <img
            id="autoclicker-icon"
            src="/requin_baleine.png"
            alt="Requin Baleine.png"
            className="w-8 h-8"
          />
        </span>
      </button>
    </div>
  );
};

export default CookieClic;
