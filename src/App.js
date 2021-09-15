import Header from './components/header';
import Logo from './components/logo';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles["main-wrap"]}>
      <Header/>
      <Logo/>
    </div>
  );
}

export default App;