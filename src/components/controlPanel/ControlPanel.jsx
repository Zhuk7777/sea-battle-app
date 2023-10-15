import React from 'react'
import classes from './ControlPanel.module.css';
import { useNavigate } from 'react-router-dom';

const ControlPanel = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.panel}>
      <button
        className={classes.button}
        onClick={()=>navigate('/')}
      >
        Главная
      </button>
      <button className={classes.button}>Заново</button>
      <button className={classes.button}>Расставить корабли</button>
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