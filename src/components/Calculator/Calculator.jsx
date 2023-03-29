import React, { useState } from 'react';
import './Calculator.scss';

/** @type {RegExp} A regular expression to match a compute */
const computeRegex = /(\d+)([+\-*/])(\d+)$/;

/**
 * Replace the dot with a comma and the multiplication sign with an x
 *
 * @param {string} compute The string to be converted
 * @return {string} The converted string
 */
function evaltoScreen(compute) {
    return compute.replace('.', ',').replace('*', 'x');
}

/**
 * Replace the comma with a dot and the multiplication sign with an x
 *
 * @param {string} compute The string to be converted
 * @return {string} The converted string
 */
function screenToEval(compute) {
    return compute.replace(',', '.').replace('x', '*');
}

const Calculator = () => {
    const [screen, setScreen] = useState('');

    const handleOperatorClick = (e) => {
        setScreen(evaltoScreen(screen + (e.target.value || e.target.innerHTML)));
    };

    const handleDel = () => {
        setScreen(screen.slice(0, screen.length - 1));
    };

    const handleReset = () => {
        setScreen('');
    };

    const handleEqual = () => {
        // Verify that the screen is a compute
        const compute = screenToEval(screen);
        if (!computeRegex.test(compute)) {
            // If not, display an error
            setScreen('Invalid expression');
            return;
        }
        try {
            // If it is, evaluate the compute
            const result = eval(compute);
            const resultString = result.toString();
            setScreen(evaltoScreen(resultString));
        } catch (e) {
            // If an error occurs, display an error
            setScreen('Error');
        }
    };

    return (
        <div>
            <div className="calculator">
                <div className="screen">{screen}</div>

                <div className="buttons">
                    <button className="button" onClick={handleOperatorClick}>
                        7
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        8
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        9
                    </button>
                    <button className="button delete" onClick={handleDel}>
                        Del
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        4
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        5
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        6
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        +
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        1
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        2
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        3
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        -
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        .
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        0
                    </button>
                    <button className="button" onClick={handleOperatorClick}>
                        /
                    </button>
                    <button className="button" value="*" onClick={handleOperatorClick}>
                        x
                    </button>
                    <button className="button reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="button equal" onClick={handleEqual}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
