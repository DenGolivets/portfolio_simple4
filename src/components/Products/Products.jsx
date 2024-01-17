import React from 'react';
import styles from '../../styles/Products.module.css';
import { NavLink } from 'react-router-dom';

const Products = ({ 
    title,
    style = {},
    products = [],
    amount,
}) => {

    const list = products.filter((_, i) => i < amount);

    return (
    <section className={styles.products} style={style}>
        {title && <h2>{title}</h2>}
            <div className={styles.list}>
                {list.map(({ id, images, title, category: { name: cat }, price }) => (
                    <NavLink to={`/products/${id}`} key={id} className={styles.product}>
                        <div className={styles.image} 
                        style={{ backgroundImage: `url(${images[0]})` }} 
                        // style={{ backgroundImage: `url(${JSON.parse(images[0])[0]})` }}
                        />  
                        <div className={styles.wrapper}>
                            <h3 className={styles.title}>
                                {title}
                            </h3>
                            <div className={styles.cat}>
                                {   }
                            </div>
                            <div className={styles.info}>
                                <div className={styles.prices}>
                                    <div className={styles.price}>
                                        {price}
                                    </div>
                                    <div className={styles.oldPrice}>
                                        {Math.floor(price * 1.5)}$
                                    </div>
                                </div>
                                <div className={styles.purchases}>
                                    {Math.floor(Math.random() * 20 +1)} purchased
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
    </section>
    )
}

export default Products;    