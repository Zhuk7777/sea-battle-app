import React from 'react'
import classes from './RegistrationForm.module.css'

const RegistrationForm = () => {
  return (
    <form action="" className={classes.form}>
    <fieldset className={classes.fieldset}>
      <legend className={`${classes['visually-hidden']} ${classes.legend}`}>Ваше имя</legend>
      <label for="name">Имя</label>
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
            checked 
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