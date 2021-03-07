import React from 'react';
import './App.css';
import OperandButton from './Keypad.js';
import {Operands, NumberButton, SpecialButton, Keypad} from './Keypad.js';

const reducer = (state, action) => {
  console.log(`[App.js] reducer: ${state} ${action}`);
}





function App() {
  const [state, dispatch] = React.useReducer(reducer, 0);

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
    const [display, setDisplay] = React.useState('Welcome');

    return (
      <div className="display">
        <p>{value}</p>
      </div>
    );
}


export default App;
