import './App.css';
import OperandButton from './Keypad.js';
import {Operands, NumberButton} from './Keypad.js';

function App() {

  return (
    <CalculatorBase>
      {/*<img src="logo192.png"/>*/}
      <OperandButton operandType={Operands.DIVIDE}/>
      <OperandButton operandType={Operands.MULTIPLY}/>
      <OperandButton operandType={Operands.SUBTRACT}/>
      <OperandButton operandType={Operands.ADD}/>
      <OperandButton operandType={Operands.EQUAL}/>
      <NumberButton>0</NumberButton>
      <NumberButton>1</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>3</NumberButton>
      <NumberButton>4</NumberButton>
      <NumberButton>5</NumberButton>
      <NumberButton>6</NumberButton>
      <NumberButton>7</NumberButton>
      <NumberButton>8</NumberButton>
      <NumberButton>9</NumberButton>
      <NumberButton>.</NumberButton>

    </CalculatorBase>
  )

}


const CalculatorBase = ({children}) => {
  return (
    <div className="calculator-base">
      {children}
    </div>
  )
}


export default App;
