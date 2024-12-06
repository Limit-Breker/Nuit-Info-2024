import React from "react";

const MyComponent: React.FC = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed: you can run a function instead of this log statement");
    }
    if (e.key === "ArrowDown") {
      alert("blob");
    }
  };    

  return (
    <div 
      className="my-class" 
      tabIndex={0} // Permet à la div de recevoir le focus et de capturer les événements clavier.
      onKeyDown={handleKeyDown}
    >
        blob
    </div>
  );
};

export default MyComponent;
