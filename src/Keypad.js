import React from 'react';
import './keypad-styles.css';


const Operands = {
  DIVIDE: "divide",
  MULTIPLY: "multiply",
  SUBTRACT: "subtract",
  ADD: "add",
  EQUAL: "equal"
};

Object.freeze(Operands);

const OperandButton = ({operandType}) => {
  console.log(`[OperandButton] OperandType: ${operandType}`);
  return (
    <button className="operand-button" onClick={()=>{console.log(`[OperandButton] clicked ${operandType}`);}}>
      <img className="operand-image" src={`icons8-${operandType}-30px-white.png`}/>
    </button>
  );
}

const NumberButtons = ({children}) => {
  
}



export default OperandButton;
export {Operands};
