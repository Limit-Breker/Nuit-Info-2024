import React, { useState, useEffect } from "react";

const CookieClicker: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [cps, setCps] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1 * multiplier);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks((prevClicks) => prevClicks + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, [cps]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-64 h-64">
          <img
            id="donut"
            src="/path/to/donut.png"
            alt="Donut"
            className="w-full h-full object-contain cursor-pointer transition-transform duration-300 transform hover:scale-110"
            onClick={handleClick}
          />
        </div>
        <div id="clicks" className="text-2xl">
          Clicks: <span className="text-yellow-400">{clicks}</span>
        </div>
        <div id="cps" className="text-xl text-gray-400">
          CPS: {cps}
        </div>
        <div id="multiplier" className="text-xl text-green-400">
          Multiplier: x{multiplier}
        </div>
        <button
          className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400"
          onClick={() => setMultiplier((prev) => prev + 1)}
        >
          Increase Multiplier
        </button>
        <button
          className="bg-blue-500 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-400"
          onClick={() => setCps((prev) => prev + 1)}
        >
          Add Auto-Clicker
        </button>
      </div>
    </div>
  );
};

export default CookieClicker;
