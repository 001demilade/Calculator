// Importing useState from React to manage state variables
import { useState } from "react";
import "./Calculator.css"; // Importing CSS file for styling

function Calculator() {
    // State to store the current displayed value, memory value, and the selected operator
    const [value, setValue] = useState("0");

    // State to store the previous number entered (for calculations)
    const [memory, setMemory] = useState(null);

    // State to store the selected operator (+, -, *, /)
    const [operator, setOperator] = useState(null);

     // Function that handles number button clicks (0–9)
    const handleNumber = (num) => {
        // If value is "0", replace it with the new number; otherwise, append it
        setValue(value === "0" ? String(num) : value + num);
    };

    // Function to clear everything (reset calculator)
    const handleClear = () => {
        setValue("0");  // Reset display
        setMemory(null);    // Clear stored number
        setOperator(null);   // Clear operator
    };

    // Function that handles operator button clicks (+, -, *, /)
    const handleOperator = (op) => {
        setOperator(op);    // Store operator
        setMemory(parseFloat(value));   // Store current display value as memory
        setValue("0");  // Reset display for next number input
    };

    // Function to handle when user presses "="
    const handleEqual = () => {
        if (operator && memory !== null) {
            const currentValue = parseFloat(value); // Convert current display value to number
            let result = 0;

            // Perform calculation based on operator
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
            
            // Update display with result
            setValue(String(result));
            // Reset operator and memory
            setOperator(null);
            setMemory(null);
        }    
};
    // Function to handle decimal point input
    const handleDecimal = () => {
        if (!value.includes(".")) setValue(value + ".");
    };
    // Function to toggle between positive and negative number
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