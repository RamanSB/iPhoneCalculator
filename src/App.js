import React from 'react';
import './App.css';
import {evaluate} from 'mathjs';
import {Operands, Keypad, SpecialFunctions} from './Keypad.js';

//ToDo: Use a stack for the calculator string literal we are evaluating
//ToDo: Also use Context hook (useContext()) and use provider and consumer
//o=instead of prop drilling the dispatcher and state (value)

const reducer = (state, action) => {
  console.log(`[reducer] Current state: ${state}`);
  console.log(`[reducer] Action Object: ${JSON.stringify(action)}`);
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

  let calculatorExpression = null;

  if(state==='0' && type==='number' || (state==='0' && type==='operator' && value===Operands.SUBTRACT)){
    return type==='operator' ? operatorSymbol : value;
  } else if(type==='number'){
      calculatorExpression = state.concat(value);
  } else if(type==='operator'){
      calculatorExpression = state.concat(operatorSymbol);
  } else if(type==='special'){
      switch(value){
        case SpecialFunctions.PERCENTAGE:
          return `${evaluate(`${evaluate(state)}`/100)}`;
        case SpecialFunctions.CANCEL:
          return '0';
        case SpecialFunctions.PLUSORMINUS:
          return '-';
    }
  }
  calculatorExpression = modifyCalculatorExpressionToBeValid(calculatorExpression);
  console.log(`[reducer] calculator expression: ${calculatorExpression}`);
  return calculatorExpression;
}

function modifyCalculatorExpressionToBeValid(calculatorExpression){
  console.log(`[isCalculatorExpressionValid] calculatorExpression: ${calculatorExpression}`);
  let expressionStack = calculatorExpression.split('');
  let previousLiteral = null;
  let nextLiteral = null;

  if(expressionStack.length >=2){
    previousLiteral = expressionStack[expressionStack.length-2];
    nextLiteral = expressionStack[expressionStack.length-1];

    if((previousLiteral==='-' || previousLiteral==='+') && (nextLiteral==='/' || nextLiteral==='*')){
      expressionStack[expressionStack.length-2] = expressionStack.pop();
    }
    if(previousLiteral==='/' && nextLiteral==='*'){
      expressionStack[expressionStack.length-2] = expressionStack.pop();
    }
    if(previousLiteral==='*' && nextLiteral==='/'){
      expressionStack[expressionStack.length-2] = expressionStack.pop();
    }
    if(previousLiteral==='/' && nextLiteral==='/'){
      expressionStack[expressionStack.length-2] = expressionStack.pop();
    }
    if(previousLiteral==='*' && nextLiteral==='*'){
      expressionStack[expressionStack.length-2] = expressionStack.pop();
    }
    if(previousLiteral==='+' && nextLiteral==='+'){
      expressionStack[expressionStack.length-2] = expressionStack.pop();
    }
  }

  console.log(`Expression Stack: ${expressionStack}`);
  if(expressionStack[0] === '*' || expressionStack[0] === '+' || expressionStack[0] === '/'){
    expressionStack = ["0"];
  }
  return expressionStack.join("");
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
