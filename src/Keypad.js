import React from 'react';
import './keypad-styles.css';


const Operands = {
  DIVIDE: "divide",
  MULTIPLY: "multiply",
  SUBTRACT: "subtract",
  ADD: "add",
  EQUAL: "equal"
};

const SpecialFunctions = {
  PERCENTAGE: "percentage",
  PLUSORMINUS: "plus-or-minus",
  CANCEL: "cancel"
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Object.freeze(SpecialFunctions);
Object.freeze(Operands);

const OperandButton = ({operandType, displayValue, dispatch}) => {
  return (
    <button className="operand-button" onClick={()=>{
      console.log(`[OperandButton] clicked ${operandType}`);
      console.log(`Calling dispatch function with action: ${operandType}`);
      let actionObject = {
        type: 'operator',
        value: operandType
      };
      dispatch(actionObject);
    }}>
      <img className="operand-image" src={`icons8-${operandType}-30px-white.png`}/>
    </button>
  );
}

/*
  0,1,2,3,4,5,6,7,8,9,.
*/
const NumberButton = ({children, displayValue, dispatch}) => {
  let className = (children == 0 ? 'number-button-zero' : 'number-button');
  return (
    <button className={className} onClick={()=>{
      console.log(`[NumberButton] clicked ${children}`);
      console.log(`About to call dispatch function ${dispatch} with action: ${children}`);
      let actionObject = {
        type: 'number',
        value: `${children}`
      };
      dispatch(actionObject);
    }}>
      {children}
    </button>
  )
}

/*
  cancel, plus-minus, percentage
*/
const SpecialButton = ({specialType, children, displayValue, dispatch}) => {
  return (
    <button className="special-button" onClick={()=>{
      console.log(`[SpecialButton] clicked ${specialType}`);
      let actionObject = {
        type: 'special',
        value: specialType
      };
      dispatch(actionObject);
    }}>
      {children ? children : <img className="special-image" src={`icons8-plus-minus-30px.png`}/>}
    </button>
  );
}

function Keypad({value, dispatch}){
  const [cancelText, setCancelText] = React.useState('AC');
  return (
    <div id="keypad">
      <SpecialButton dispatch={dispatch} displayValue={value} specialType={SpecialFunctions.CANCEL}>{cancelText}</SpecialButton>
      <SpecialButton dispatch={dispatch} displayValue={value} specialType={SpecialFunctions.PLUSORMINUS}/>
      <SpecialButton dispatch={dispatch} displayValue={value} specialType={SpecialFunctions.PERCENTAGE}>%</SpecialButton>
      <OperandButton dispatch={dispatch} displayValue={value} operandType={Operands.DIVIDE}/>
      <NumberButton dispatch={dispatch} displayValue={value}>7</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>8</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>9</NumberButton>
      <OperandButton dispatch={dispatch} displayValue={value} operandType={Operands.MULTIPLY}/>
      <NumberButton dispatch={dispatch} displayValue={value}>4</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>5</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>6</NumberButton>
      <OperandButton dispatch={dispatch} displayValue={value} operandType={Operands.SUBTRACT}/>
      <NumberButton dispatch={dispatch} displayValue={value}>1</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>2</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>3</NumberButton>
      <OperandButton dispatch={dispatch} displayValue={value} operandType={Operands.ADD}/>
      <NumberButton dispatch={dispatch} displayValue={value}>0</NumberButton>
      <NumberButton dispatch={dispatch} displayValue={value}>.</NumberButton>
      <OperandButton dispatch={dispatch} displayValue={value} operandType={Operands.EQUAL}/>
    </div>
  )
}



export default OperandButton;
export {Operands, NumberButton, numbers, SpecialButton, Keypad, SpecialFunctions};
