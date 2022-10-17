import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
const Component = styled(Menu)`
margin-top: 5px;
`
const Logout = styled(Typography)`
font-size: 14px;
margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logoutuser = () => {
        setAccount("")
        localStorage.clear("token");
        alert("Logout Successfully")
        navigate("/")
    }

    return (
        <>
            <Box>
                <Typography onClick={handleClick} style={{ marginTop: 2, cursor: 'pointer' }} >{account}</Typography>
            </Box>

            <Component
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logoutuser() }}>
                    <PowerSettingsNewIcon color="primary" fontsize="small" />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile