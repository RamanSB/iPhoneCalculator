import './App.css';
import OperandButton from './Keypad.js';
import {Operands} from './Keypad.js';

function App() {

  return (
    <CalculatorBase>
      <img src="logo192.png"/>
      <OperandButton operandType={Operands.DIVIDE}/>
      <OperandButton operandType={Operands.MULTIPLY}/>
      <OperandButton operandType={Operands.SUBTRACT}/>
      <OperandButton operandType={Operands.ADD}/>
      <OperandButton operandType={Operands.EQUAL}/>
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
