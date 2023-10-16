import classes from './GamePage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ControlPanel from '../../components/controlPanel/ControlPanel';
import Board from '../../components/board/Board';
import { useSelector } from 'react-redux';


const GamePage = () => {
  const userName = useSelector(state => state.user.name)
  const countVictories = useSelector(state => state.user.victories)
  const countLosses = useSelector(state => state.user.losses)
  const countGames = useSelector(state => state.user.countGames)

  const userBoard = useSelector(state => state.userBoard.board)
  const robotBoard = useSelector(state => state.robotBoard.board)

  return (
    <div className={classes.wrapper}>
      <Header/>
      <ControlPanel/>
      <main className={classes.main}>
        <section className={classes['game-history']}>
          <span>Количество сыгранных игр: {countGames}</span>
        </section>
        <section className={classes.boards}>
          <div className={classes.board}>
            <span className={classes.name}>{userName}</span>
            <span className={classes.score}>Побед: {countVictories}</span>
            <Board board={userBoard}></Board>
          </div>
          <div className={classes.board}>
            <span className={classes.name}>Робот</span>
            <span className={classes.score}>Побед: {countLosses}</span>
            <Board board={robotBoard}></Board>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default GamePage