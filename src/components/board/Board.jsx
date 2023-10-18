import React, { useMemo } from 'react';
import classes from './Board.module.css';
import Cell from '../cell/Cell';
import { useDispatch, useSelector } from 'react-redux';
import { reduceUserCountDoubleDeckedShipsAction, reduceUserCountFourDeckedShipsAction, reduceUserCountSingleDeckedShipsAction, reduceUserCountThreeDeckedShipsAction, updateUserBoardAction } from '../../store/userBoardReducer';
import { addShip } from '../../functions/addShip';
import { checkCountShip } from '../../functions/checkCountShip';
import { canAddShip } from '../../functions/canAddShip';
import { updateRobotBoardAction } from '../../store/roborBoardReducer';

const Board = ({board, isMyBoard, readyToFight, canShoot, shoot, typeOfShip, shipDirection}) => {
  const dispatch = useDispatch()
  const countOfFour_deckShips = useSelector(state => state.userBoard.countOfFour_deckShips)
  const countOfThree_deckShips = useSelector(state => state.userBoard.countOfThree_deckShips)
  const countOfDouble_deckShips = useSelector(state => state.userBoard.countOfDouble_deckShips)
  const countOfSingle_deckShips = useSelector(state => state.userBoard.countOfSingle_deckShips)

  const addMark = (x,y) => {
    if(!readyToFight)
    {
      if(checkCountShip(typeOfShip, countOfFour_deckShips, countOfThree_deckShips, 
      countOfDouble_deckShips, countOfSingle_deckShips) &&
      canAddShip(board, x, y, typeOfShip, shipDirection, isMyBoard))
      {
        addShip(board, x, y, typeOfShip, shipDirection, isMyBoard)
        switch(typeOfShip)
        {
          case '1':
            dispatch(reduceUserCountSingleDeckedShipsAction())
            break
          case '2':
            dispatch(reduceUserCountDoubleDeckedShipsAction())
            break
          case '3':
            dispatch(reduceUserCountThreeDeckedShipsAction())
            break
          case '4':
            dispatch(reduceUserCountFourDeckedShipsAction())
            break
        }
      }
    }
    else if (canShoot && !isMyBoard)
    {
      shoot(x,y)
    }

    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    if(isMyBoard)
      dispatch(updateUserBoardAction(newBoard))
    else
      dispatch(updateRobotBoardAction(newBoard))
  }

  const lineNumbers = useMemo(()=>{
    const numbers = []
    for (let i = 1; i < 11; i++) {
      numbers.push(<span key={i}>{i}</span>)
    }
    return numbers
  }, [])
  

  const сolumnLetters = useMemo(()=>{
    const letters = [' ','А','Б','В','Г','Д','Е','Ж','З','И','К']
    const lettersInWrapper = []
    for (let i = 0; i < 11; i++) {
      lettersInWrapper.push(<span className={classes.letter} key={i}>{letters[i]}</span>)
    }
    return lettersInWrapper
  }, [])


  return (
    <div className={classes.board}>
      <div className={classes.letters}>
        {сolumnLetters}
      </div>
      <div className={classes['numbered-grid']}>
        <div className={classes.numbers}>
          {lineNumbers}
        </div>
        <div className={classes.grid}>
          {board?.cells.map((row, index)=>
            <React.Fragment key={index}>
              {row.map(cell =>
                <Cell key={cell.id} cell={cell} addMark={addMark}></Cell>
                )}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Board