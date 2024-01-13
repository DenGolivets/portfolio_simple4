import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const { list } = useSelector(({ categories }) => categories);
    console.log('list', list);

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>
                CATEGORIES
            </div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({ id, name }) => (
                        <li key={id}>
                        <NavLink
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                        to={`/categories/${id}`}
                        >
                            {name}
                        </NavLink>
                    </li>
                    ))}
                    
                </ul>
            </nav>
            <div className={styles.footer}>
                <a href="#" className={styles.link}>
                    Help
                </a>
                <a href="#" className={styles.link} style={{ textDecoration: 'underline' }}>
                    Terms & Conditions
                </a>
            </div>
        </section>
    )
}

export default Sidebar;