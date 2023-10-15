import React from 'react';
import classes from './GamePage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const GamePage = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
      <main className={classes.main}>
      </main>
      <Footer/>
    </div>
  )
}

export default GamePage