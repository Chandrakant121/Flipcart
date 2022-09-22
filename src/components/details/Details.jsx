import { Box, Typography, Grid, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productAction'
import ActionItems from "./ActionItems"

const Component = styled(Box)`
 background: #F2F2F2;
 margin-top: 55px;
`
const Container = styled(Grid)`
background: #FFFFFF;
display: flex;
`

const RightContainer = styled(Grid)`
margin-top: 50px;
`


const Details = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    // console.log({ id }) 

    const { loading, product } = useSelector(state => state.getProductDetails)

    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, product, loading])

    // console.log(product)

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>

                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems product={product} />
                    </Grid>

                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>

                        <Typography style={{ marginTop: 5, color: "#878787", fontSixe: 14 }}> 9 Rating & 4 Reviews
                            <Box component="span"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" style={{ width: 77, marginLeft: 20 }} alt="Img" /></Box>
                        </Typography>

                        <Typography>
                            <Box component="span" style={{ fontSize: 28 }} >₹{product.price.cost}</Box>&nbsp; &nbsp;&nbsp;
                            <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount}</Box>


                        </Typography>


                    </RightContainer>

                </Container>
            }
        </Component>
    )
}

export default Details