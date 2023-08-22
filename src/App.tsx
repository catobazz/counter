import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0)
    const [inputMinValue, setInputMinValue] = useState<number>(0)

    // Обработчик изменения значения ввода
    const handlerMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(event.target.value)) // Обновляем состояние inputValue с значением из поля ввода
    }

    const handlerMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(Number(event.target.value)) // Обновляем состояние inputValue с значением из поля ввода
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

    }

    return (
        <div className="App">
            <div className='counter'>
                <div className="left_container">
                    <div className='counter_input'>
                        <input className='_input' type="number" style={{textAlign: "center"}} value={inputMaxValue} onChange={handlerMaxInputChange} />
                        <input className='_input' type="number" style={{textAlign: "center"}} value={inputMinValue} onChange={handlerMinInputChange} />
                    </div>
                    <div className='counter_set'>
                        <button onClick={SetValue}>Set</button>
                    </div>
                </div>
                <div className="right_container">
                    <div >
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