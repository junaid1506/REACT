import styles from './App.module.css'
import ButtonContainer from './Component/ButtonContainer'
import Display from './Component/Display'

function App() {
  const calculatorButtons = [
  "C", "()", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "="
];

  return (
    <>
    <div className={styles.calculator}>
      <Display/>
      <ButtonContainer calculatorButtons={calculatorButtons} />
    </div>
    </>
  )
}

export default App
