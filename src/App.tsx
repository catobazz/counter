import React, { ChangeEvent, useState, useEffect } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(5);
    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [maxInputError, setMaxInputError] = useState<boolean>(false);

    const handlerMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(event.target.value));
    };

    const handlerMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputStartValue(Number(event.target.value));
    };

    const SetValue = () => {
        if (!maxInputError) {
            setCounter(inputStartValue);
        }
    };

    const increase = () => {
        if (counter + inputStartValue <= inputMaxValue) {
            setCounter(count => count + inputStartValue);
        }
    };

    const reset = () => {
        setCounter(0);
    };

    useEffect(() => {
        setMaxInputError(inputStartValue >= inputMaxValue);
    }, [inputMaxValue, inputStartValue]);

    return (
        <div className="App">
            <div className="counter">
                <div className="left_container">
                    <div className="counter_input">
                        <div>
                            <label htmlFor="max">max value: </label>
                            <input
                                id="max"
                                className={`_input-small ${maxInputError ? 'error' : ''}`}
                                type="number"
                                value={inputMaxValue}
                                onChange={handlerMaxInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="min">start value: </label>
                            <input
                                id="min"
                                className={`_input-small ${maxInputError ? 'error' : ''}`}
                                type="number"
                                value={inputStartValue}
                                onChange={handlerMinInputChange}
                            />
                        </div>
                    </div>
                    {maxInputError && (
                        <div className="error-message">Start value must be less than max value</div>
                    )}
                    <div className="counter_set">
                        <button onClick={SetValue} disabled={maxInputError}>Set</button>
                    </div>
                </div>
                <div className="right_container">
                    <div>
                        <span className="counter_output">{counter}</span>
                    </div>
                    <div className="counter_set">
                        <button
                            className="control__btn"
                            onClick={increase}
                            disabled={counter + inputStartValue > inputMaxValue || maxInputError}
                        >
                            inc
                        </button>
                        <button className="reset" onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
