import React from 'react';
import styles from '../../styles/Header.module.css'
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg'
import Avatar from '../../images/avatar.jpg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <NavLink to={ROUTES.HOME}>
                    <img src={LOGO} alt="" />
                </NavLink>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} 
                    style={{ backgroundImage: `url(${Avatar})` }} 
                />
                    <div className={styles.username}>
                        Guest
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon"> 
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input 
                        type="search" 
                        name='search' 
                        placeholder='Search'
                        autoComplete='off'
                        onChange={() => {}}
                        value=''
                        />
                    </div>
                    {false && <div className={styles.box}></div>}
                </form>
                <div className={styles.account}>
                    <NavLink to={ROUTES.HOME} className={styles.favourites}>
                        <svg className={styles['icon-fav']}> 
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg>
                    </NavLink>
                    <NavLink to={ROUTES.CART} className={styles.cart}>
                        <svg className={styles['icon-cart']}> 
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                        <span className={styles.count}>
                            2
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;