import React, { useEffect, useState } from 'react';
import classes from './SettingsPage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Board from '../../components/board/Board';
import { BoardType } from '../../classes/Board';

const SettingsPage = () => {

  const [board, setBoard] = useState(new BoardType())
  //const [typeOfShip, setTypeOfShip] = useState(1)
  //const [shipDirection, setShipDirection] = useState('up')

  const start = () => {
    const newBoard = new BoardType()
    newBoard.initCells()
    setBoard(newBoard)
  }

  useEffect(()=>{
    start()
  }, [])

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
        <section className={classes['ship-selection']}>
        </section>
        <section className={classes['board-container']}>
          <button 
            className={classes['board-container__button']}
            onClick={()=>start()}
          >
            Заново
          </button>
          <Board
            board={board}
            isMyBoard={true}
            canShoot={false}
            readyToFight={false}
            setBoard={setBoard}
          />
          <button className={classes['board-container__button']}>В бой!</button>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default SettingsPage