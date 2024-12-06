import React, { useState, useRef, useEffect } from "react";
import Board from "./Board";

const MyComponent: React.FC = () => {




    


    return (
        <div
            style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}
            tabIndex={-1} // Pour capturer les événements clavier
        >
            <Board />
        </div>

    );
};

export default MyComponent;
