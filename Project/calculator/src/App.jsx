import styles from './App.module.css'

function App() {
  return (
    <>
    <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C</button>
      </div>
    </div>
    </>
  )
}

export default App
