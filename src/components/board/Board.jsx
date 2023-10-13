import React, { useEffect, useMemo, useState } from 'react';
import classes from './Board.module.css';
import Cell from '../cell/Cell';

const Board = ({board, isMyBoard, setBoard, readyToFight, canShoot, shoot}) => {

  const addMark = (x,y) => {

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
          {board.cells.map((row, index)=>
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