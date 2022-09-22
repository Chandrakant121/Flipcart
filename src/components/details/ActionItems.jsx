import { Box, Button, styled } from '@mui/material'
import React from 'react'

const LeftContainer = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;
`

const ActionItems = ({ product }) => {
    return (
        <LeftContainer>
            <img src={product.detailUrl}></img>
            <Button variant="contained">Add to Cart</Button>
            <Button variant="contained">Buy Now</Button>
        </LeftContainer>
    )
}

export default ActionItems