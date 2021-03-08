import React from 'react';
import './App.css';
import {evaluate} from 'mathjs';
import OperandButton from './Keypad.js';
import {Operands, Keypad, SpecialFunctions} from './Keypad.js';

const reducer = (state, action) => {
  console.log(`Action Object: ${JSON.stringify(action)}`);
  const {type, value} = action;
  console.log(`Type: ${type}, Value: ${value}`);
  let operatorSymbol = null;
  if(type==='operator'){
    switch(value){
      case Operands.SUBTRACT:
        operatorSymbol = '-';
        break;
      case Operands.MULTIPLY:
        operatorSymbol = '*'
        break;
      case Operands.DIVIDE:
        operatorSymbol = '/';
        break;
      case Operands.ADD:
        operatorSymbol = '+';
        break;
      case Operands.EQUAL:
        return `${evaluate(state)}`;
      default:
        throw new Error(`Unsupported operation: ${value}`);
    }
  }

  if(state==='0' && type==='number' || (state==='0' && type==='operator' && value===Operands.SUBTRACT)){
    return type==='operator' ? operatorSymbol : value;
  } else if(type==='number'){
      return state.concat(value);
  } else if(type==='operator'){
      return state.concat(operatorSymbol);
  } else if(type==='special'){
      switch(value){
        case SpecialFunctions.PERCENTAGE:
          return `${evaluate(`${state}/100`)}`;
        case SpecialFunctions.CANCEL:
          return '0';
        case SpecialFunctions.PLUSORMINUS:
          return '-';
    }
  }
}


function App() {
  const [state, dispatch] = React.useReducer(reducer, '0');

  return (
    <CalculatorBase>
      <Display value={state}/>
      <Keypad value={state} dispatch={dispatch}/>
    </CalculatorBase>
  );
}


const CalculatorBase = ({children}) => {
  return (
    <div className="calculator-base">
      {children}
    </div>
  )
}

function Display({value}){
    return (
      <div className="display">
        <p>{value}</p>
      </div>
    );
}


export default App;
