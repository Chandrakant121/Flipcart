import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const Container = styled(Box)`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
row-gap: 30px;
column-gap: 10px;
margin: auto;
justify-content: space-around;
padding: 20px;
`

const Text = styled(Typography)`
font-size: 14px;
margin-top: 5px;
`

const SubContainer = styled(Box)`
align-items: center;
display: block;
text-align: center;
height: 380px;
width: 280px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 10px;`

const Img = styled("img")`
height: 250px;
width: 150px;
cursor: pointer;
object-fit: cover;


`

// const ShortTitle = styled(Box)`
// font-size: 16px;
// /* padding: 8px; */
// margin-top: 4px;
// font-weight: bold;
// `

const Allproduct = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.getProducts)
    console.log(products, "amklasn")


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    // <li>{e.description}</li>
    return <>
        <Container >
            {
                products.slice(7, 22).map((e) => {
                    return <>
                        {/* <SubContainer> */}
                        <Link to={`product/${e.id}`} style={{ textDecoration: "none" }} >
                            <SubContainer>
                                <Img src={e.url} alt="" />
                                <Text style={{ fontWeight: 600, color: '#212121' }} >{e.title.shortTitle}</Text>
                                <Text style={{ color: "green" }} >{e.discount}</Text>
                                <Text style={{ color: "#212121", opacity: "0.6" }} >{e.tagline}</Text>
                                <Text style={{ color: "green" }} >₹ {e.price.cost}</Text>
                            </SubContainer>
                        </Link>

                        {/* </SubContainer> */}

                    </>
                })
            }
        </Container>
    </>
}

export default Allproduct