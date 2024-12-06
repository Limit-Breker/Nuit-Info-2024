import React, { useState, useRef, useEffect } from "react";
import Board from "./Board";
import HeaderAccueil from "../../components/header_footer/headerAccueil";

const MyComponent: React.FC = () => {




    


    return (
        <div
            style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}
            tabIndex={-1} // Pour capturer les événements clavier
            
        >
            <HeaderAccueil />
            <Board />
        </div>

    );
};

export default MyComponent;
