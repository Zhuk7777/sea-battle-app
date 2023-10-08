import React from 'react'
import classes from './MainPage.module.css';
import Header from '../../components/header/Header';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import Footer from '../../components/footer/Footer';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
      <main className={classes.main}>
        <section className={classes.cover}>
          <h1 className={classes.cover__title}>Морской бой</h1>
          <p className={classes.cover__text}>Прими участие в морском сражении</p>
        </section>
        <section className={classes['info-field']}>
          <h2 className={classes['info-field__title']}>История игры</h2>
          <p>
            Есть теория,что эта игра появилась в 20 веке,когда появились корабли, 
            броненосцы и линкоры, ведущие на тот момент боевые действия. 
            Многие люди хотели воссоздать эту игру на бумаге которая была уже доступна на тот период времени. 
            По другой версии,игру изобрёл Петр Кондратьев, 
            решив ,что ему и его товарищам нужен отдых. 
            Игра всем понравилась, и в неё стали играть многие люди. 
            В 1930-х годах в США выпускают специальные блокноты для игры в "Морской бой". 
            Спустя некоторое время была создана пластмассовая доска с фигурками кораблей. 
            С появлением современных технологий появилась электронная версия игры. 
            Но для многих, одной из лучших версий остаётся бумажный" Морской бой". 
            На данный момент в игру играют в свободное время в школе и дома и других местах.
          </p>
        </section>
        <section className={classes['registration-field']}>
          <h2 className={classes['registration-field__title']}>Заполни и начнем</h2>
          <RegistrationForm/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default MainPage