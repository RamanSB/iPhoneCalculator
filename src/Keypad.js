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

/*
  cancel, plus-minus, percentage
*/
const SpecialButton = ({specialType, children}) => {
  console.log(`[SpecialButton] Children: ${specialType}`);
  return (
    <button className="special-button" onClick={()=>{console.log(`[SpecialButton] clicked`);}}>
      {children ? children : <img className="special-image" src={`icons8-plus-minus-30px.png`}/>}
    </button>
  );
}

function Keypad(){
  return (
    <div id="keypad">
      <SpecialButton specialType="cancel">C</SpecialButton>
      <SpecialButton specialType="plus-minus"/>
      <SpecialButton specialType="percentage">%</SpecialButton>
      <OperandButton operandType="divide">%</OperandButton>
      <NumberButton>7</NumberButton>
      <NumberButton>8</NumberButton>
      <NumberButton>9</NumberButton>
      <OperandButton operandType={Operands.MULTIPLY}/>
      <NumberButton>4</NumberButton>
      <NumberButton>5</NumberButton>
      <NumberButton>6</NumberButton>
      <OperandButton operandType={Operands.SUBTRACT}/>
      <NumberButton>1</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>3</NumberButton>
      <OperandButton operandType={Operands.ADD}/>
      <NumberButton>0</NumberButton>
      <NumberButton>.</NumberButton>
      <OperandButton operandType={Operands.EQUAL}/>
    </div>
  )
}



export default OperandButton;
export {Operands, NumberButton, numbers, SpecialButton, Keypad};
