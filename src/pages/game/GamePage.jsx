import classes from './GamePage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ControlPanel from '../../components/controlPanel/ControlPanel';
import Board from '../../components/board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { increaseGamesAction, increaseLossesAction, increaseVictoriesAction, moveTransition, setGameOver } from '../../store/userReducer';
import { updateRobotBoardAction } from '../../store/roborBoardReducer';
import { BoardType } from '../../classes/Board';
import { updateUserBoardAction } from '../../store/userBoardReducer';
import { isGameOver } from '../../functions/isGameOver';


const GamePage = () => {
  const userName = useSelector(state => state.user.name)
  const countVictories = useSelector(state => state.user.victories)
  const countLosses = useSelector(state => state.user.losses)
  const countGames = useSelector(state => state.user.countGames)

  const userBoard = useSelector(state => state.userBoard.board)
  const robotBoard = useSelector(state => state.robotBoard.board)

  const myMove = useSelector(state => state.user.myMove)
  const gameMode = useSelector(state => state.user.gameMode)
  const gameOver = useSelector(state => state.user.gameOver)

  const dispatch = useDispatch()

  const userShoot = (x,y) => {
    if(gameOver)
      return
    
    if(robotBoard.getCells(x,y)?.mark?.name === "robotShip")
    {
      robotBoard.addDamage(x,y)

      if(gameMode === '1')
        dispatch(moveTransition())
    }

   else if(robotBoard.getCells(x,y)?.mark?.name !== "miss" && robotBoard.getCells(x,y)?.mark?.name !== "damage")
    {
      robotBoard.addMiss(x,y)
      dispatch(moveTransition())
    }

    if(isGameOver(robotBoard))
    {
      dispatch(setGameOver())
      dispatch(increaseGamesAction())
      dispatch(increaseVictoriesAction())
    }
    const newBoard = robotBoard.getCopyBoard()
    dispatch(updateRobotBoardAction(newBoard))
  }

 const robotShoot = () => {
    if(gameOver)
      return

    let endMove = false

    while (!endMove)
    {
      let x = Math.floor(Math.random() * 10)
      let y = Math.floor(Math.random() * 10)

      while(userBoard.getCells(x,y)?.mark?.name === "damage" || userBoard.getCells(x,y)?.mark?.name === "miss")
      {
        x = Math.floor(Math.random() * 10)
        y = Math.floor(Math.random() * 10)
      }

      if(userBoard.getCells(x,y)?.mark?.name === "ship")
        {
          userBoard.addDamage(x,y)

          if(gameMode === '1')
            endMove = true
        }

      if(userBoard.getCells(x,y)?.mark === null)
        {
          userBoard.addMiss(x,y)
          endMove = true
        }
    }

    if(isGameOver(userBoard))
    {
      dispatch(setGameOver())
      dispatch(increaseGamesAction())
      dispatch(increaseLossesAction())
    }
  
    const newBoard = userBoard.getCopyBoard()
    dispatch(moveTransition())
    dispatch(updateUserBoardAction(newBoard))    
}


  useEffect(()=>{
    if(myMove === false)
      setTimeout(robotShoot, 1000);
  },[myMove])

  useEffect(() => {
    if (typeof(userBoard)!= BoardType)
    {
      const newBoard = new BoardType()
      newBoard.setCells(userBoard.cells)
      dispatch(updateUserBoardAction(newBoard))
    }

    if (typeof(robotBoard)!= BoardType)
    {
      const newBoard = new BoardType()
      newBoard.setCells(robotBoard.cells)
      dispatch(updateRobotBoardAction(newBoard))
    }
  },[])



  return (
    <div className={classes.wrapper}>
      <Header/>
      <ControlPanel/>
      <main className={classes.main}>
        <section className={classes['game-history']}>
          <span>Количество сыгранных игр: {countGames}</span>
          <span>
            {gameOver? 'Игра закончена': myMove? 'Ваш ход': 'Ход робота'}
          </span>
        </section>
        <section className={classes.boards}>
          <div className={classes.board}>
            <span className={classes.name}>{userName}</span>
            <span className={classes.score}>Побед: {countVictories}</span>
            <Board 
              board={userBoard}
              isMyBoard={true}
              readyToFight={true}
              canShoot={false}
            />
          </div>
          <div className={classes.board}>
            <span className={classes.name}>Робот</span>
            <span className={classes.score}>Побед: {countLosses}</span>
            <Board 
              board={robotBoard}
              isMyBoard={false}
              readyToFight={true}
              canShoot={myMove}
              shoot={userShoot}
            />
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default GamePage