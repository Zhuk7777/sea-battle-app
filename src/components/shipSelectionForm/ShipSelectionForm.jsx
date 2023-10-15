import React from 'react';
import classes from './ShipSelectionForm.module.css';
import { useSelector } from 'react-redux';

const ShipSelectionForm = ({setTypeOfShip, setShipDirection}) => {
  const countOfFour_deckShips = useSelector(state => state.userBoard.countOfFour_deckShips)
  const countOfThree_deckShips = useSelector(state => state.userBoard.countOfThree_deckShips)
  const countOfDouble_deckShips = useSelector(state => state.userBoard.countOfDouble_deckShips)
  const countOfSingle_deckShips = useSelector(state => state.userBoard.countOfSingle_deckShips)

  return (
    <form className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Выбор корабля</legend>
        <label className={classes.label}>
            <input 
              className={`${classes['visually-hidden']} ${classes.input}`} 
              type="radio" 
              name="typeOfShip"
              value="4"
              onClick={(e)=>setTypeOfShip(e.target.value)}
            />
            <span className={classes['pseudo-radio']}></span>
            <span className={classes.text}>Четырехпалубный(осталось {countOfFour_deckShips})</span>
        </label>
        <label className={classes.label}>
            <input 
              className={`${classes['visually-hidden']} ${classes.input}`} 
              type="radio" 
              name="typeOfShip"
              value="3"
              onClick={(e)=>setTypeOfShip(e.target.value)}
            />
            <span className={classes['pseudo-radio']}></span>
            <span className={classes.text}>Трехпалубный(осталось {countOfThree_deckShips})</span>
        </label>
        <label className={classes.label}>
            <input 
              className={`${classes['visually-hidden']} ${classes.input}`} 
              type="radio" 
              name="typeOfShip"
              value="2"
              onClick={(e)=>setTypeOfShip(e.target.value)}
            />
            <span className={classes['pseudo-radio']}></span>
            <span className={classes.text}>Двухпалубный(осталось {countOfDouble_deckShips})</span>
        </label>
        <label className={classes.label}>
            <input 
              className={`${classes['visually-hidden']} ${classes.input}`} 
              type="radio" 
              name="typeOfShip"
              value="1"
              defaultChecked
              onClick={(e)=>setTypeOfShip(e.target.value)}
            />
            <span className={classes['pseudo-radio']}></span>
            <span className={classes.text}>Однопалубный(осталось {countOfSingle_deckShips})</span>
        </label>
      </fieldset>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Выбор направления размещения</legend>
        <label className={classes.label}>
          <input 
            className={`${classes['visually-hidden']} ${classes.input}`} 
            type="radio" 
            name="direction"
            value="up"
            defaultChecked
            onClick={(e)=>setShipDirection(e.target.value)}
          />
          <span className={classes['pseudo-radio']}></span>
          <span className={classes.text}>Ввверх</span>
        </label>
        <label className={classes.label}>
          <input 
            className={`${classes['visually-hidden']} ${classes.input}`} 
            type="radio" 
            name="direction"
            value="right"
            onClick={(e)=>setShipDirection(e.target.value)}
          />
          <span className={classes['pseudo-radio']}></span>
          <span className={classes.text}>Вправо</span>
        </label>
        <label className={classes.label}>
          <input 
            className={`${classes['visually-hidden']} ${classes.input}`} 
            type="radio" 
            name="direction"
            value="down"
            onClick={(e)=>setShipDirection(e.target.value)}
          />
          <span className={classes['pseudo-radio']}></span>
          <span className={classes.text}>Вниз</span>
        </label>
        <label className={classes.label}>
          <input 
            className={`${classes['visually-hidden']} ${classes.input}`} 
            type="radio" 
            name="direction"
            value="left"
            onClick={(e)=>setShipDirection(e.target.value)}
          />
          <span className={classes['pseudo-radio']}></span>
          <span className={classes.text}>Влево</span>
        </label>
       </fieldset>
    </form>
  )
}

export default ShipSelectionForm