import React from 'react'
import Navbar from './Navrbar'
import Banner from './Banner'
import Slide from './Slide'
import { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
// import { Fragment } from 'react'
// fragment are fast than div

const Component = styled(Box)`
padding: 10px 10px;
background: #F2F2F2 ;
`

const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.getProducts)
    console.log(products)


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <Slide products={products} title="Deal of the day" timer={true} />
                <Slide products={products} title="Discount for you" timer={false} />
            </Component>

        </>
    )
}

export default Home