import React from 'react'
import classes from './MainPage.module.css';
import Header from '../../components/header/Header';

const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <section className={classes.cover}>
          <h1 className={classes.title}>Морской бой</h1>
          <p className={classes.text}>Прими участие в морском сражении</p>
        </section>
      </main>
    </div>
  )
}

export default MainPage