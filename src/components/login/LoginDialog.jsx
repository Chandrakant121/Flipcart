import React from 'react'
import { useState, useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material'

import { authenticateSignup, authenticateLogin } from "../../service/api"


const Component = styled(Box)`
height: 86vh;
width: 100vh;
`
const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height: 81%;
width: 30%;
padding: 47px 35px;
& > p, & > h5{
    color: #FFFFFF;
    font-weight: 600;
}
`
const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
padding: 25px 35px;
flex: 1;
& > div, & > button, & > p {
    margin-top: 20px;
}
`

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`


const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
height: 48px;
border-radius: 2px;
`

const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`

const CreateAccount = styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`

const Error = styled(Typography)`
font-size: 10px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`

const accountInitialValues = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get access to your Orders. Wishlist and Recommendations"
    },
    signup: {
        view: "signup",
        heading: "Looks like you'are new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialvalues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
}

const loginInitalValues = {
    username: "",
    password: ""
}


const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialvalues)
    const { setAccount } = useContext(DataContext)
    const [login, setLogin] = useState(loginInitalValues)
    const [error, setError] = useState(false)

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
        setError(false)
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }


    const onInputChange = (e) => {
        // console.log(e.target.value)
        //e.target.name==> it is var and used as key so in [] braces
        setSignup({ ...signup, [e.target.name]: e.target.value })
        // console.log(signup)
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup)
        // console.log(response)
        if (!response) return
        handleClose()
        setAccount(signup.firstname)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async () => {
        let res = await authenticateLogin(login)
        let token = res.data.token
        // console.log(token)
        if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(token))
            handleClose()
            setAccount(res.data.data.firstname)
            alert("Login to user Account")
        }
        else {
            setError(true)
        }

    }



    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: "flex", height: "100%" }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {account.subHeading}
                        </Typography>
                    </Image>


                    {
                        account.view === "login" ?
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                                {error && <Error>Please enter valid username or password</Error>}
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                                <Text>By continuing, you agree to Flipkart's Terms of use and Privacy Policy. </Text>
                                <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                                <Typography style={{ textAlign: "center" }} >OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()} >New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" name='firstname' onChange={(e) => onInputChange(e)} label="Enter Firstname" />
                                <TextField variant="standard" name='lastname' onChange={(e) => onInputChange(e)} label="Enter Lastname" />
                                <TextField variant="standard" name='username' onChange={(e) => onInputChange(e)} label="Enter Username" />
                                <TextField variant="standard" name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
                                <TextField variant="standard" name='password' onChange={(e) => onInputChange(e)} label="Enter Password" />
                                <TextField variant="standard" name='phone' onChange={(e) => onInputChange(e)} label="Enter Phone" />
                                <LoginButton onClick={() => signupUser()} >Continue</LoginButton>

                            </Wrapper>

                    }



                </Box>
            </Component>
        </Dialog >
    )
}

export default LoginDialog