import React from 'react';
import classes from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { addUserlAction } from '../../store/userReducer';
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const savingData = (event) => {
    event.preventDefault()
    const user = {
      name: `${event.target.name.value}`,
      gameMode: event.target.shooting.value,
    }
    dispatch(addUserlAction(user))
    navigate('/settings')
  }

  return (
    <form onSubmit={(event)=>savingData(event)} className={classes.form}>
    <fieldset className={classes.fieldset}>
      <legend className={`${classes['visually-hidden']} ${classes.legend}`}>Ваше имя</legend>
      <label htmlFor="name">Имя</label>
      <input className={classes.input} type="text" id="name" placeholder="Вася" name="name" required/>
    </fieldset>
    <fieldset className={classes.fieldset}>
      <legend className={classes.legend}>Выбор режима игры</legend>
      <div>
        <label className={classes.label}>
          <input 
            className={`${classes['visually-hidden']} ${classes.input}`} 
            type="radio" 
            name="shooting"
            value="1"
          />
          <span className={classes['pseudo-radio']}></span>
          Стрельба строго по очереди
        </label>
      </div>
      <div>
        <label className={classes.label}>
          <input 
             className={`${classes['visually-hidden']} ${classes.input}`}  
            type="radio" 
            name="shooting"
            value="2"
            defaultChecked
          />
          <span className={classes['pseudo-radio']}></span>
          Стрельба до промаха
        </label>
      </div>
    </fieldset>
    <button className={classes.button} type="submit">Погнали!</button>
  </form>
  )
}

export default RegistrationForm