import React, { useMemo } from 'react';
import classes from './Board.module.css';
import Cell from '../cell/Cell';
import { useDispatch } from 'react-redux';
import { updateBoardAction } from '../../store/userBoardReducer';

const Board = ({board, isMyBoard, readyToFight, canShoot, shoot}) => {
  const dispatch = useDispatch()

  const addMark = (x,y) => {
    if(!readyToFight)
    {
      if(board.getCells(x,y)?.mark?.name === 'ship')
        board.сancel(x,y)
      else 
        board.addShip(x,y)
    }
    else if (canShoot && !isMyBoard)
    {
      shoot(x,y)
    }

    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    dispatch(updateBoardAction(newBoard))
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