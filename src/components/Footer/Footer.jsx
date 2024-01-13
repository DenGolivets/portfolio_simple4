import React from 'react';
import styles from '../../styles/Footer.module.css';
import LOGO from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <NavLink to={ROUTES.HOME}>
                    <img src={LOGO} alt="" />
                </NavLink>
            </div>
            <div className={styles.rights}>
                All Rights Reserved. @ 2024
            </div>
            <div className={styles.socials}>
                <a href='https://www.instagram.com/terra4beat/' target='_blank' rel='noreferrer'>
                    <svg className='icon'> 
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>
                <a href='https://www.instagram.com/terra4beat/' target='_blank' rel='noreferrer'>
                    <svg className='icon'> 
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
                <a href='https://www.instagram.com/terra4beat/' target='_blank' rel='noreferrer'>
                    <svg className='icon'> 
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default Footer;