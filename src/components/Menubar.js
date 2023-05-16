import { Box, Typography } from '@mui/material'
import React from 'react'

function BackgroundBlur({toggleMenu, setToggleMenu}){
    return(<Box onClick={()=>setToggleMenu((p)=>!p)} sx={{overflow:'hidden',background:'rgba(0, 0, 0, 0.2)',right:0,top:55,position:'absolute',minHeight:'100vh',width:'100%', display:{md:'none',xs:'block'}, zIndex:15}}>
    </Box>
    )

}

const Menubar = ({toggleMenu, setToggleMenu}) => {
    return (
        <>
            <BackgroundBlur toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <Box role='menubar' sx={{bgcolor:'#fff',textAlign:'center',position:'absolute',top:60,right:0,left:0,display:{xs:'flex',md:'none'},overflow:'hidden',gap:2,flexDirection:'column', justifyContent:'center',maxWidth:'1200px', width:'90%',minHeight:'18rem', marginInline:'auto', mt:'1rem', borderRadius:'6px', boxShadow:'0px 40px 100px 0px rgba(47, 47, 47, 0.7)', zIndex:20}}>
                    <Typography role='menuitem' sx={{fontSize:'1.3rem'}}>Home</Typography>
                    <Typography role='menuitem' sx={{fontSize:'1.3rem'}}>About</Typography>
                    <Typography role='menuitem' sx={{fontSize:'1.3rem'}}>Contact</Typography>
                    <Typography role='menuitem' sx={{fontSize:'1.3rem'}}>Blog</Typography>
                    <Typography role='menuitem' sx={{fontSize:'1.3rem'}}>Careers</Typography>
            </Box>
        </>
    )
}

export default Menubar
