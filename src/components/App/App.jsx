import React from 'react';
import { THEMES, useTheme } from '../../contexts/ThemeContext';
import Calculator from '../Calculator/Calculator';
import Top from '../Top/Top';
import './App.scss';

const App = () => {
    const theme = useTheme();

    return (
        <div className="app" style={THEMES[theme]}>
            <main className="main">
                <Top />
                <Calculator />
            </main>
        </div>
    );
};

export default App;
