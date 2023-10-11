import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <address className={classes.address}>
        <a className={classes.contact} href="tel+74956602450">+7 (495) 660-24-50</a>
        <a className={classes.contact} href="mailto:hr@relex.ru">hr@relex.ru</a>
        <span>ул. Бахметьева, 2Б (этаж 8)</span>
      </address>
    </footer>
  )
}

export default Footer