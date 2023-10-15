import React, { useEffect, useState } from 'react';
import classes from './SettingsPage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Board from '../../components/board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { removeBoardAction, updateBoardAction } from '../../store/userBoardReducer';
import { BoardType } from '../../classes/Board';
import ShipSelectionForm from '../../components/shipSelectionForm/ShipSelectionForm';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const board = useSelector(state => state.userBoard.board)
  const [typeOfShip, setTypeOfShip] = useState('1')
  const [shipDirection, setShipDirection] = useState('up')

  useEffect(()=>{
    if (typeof(board)!= BoardType)
    {
      const newBoard = new BoardType()
      newBoard.setCells(board.cells)
      dispatch(updateBoardAction(newBoard))
    }
  }, [])

  const restart = () => {
    dispatch(removeBoardAction())
  }

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
          <ShipSelectionForm
            setTypeOfShip={setTypeOfShip}
            setShipDirection={setShipDirection}
          />
        </section>
        <section className={classes['board-container']}>
          <button 
            className={classes['board-container__button']}
            onClick={()=>restart()}
          >
            Заново
          </button>
          <Board
            board={board}
            isMyBoard={true}
            canShoot={false}
            readyToFight={false}
            shipDirection={shipDirection}
            typeOfShip={typeOfShip}
          />
          <button 
            className={classes['board-container__button']}
            onClick={() => navigate('/game')}
          >
            В бой!
          </button>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default SettingsPage