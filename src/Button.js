import React, {useState} from 'react';


function Button() {
    const [number, setNumber] = useState(0);
    const [numer, setNumer] = useState(0);

    return (
        <div className="App">
            <div>{number}</div>
            <button
                onClick={() => setNumber(number + 1)}
            >
                +
            </button>
            <button
                onClick={() => setNumber(number - 1)}
            >
                -
            </button>
            <p><button onClick={() => setNumer(numer + 1)}>
                {numer}
            </button></p>

        </div>

    );
}
export default Button;