import React from 'react';
import Header from './components/header';
import Logo from './components/logo';
import SearchPanel from './components/searchPanel';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles["main-div"]}>
      <Header/>
      <Logo/>
      <SearchPanel/>
    </div>
  );
}

export default App;