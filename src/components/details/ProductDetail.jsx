import { Box, Typography } from '@mui/material'
import React from 'react'


const ProductDetail = ({ product }) => {
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSixe: 14 }}> 9 Rating & 4 Reviews
                <Box component="span"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" style={{ width: 77, marginLeft: 20 }} alt="Img" /></Box>
            </Typography>

            <Typography>
                <Box component="span" style={{ fontSize: 28 }} >₹{product.price.cost}</Box>&nbsp; &nbsp;&nbsp;
                <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount}</Box>
            </Typography>

            <Typography>
                Available offers
            </Typography>

            <Box>
                <Typography>Get extra 20% off upto ₹50 on 1item(s) T&C</Typography>
                <Typography>Get extra 13% off (price inclusive of discount) T&C</Typography>
                <Typography>sign up for Flipcart pay later and get Flipcart Gift Card worth ₹100* Know More</Typography>
                <Typography>Buy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
                <Typography>5% Cashback on Flipcart Axis Bank Card</Typography>
                <Typography>No Cost EMI Bajaj Finense EMI Card on cart value above ₹2999 T&C</Typography>
                

            </Box>

        </>
    )
}

export default ProductDetail