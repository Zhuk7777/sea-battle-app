import React, { useEffect } from 'react';
import classes from './Cell.module.css';

const Cell = ({cell, addMark}) => {
  const cellClass = ['cell']
  cellClass.push(cell?.mark?.color)

  useEffect(()=>{
    //console.log(cellClass.join('_'))
    //console.log('lox')
  }, [])

  return (
    <div 
      className={classes.cell} 
      onClick={()=>addMark(cell.x, cell.y)}
    >

    </div>
  )
}

export default Cell