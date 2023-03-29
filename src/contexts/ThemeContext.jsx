import React, { useContext, useState } from 'react';

export const THEMES = [
    {
        '--main-bg': 'hsl(222, 26%, 31%)',
        '--toggle-bg': 'hsl(223, 31%, 20%)',
        '--screen-bg': 'hsl(224, 36%, 15%)',
        '--top-color': 'hsl(0, 0%, 100%)',

        '--first-key-bg': 'hsl(30, 25%, 89%)',
        '--first-key-shadow': 'hsl(28, 16%, 65%)',
        '--first-key-color': 'hsl(60, 10%, 19%)',

        '--second-key-bg': 'hsl(225, 21%, 49%)',
        '--second-key-shadow': 'hsl(224, 28%, 35%)',
        '--second-key-color': 'hsl(0, 0%, 100%)',

        '--third-key-bg': 'hsl(6, 63%, 50%)',
        '--third-key-shadow': 'hsl(6, 70%, 34%)',
        '--third-key-color': 'hsl(0, 0%, 100%)'
    },
    {
        '--main-bg': 'hsl(0, 0%, 90%)',
        '--toggle-bg': 'hsl(0, 5%, 81%)',
        '--screen-bg': 'hsl(0, 0%, 93%)',
        '--top-color': 'hsl(60, 10%, 19%)',

        '--first-key-bg': 'hsl(45, 7%, 89%)',
        '--first-key-shadow': 'hsl(35, 11%, 61%)',
        '--first-key-color': 'hsl(60, 10%, 19%)',

        '--second-key-bg': 'hsl(185, 42%, 37%)',
        '--second-key-shadow': 'hsl(185, 58%, 25%)',
        '--second-key-color': 'hsl(0, 0%, 100%)',

        '--third-key-bg': 'hsl(25, 98%, 40%)',
        '--third-key-shadow': 'hsl(25, 99%, 27%)',
        '--third-key-color': 'hsl(0, 0%, 100%)'
    },
    {
        '--main-bg': 'hsl(268, 75%, 9%)',
        '--toggle-bg': 'hsl(268, 71%, 12%)',
        '--screen-bg': 'hsl(268, 71%, 12%)',
        '--top-color': 'hsl(52, 100%, 62%)',

        '--first-key-bg': 'hsl(268, 47%, 21%)',
        '--first-key-shadow': 'hsl(290, 70%, 36%)',
        '--first-key-color': 'hsl(52, 100%, 62%)',

        '--second-key-bg': 'hsl(281, 89%, 26%)',
        '--second-key-shadow': 'hsl(285, 91%, 52%)',
        '--second-key-color': 'hsl(0, 0%, 100%)',

        '--third-key-bg': 'hsl(176, 100%, 44%)',
        '--third-key-shadow': 'hsl(177, 92%, 70%)',
        '--third-key-color': 'hsl(198, 20%, 13%)'
    }
];

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

/**
 * Access to the theme context
 *
 * @return {number} The theme context
 */
export function useTheme() {
    return useContext(ThemeContext);
}

/**
 * Access to the theme context updater
 *
 * @return {React.Dispatch<React.SetStateAction<number>>} The theme context updater
 */
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(0);

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ThemeUpdateContext.Provider value={setTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}
