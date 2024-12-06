import React, { useEffect } from 'react';
import HeaderAccueil from '../../components/header_footer/headerAccueil';
import './style.css';

const CookieClicker: React.FC = () => {

    return (
        <div>
            <HeaderAccueil />
            <div id="gameContainer">
                <div className="imgContainer">
                    <img id="donut" src={process.env.PUBLIC_URL + "/images/cookie/donut1.png"} alt="Donut" />
                </div>

                <div id="clicks">Donuts : <span>0</span></div>
                <div id="cps">CPS : 0</div>
                <div className="row info">
                    <div id="multiplier">Multiplier : x1</div>
                    <div id="multiplierInfo"></div>
                </div>
                <div id="autoclickerInfo">Auto-clicker : 0</div>
                <p id="farmInfo">Fermes : 0</p>
            </div>

            <div className="row main">
                <div className="row">
                    <div className="column">
                        <button id="buyX2" className="button">x2</button>
                        <div className="row">
                            <i className="fa-duotone fa-solid fa-donut"></i>
                            <p className="pX2">100</p>
                            <i className="fa-duotone fa-solid fa-donut"></i>
                        </div>
                    </div>
                    <div className="column">
                        <button id="buyX3" className="button">x3</button>
                        <div className="row">
                            <i className="fa-duotone fa-solid fa-donut"></i>
                            <p className="pX3">200</p>
                            <i className="fa-duotone fa-solid fa-donut"></i>
                        </div>
                    </div>
                    <div className="column">
                        <button id="buyX4" className="button">x4</button>
                        <div className="row">
                            <i className="fa-duotone fa-solid fa-donut"></i>
                            <p className="pX4">300</p>
                            <i className="fa-duotone fa-solid fa-donut"></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <button id="buyAutoClicker" className="button large">Auto-clicker</button>
                        <div className="row">
                            <i className="fa-duotone fa-solid fa-donut"></i>
                            <p className="autoclickerText">10 000</p>
                            <i className="fa-duotone fa-solid fa-donut"></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <button id="buyFarm" className="button large">Ferme de niveau 1</button>
                        <div className="row">
                            <i className="fa-duotone fa-solid fa-donut"></i>
                            <p className="superAutoClickerText">20 000</p>
                            <i className="fa-duotone fa-solid fa-donut"></i>
                        </div>
                    </div>
                </div>

            </div>

            <button id="newGameButton">Nouvelle Partie</button>
        </div>
    );
}

export default CookieClicker;