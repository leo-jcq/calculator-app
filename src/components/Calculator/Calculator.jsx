import React, { useState } from 'react';
import computeRegExp from '../../constants/computeRegExp';
import { error, invalid } from '../../constants/invalids';
import evaltoScreen from '../../helpers/evaltoScreen';
import screenToEval from '../../helpers/screenToEval';
import './Calculator.scss';

const Calculator = () => {
    const [screen, setScreen] = useState('');

    const handleOperatorClick = (e) =>
        setScreen((prevScreen) =>
            prevScreen === invalid || prevScreen === error || prevScreen == Infinity
                ? e.target.innerHTML
                : prevScreen + e.target.innerHTML
        );

    const handleDel = () =>
        setScreen((prevScreen) =>
            prevScreen === invalid || prevScreen === error || prevScreen == Infinity
                ? ''
                : prevScreen.slice(0, screen.length - 1)
        );

    const handleReset = () => setScreen('');

    const handleEqual = () => {
        // Verify that the screen is a compute
        const compute = screenToEval(screen);
        if (!computeRegExp.test(compute)) {
            // If not, display an error
            setScreen(invalid);
            return;
        }
        try {
            // If it is, evaluate the compute
            const result = eval(compute);
            const resultString = result.toString();
            setScreen(evaltoScreen(resultString));
        } catch (e) {
            // If an error occurs, display an error
            setScreen(error);
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
                    <button className="button" onClick={handleOperatorClick}>
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
