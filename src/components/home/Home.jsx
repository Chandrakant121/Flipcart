import React from 'react'
import Navbar from './Navrbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
// import { Fragment } from 'react'
// fragment are fast than div

const Component = styled(Box)`
padding: 10px 10px;
background: #F2F2F2 ;
`

const Home = () => {
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
            </Component>

        </>
    )
}

export default Home