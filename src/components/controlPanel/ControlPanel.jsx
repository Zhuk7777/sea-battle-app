import React from 'react'
import classes from './ControlPanel.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeBoardAction } from '../../store/userBoardReducer';
import { increaseGamesAction, increaseLossesAction } from '../../store/userReducer';

const ControlPanel = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const restart = () => {
    dispatch(removeBoardAction())
    dispatch(increaseGamesAction())
    dispatch(increaseLossesAction())
    navigate('/settings')
  }

  return (
    <div className={classes.panel}>
      <button
        className={classes.button}
        onClick={()=>navigate('/')}
      >
        Главная
      </button>
      <button 
        className={classes.button}
        onClick={()=>restart()}
      >
        Заново
      </button>
      <button
        className={classes.button}
        onClick={()=>navigate('/rules')}
       >
        Правила
      </button>
    </div>
  )
}

export default ControlPanel