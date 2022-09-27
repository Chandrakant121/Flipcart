import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  margin-top: 37px;
  color: #000;

`;

const Serach = () => {
    const [text, setText] = useState();
    const [open, setOpen] = useState(true)

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    const dispatch = useDispatch();

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <SearchContainer>
                <InputSearchBase
                    placeholder="Search for products, brands and more"
                    onChange={(e) => getText(e.target.value)}
                    value={text}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text &&
                    <ListWrapper hidden={open}>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link
                                        to={`/product/${product.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={() => setText("")}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
                }
            </SearchContainer>
        </>
    )
}

export default Serach