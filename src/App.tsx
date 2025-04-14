import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(5);
    const [inputStepValue, setInputStepValue] = useState<number>(1);

    const [maxValue, setMaxValue] = useState<number>(5);
    const [stepValue, setStepValue] = useState<number>(1);

    const [inputError, setInputError] = useState<boolean>(false);

    const handlerMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(event.target.value));
    };

    const handlerStepInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputStepValue(Number(event.target.value));
    };

    const handleSet = () => {
        if (!inputError) {
            setMaxValue(inputMaxValue);
            setStepValue(inputStepValue);
            setCounter(0); // сбросить счётчик
        }
    };

    const increase = () => {
        if (counter + stepValue <= maxValue) {
            setCounter(prev => prev + stepValue);
        }
    };

    const reset = () => {
        setCounter(0);
    };

    useEffect(() => {
        setInputError(inputStepValue <= 0 || inputMaxValue <= 0);
    }, [inputMaxValue, inputStepValue]);

    return (
        <div className="App">
            <div className="counter">
                <div className="left_container">
                    <div className="counter_input">
                        <div>
                            <label htmlFor="max">max value: </label>
                            <input
                                id="max"
                                className={`_input-small ${inputError ? 'error' : ''}`}
                                type="number"
                                value={inputMaxValue}
                                onChange={handlerMaxInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="step">step value: </label>
                            <input
                                id="step"
                                className={`_input-small ${inputError ? 'error' : ''}`}
                                type="number"
                                value={inputStepValue}
                                onChange={handlerStepInputChange}
                            />
                        </div>
                    </div>
                    <div className="error-placeholder">
                        {inputError && <div className="error-message">Max and Step must be &gt; 0</div>}
                    </div>
                    <div className="counter_set">
                        <button onClick={handleSet} disabled={inputError}>Set</button>
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
                            disabled={counter + stepValue > maxValue || inputError}
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
