import { AppBar, Toolbar, styled, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import Search from "./Serach"
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
//typography === paragrap

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 6%', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})


const SubHeading = styled(Typography)`
font-size: 10px;
font-style: italic;
`

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
    color:inherit;
`;

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }} >
                <Component to="/">
                    <img src={logoURL} alt="err" style={{ width: 75 }} />
                    <Box style={{ display: "flex" }} >
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader >
    )
}

export default Header