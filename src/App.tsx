import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil/accueil';
import Test from './pages/test/test';
import CookieClicker from './pages/cookieClicker/CookieClicker';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">

                {/* Contenu des pages géré par les routes */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="*" element={<CookieClicker />} />
                    </Routes>
                </div>

            </div>

        </Router>
    );
};

export default App;