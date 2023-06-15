import React from 'react';
import { useTheme, useThemeUpdate } from '../../contexts/ThemeContext';
import './Top.scss';

const Top = () => {
    const theme = useTheme();
    const themeUpdate = useThemeUpdate();

    const circlePosition = [
        {
            left: '6px'
        },
        {
            left: '50%',
            translate: '-50%'
        },
        {
            left: 'calc(100% - 6px)',
            translate: '-100%'
        }
    ];

    const handleThemeChange = (e) => {
        themeUpdate(parseInt(e.target.value));
    };

    return (
        <div className="top">
            <p className="name">calc</p>
            <div className="theme">
                <p>Theme</p>

                <div className="themeSwitch">
                    <div className="value">
                        <label htmlFor="theme-1">1</label>
                        <input
                            type="radio"
                            name="theme"
                            id="theme-1"
                            value={0}
                            checked={theme == 0}
                            onChange={handleThemeChange}
                        />
                    </div>
                    <div className="value">
                        <label htmlFor="theme-2">2</label>
                        <input
                            type="radio"
                            name="theme"
                            id="theme-2"
                            value={1}
                            checked={theme == 1}
                            onChange={handleThemeChange}
                        />
                    </div>
                    <div className="value">
                        <label htmlFor="theme-3">3</label>
                        <input
                            type="radio"
                            name="theme"
                            id="theme-3"
                            value={2}
                            checked={theme == 2}
                            onChange={handleThemeChange}
                        />
                    </div>
                    <div className="circle" style={circlePosition[theme]}></div>
                </div>
            </div>
        </div>
    );
};

export default Top;
