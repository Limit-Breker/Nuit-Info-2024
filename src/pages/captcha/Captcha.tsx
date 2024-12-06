import React, { useState } from "react";
import Board from "./Board";

const MyComponent: React.FC = () => {

 

  return (
    <div 
      style={{ position: "relative"}} 
      tabIndex={0} // Pour capturer les événements clavier
    >
      
      <Board />
    </div>
  );
};

export default MyComponent;
