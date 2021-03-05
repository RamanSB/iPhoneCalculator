import React from 'react';
import './keypad-styles.css';


const Operands = {
  DIVIDE: "divide",
  MULTIPLY: "multiply",
  SUBTRACT: "subtract",
  ADD: "add",
  EQUAL: "equal"
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Object.freeze(Operands);

const OperandButton = ({operandType}) => {
  console.log(`[OperandButton] OperandType: ${operandType}`);
  return (
    <button className="operand-button" onClick={()=>{console.log(`[OperandButton] clicked ${operandType}`);}}>
      <img className="operand-image" src={`icons8-${operandType}-30px-white.png`}/>
    </button>
  );
}

const NumberButton = ({children}) => {
  console.log(`[NumberButtons] children: ${children}`);
  let className = (children == 0 ? 'number-button-zero' : 'number-button');
  return (
    <button className={className} onClick={()=>{console.log(`[NumberButton] clicked ${children}`);}}>
      {children}
    </button>
  )
}



export default OperandButton;
export {Operands, NumberButton, numbers};
