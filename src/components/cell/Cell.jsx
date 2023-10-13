import React, { useEffect, useMemo } from 'react';
import classes from './Cell.module.css';

const Cell = ({cell, addMark}) => {

  const cellClass = useMemo(()=>{
    const basicClass = ['cell']
    if(cell?.mark?.color !== undefined)
      basicClass.push(`cell_${cell?.mark?.color}`)
    return basicClass
  }, [cell?.mark?.color])

  return (
    <div 
      className={`${classes[cellClass[0]]} ${classes[cellClass[1]]}`} 
      onClick={()=>addMark(cell.x, cell.y)}
    >
    </div>
  )
}

export default Cell