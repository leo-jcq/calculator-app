import React from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './contexts/ThemeContext';
import App from './components/App/App';

const Index = () => {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
};

createRoot(document.getElementById('root')).render(<Index />);
