import React from 'react';
import classes from './Rules.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Rules = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
      <main className={classes.main}>
        <section className={classes.rules}>
          <h2 className={classes.rules__title}>Правила игры</h2>
          <p>
            Цель игры - потопить все корабли соперника, находящиеся на игровом поле.
            Игровое поле представляет собой квадрат, состоящий из 10 строк и 10 столбцов.
            Строки обозначены буквами русского алфавита от А до К, а столбцы - арабскими цифрами от 1 до 10.
            На игровом поле хаотично расположены корабли: 4 однопалубных, 3 двухпалубных, 2 трехпалубных
            и 1 четырехпалубный. На поле не допускается соприкосновение соседних кораблей, то есть 
            между кораблями должна соблюдаться дистанция минимум в одну клетку.
          </p>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Rules