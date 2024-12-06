import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil/accueil';
import Test from './pages/test/test';
import Dialogue from './pages/dialogues/dialogue';
import Credit from './pages/credit/Credit';
import CookieClicker from './pages/cookieClicker/CookieClicker';
import CookieClic from './pages/cookieClicker/CookieClic';
import Port from "./pages/port/Port";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">

                {/* Contenu des pages géré par les routes */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="*" element={<CookieClic />} />
                        <Route path="/cookieClicker" element={<CookieClic />} />
                        <Route path="/dialogue" element={<Dialogue />} />
                        <Route path="/credit" element={<Credit />} />
                        <Route path="/port" element={<Port />} />
                    </Routes>
                </div>

            </div>

        </Router>
    );
};

export default App;