import React from 'react';
import classes from './Header.module.css';
import logo from './logo.svg';
import vkLogo from './vk.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <address className={classes.address}>
        <a className={classes.contact} href="tel+74956602450">+7 (495) 660-24-50</a>
        <a className={classes.contact} href="mailto:hr@relex.ru">hr@relex.ru</a>
        <span>ул. Бахметьева, 2Б (этаж 8)</span>
      </address>
      <img className={classes.logo} src={logo} alt="Логотип РЕЛЭКС" />
      <a className={classes['social-link']} href="https://vk.com/relex_ru" target="_blank">
        <img className={classes['social-icon']} src={vkLogo} alt="Ссылка на VK"></img>
      </a>
    </header>
  )
}

export default Header