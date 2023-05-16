import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroUp from '../assets/images/image-mockups.png'

const Hero = () => {
    return (
        <Box sx={{marginInline:'auto',pt:'3rem'}}>
            <Box sx={{maxWidth:'1200px',minHeight:{md:'90vh',xs:'auto'},marginInline:'auto', flexDirection:{md:'row',xs:'column-reverse'},display:'flex', alignItems:'center', flexWrap:'wrap',position:'relative'}}>
                <Box sx={{display:'flex',flexDirection:'column',maxWidth:'450px', width:'90%', mt:{md:'0',xs:'2rem'}, mb:'1rem',textAlign:{md:'left',xs:'center'}}}>
                    <Typography variant='h1' sx={{fontSize:{md:'3.5rem',xs:'2.5rem'}, fontWeight:'300', color:'hsl(233, 26%, 24%)'}}>
                        Next generation digital banking
                    </Typography>
                    <Typography variant='subtitle1' sx={{fontWeight:'300', fontSize:{md:'1rem',xs:'.9rem'}, color:'hsl(233, 8%, 62%)',mt:'20px'}}>
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </Typography>
                    <Box sx={{mt:{md:'2rem',xs:'1.3rem'}}}>
                        <Button component='button' sx={{borderRadius:'30px', color:'#fff',textTransform:'none',p:'10px 25px',backgroundImage: 'linear-gradient(to right, hsl(136, 65%, 51%) , hsl(192, 70%, 51%))',':hover':{backgroundImage: 'linear-gradient(to right, hsl(136, 65%, 61%) , hsl(192, 70%, 61%))'}}}>Request Invite</Button>
                    </Box>               
                </Box>
                <Box component='img' src={HeroUp} sx={{width:{md:'40rem',xs:'50%'},minWidth:'15rem',position:{md:'absolute',xs:'static'},right:-210, top:-40, zIndex:'0', maxWidth:"700px"}}></Box>
            </Box>
        </Box>
    )
}

export default Hero
