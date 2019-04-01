import React from 'react';
import style from './Header.module.css'
const Header = () => (
    <div>
        <div className={style.header}>
            <a className={style.item} href='/'>Home</a>
            <a className={style.item} href='/product'>Product</a>
            <a className={style.item} href='/about'>About</a>
            <a className={style.item} href='contact'>Contact</a>
        </div>
    </div>
);

export default Header;
