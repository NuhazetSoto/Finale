import React from "react";
import "./Header.css";
import logoUrl from "../../assets/react.svg";
import { Box, Typography } from "@mui/material";

const Header = () => {
    return(
        <>
        <Box sx={{backgroundColor: 'black', height:'60px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Typography sx={{color:'white', fontWeight:'bold'}}>Hola</Typography>
        </Box>
        </>
    )
}
export default Header;
