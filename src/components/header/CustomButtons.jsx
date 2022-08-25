import React, { useContext } from 'react'
import { useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material'
import { ShoppingCart } from "@mui/icons-material"
import { DataContext } from '../../context/DataProvider';

import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        fontWeight: "Bold",
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Box)`
display: flex;
`

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));



const CustomButtons = () => {

    const [open, setOpen] = useState(false)
    const { account, setAccount } = useContext(DataContext)

    const openDialog = () => {
        setOpen(true)
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="container" onClick={() => openDialog()} >Login</LoginButton>
            }



            <Typography style={{ marginTop: 3, width: 135, fontSize: 16 }} >Become a Seller</Typography>
            <Typography style={{ marginTop: 3, fontSize: 16 }} >More</Typography>

            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons