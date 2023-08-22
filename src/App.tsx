import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);

    const [inputValue, setInputValue] = useState<number>(0)

    // Обработчик изменения значения ввода
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(event.target.value)); // Обновляем состояние inputValue с значением из поля ввода
    };

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //reset counter
    const reset = () => {
        setCounter(0)
    }
    return (
        <div className="App">
            <div className='counter'>
                <div className="left_container">
                    <div className='counter_input'>
                        <input className='_input' type="number" style={{textAlign: "center"}} value={inputValue} onChange={handleInputChange}/>
                        <input className='_input' type="number" style={{textAlign: "center"}} value={inputValue} onChange={handleInputChange}/>
                    </div>
                    <div className='counter_set'>
                        <button onClick={reset}>Set</button>
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