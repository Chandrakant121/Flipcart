import { Grid, Box, Typography, styled, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Totalview from './Totalview'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';


const Container = styled(Grid)`
padding:30px 130px
`
const Header = styled(Box)`
padding: 15px 25px;
`

const PlaceBtn = styled(Box)`
padding: 16px 20px;
background-color: #fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0/10%);
`

const StledButton = styled(Button)`
display: flex;
margin-left: auto;
background-color: #fb641b;
color: #fff;
width: 240px;
height: 50px;
`

const Cart = () => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (cartItems && id !== cartItems.id)
            dispatch(addToCart(id));
        console.log(cartItems);
    }, [dispatch, cartItems, id]);

  
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => {
                                    return <CartItem item={item} />
                                })
                            }
                            <PlaceBtn>
                                <StledButton>Place Order</StledButton>
                            </PlaceBtn>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Totalview cartItems={cartItems} />
                        </Grid>

                    </Container>
                    :
                    <div>Empty</div>
            }
        </>
    )
}

export default Cart