import React, { useEffect } from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import Banner from '../Categories/Banner/Banner';
import { filterByPrice } from '../../features/products/productsSlice';

const Home = () => {

    const dispatch = useDispatch();
    const { products: { list, filtered }, categories } = useSelector ((state) => state);

    useEffect(() => {
        if(!list.length)
        return;
        dispatch(filterByPrice(500));
    }, [dispatch, list.length]);

    return (
        <>
            <Poster />
            <Products products={list} amount={5} title='Trending' />
            <Categories products={categories.list} amount={6} title='Worth seeing' />
            <Banner />
            <Products products={filtered} amount={5} title='Less than 500$' />
        </>
    )
}

export default Home;