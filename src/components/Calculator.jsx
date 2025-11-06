import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumber = (num) => {
        setValue(value === "0" ? String(num) : value + num);
    };

    const handleClear = () => {
        setValue("0");
        setMemory(null);
        setOperator(null);
    };

    const handleOperator = (op) => {
        setOperator(op);
        setMemory(parseFloat(value));
        setValue("0");
    };

    const handleEqual = () => {
        if (operator && memory !== null) {
            const currentValue = parseFloat(value);
            let result = 0;

            switch (operator) {
                case "+":
                    result = memory + currentValue;
                    break;
                case "-":
                    result = memory - currentValue;
                    break;
                case "*":
                    result = memory * currentValue;
                    break;
                case "/":
                    result = memory / currentValue;
                    break;
                default:
                    return;
            }
            
            setValue(String(result));
            setOperator(null);
            setMemory(null);
        }    
};
    const handleDecimal = () => {
        if (!value.includes(".")) setValue(value + ".");
    };
    const handleToggle = () => {
        setValue(String(parseFloat(value) * -1));
    };

    return (
        <div className="calculator">
           <div className="display">{value}</div>

           <div className="buttons">
            <button className="light-gray" onClick={handleClear}>AC</button> 
            <button className="light-gray" onClick={handleToggle}>±</button> 
            <button className="light-gray" onClick={() => handleOperator("%")}>%</button> 
            <button className="orange" onClick={() => handleOperator("/")}>÷</button> 

            <button onClick={() => handleNumber(7)}>7</button>
            <button onClick={() => handleNumber(8)}>8</button>
            <button onClick={() => handleNumber(9)}>9</button>
            <button className="orange" onClick={() => handleOperator("*")}>×</button>

            <button onClick={() => handleNumber(4)}>4</button>
            <button onClick={() => handleNumber(5)}>5</button>
            <button onClick={() => handleNumber(6)}>6</button>
            <button className="orange" onClick={() => handleOperator("-")}>−</button>

            <button onClick={() => handleNumber(1)}>1</button>
            <button onClick={() => handleNumber(2)}>2</button>
            <button onClick={() => handleNumber(3)}>3</button>
            <button className="orange" onClick={() => handleOperator("+")}>+</button>

            <button className="zero" onClick={() => handleNumber(0)}>0</button>
            <button onClick={handleDecimal}>.</button>
            <button className="orange" onClick={handleEqual}>=</button> 
           </div> 
        </div>
    );
}

export default Calculator;

// Note: The code above is a simple calculator component in React. It handles basic arithmetic operations and includes a display for the current input. The styles are assumed to be defined in "Calculator.css". Adjust the styles and functionality as needed for your application.
// The calculator supports addition, subtraction, multiplication, and division, along with memory functionality and a toggle for negative values. The input is managed using React's useState hook.

// To use this component, import it into your main application file (e.g., App.js) and include it in the JSX:
// import Calculator from './Calculator';
// ...
// <Calculator />