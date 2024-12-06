import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil/accueil';
import Test from './pages/test/test';
import Dialogue from './pages/dialogues/dialogue';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">

                {/* Contenu des pages géré par les routes */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="/dialogue1" element={<Dialogue />} />
                        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
                    </Routes>
                </div>

            </div>

        </Router>
    );
};

export default App;