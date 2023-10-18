import React from 'react'
import classes from './ControlPanel.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserBoardAction } from '../../store/userBoardReducer';
import { increaseGamesAction, increaseLossesAction, setGameOver } from '../../store/userReducer';

const ControlPanel = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const gameOver = useSelector(state => state.user.gameOver)

  const restart = () => {

    if(!gameOver)
    {
      dispatch(increaseGamesAction())
      dispatch(increaseLossesAction())
    }
    else
      dispatch(setGameOver())

    dispatch(removeUserBoardAction())
    navigate('/settings', { replace: true })
  }

  return (
    <div className={classes.panel}>
      <button
        className={classes.button}
        onClick={()=>navigate('/', { replace: true })}
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