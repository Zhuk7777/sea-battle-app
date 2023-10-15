import React, { useEffect, useState } from 'react';
import classes from './GamePage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ControlPanel from '../../components/controlPanel/ControlPanel';
import Board from '../../components/board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { BoardType } from '../../classes/Board';
import { updateBoardAction } from '../../store/userBoardReducer';

const GamePage = () => {
  const userName = useSelector(state => state.user.name)
  const countVictories = useSelector(state => state.user.victories)
  const countLosses = useSelector(state => state.user.losses)

  //Потом все не так реализованно будет, сейчас так написал, чтобы сетка отобразилась хотя бы
  
  const dispatch = useDispatch()

  const userBoard = useSelector(state => state.userBoard.board)
  const [robotBoard,setRobotBoard] = useState(new BoardType())

  useEffect(()=>{
    const robotInitBoard = new BoardType()
    robotInitBoard.initCells()
    setRobotBoard(robotInitBoard)
    if (typeof(userBoard)!= BoardType)
    {
      const newBoard = new BoardType()
      newBoard.setCells(userBoard.cells)
      dispatch(updateBoardAction(newBoard))
    }
  }, [])

  return (
    <div className={classes.wrapper}>
      <Header/>
      <ControlPanel/>
      <main className={classes.main}>
        <section className={classes.board}>
          <span className={classes.name}>{userName}</span>
          <span className={classes.score}>Побед: {countVictories}</span>
          <Board board={userBoard}></Board>
        </section>
        <section className={classes.board}>
          <span className={classes.name}>Робот</span>
          <span className={classes.score}>Побед: {countLosses}</span>
          <Board board={robotBoard}></Board>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default GamePage