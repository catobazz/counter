import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0)
    const [inputStartValue, setInputStartValue] = useState<number>(0)


    // Обработчик изменения значения ввода
    const handlerMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(event.target.value)) // Обновляем состояние inputValue с значением из поля ввода
    }

    const handlerMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputStartValue(Number(event.target.value)) // Обновляем состояние inputValue с значением из поля ввода
    }

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //reset counter
    const reset = () => {
        setCounter(0)
    }
    const SetValue = () => {
        setCounter(inputStartValue)
    }

    return (
        <div className="App">
            <div className='counter'>
                <div className="left_container">
                    <div className='counter_input'>
                        <div>
                            <label htmlFor="max">max value: </label>
                            <input id="max" className='_input-small' type="number" value={inputMaxValue} onChange={handlerMaxInputChange}/>
                        </div>
                        <div>
                            <label htmlFor="min">start value: </label>
                            <input id="min" className='_input-small' type="number" value={inputStartValue} onChange={handlerMinInputChange}/>
                        </div>
                    </div>
                    <div className='counter_set'>
                        <button onClick={SetValue}>Set</button>
                    </div>
                </div>
                <div className="right_container">
                    <div>
                        <span className="counter_output">{counter}</span>
                    </div>
                    <div className='counter_set'>
                        <button className="control__btn" onClick={increase}>inc</button>
                        <button className="reset" onClick={reset}>Reset</button>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default App;