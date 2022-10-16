import { Grid, Box, Typography, styled, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Totalview from './Totalview'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import EmptyCart from './EmptyCart'


const Container = styled(Grid)(({ theme }) => ({
    padding: "30px 130px",
    [theme.breakpoints.down("md")]: {
        padding: "0"
    }

}))

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

const LeftComponent = styled(Grid)`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const RightComponent = styled(Grid)`
margin-left: 10px;
`

const Cart = () => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const navigate = useNavigate()
    const { id } = useParams();
    let token = JSON.parse(localStorage.getItem("token"));
    const dispatch = useDispatch();

    useEffect(() => {
        if (cartItems && id !== cartItems.id)
            dispatch(addToCart(id));
        // console.log(cartItems);
    }, [dispatch, cartItems, id]);

    const checklogin = () => {
        if (token) {
            // navigate("/payment")
            alert ("payment page in process")
        }
        else {
            alert("Login Or Register with us")
            // navigate("/")
        }
    }

    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={8} md={8} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => {
                                    return <CartItem item={item} />
                                })
                            }
                            <PlaceBtn>
                                <StledButton onClick={() => checklogin()} >Place Order</StledButton>
                            </PlaceBtn>
                        </LeftComponent>

                        <RightComponent item lg={3} md={3} sm={12} xs={12}>
                            <Totalview cartItems={cartItems} />
                        </RightComponent>

                    </Container>
                    :
                    <EmptyCart />
            }
        </>
    )
}

export default Cart