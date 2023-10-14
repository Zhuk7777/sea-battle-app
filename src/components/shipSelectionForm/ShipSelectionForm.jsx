import React from 'react';
import classes from './ShipSelectionFrom.module.css';

const ShipSelectionForm = () => {
  return (
    <form className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Выбор корабля</legend>
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
       </fieldset>
    </form>
  )
}

export default ShipSelectionForm