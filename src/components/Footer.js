import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/logo copy.svg'
import FacebookIcon from '../assets/images/icon-facebook.svg'
import YoutubeIcon from '../assets/images/icon-youtube.svg'
import InstagramIcon from '../assets/images/icon-instagram.svg'
import PinterestIcon from '../assets/images/icon-pinterest.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'
import '../App.css'

const Footer = () => {
    return (
        <Box sx={{maxWidth:'1200px', width:'100%', marginInline:'auto', display:'flex',justifyContent:'space-between',flexDirection:{md:'row',xs:'column'} ,alignItems:'center', gap:{md:15,xs:5}}}>
            <Box>
                <Box component='img' src={Logo}></Box>
                <Box sx={{mt:{md:'2.5rem',xs:'2rem'}}}>
                    <Box component='img' src={FacebookIcon}></Box>
                    <Box sx={{ml:'.8rem'}} component='img' src={YoutubeIcon}></Box>
                    <Box sx={{ml:'.8rem'}} component='img' src={InstagramIcon}></Box>
                    <Box sx={{ml:'.8rem'}} component='img' src={PinterestIcon}></Box>
                    <Box sx={{ml:'.8rem'}} component='img' src={TwitterIcon}></Box>
                </Box>
            </Box>
            <Box sx={{display:'flex', gap:{md:15,xs:0}, flex:1,flexDirection:{md:'row',xs:'column'}}}>
                <List sx={{display:'flex', p:0, flexDirection:'column'}}>
                    <ListItem sx={{p:'.2rem'}}>
                        <ListItemText sx={{color:'#fff',cursor:'pointer',textAlign:{md:'left',xs:'center'},':hover':{color:'hsl(136, 65%, 51%)'}}} primary='About us' />
                    </ListItem>
                    <ListItem sx={{p:'.2rem'}}>
                        <ListItemText sx={{color:'#fff',cursor:'pointer',textAlign:{md:'left',xs:'center'},':hover':{color:'hsl(136, 65%, 51%)'}}} primary='Contact' />
                    </ListItem>
                    <ListItem sx={{p:'.2rem'}}>
                        <ListItemText sx={{color:'#fff',cursor:'pointer',textAlign:{md:'left',xs:'center'},':hover':{color:'hsl(136, 65%, 51%)'}}} primary='Blog' />
                    </ListItem>
                </List>
                <List sx={{display:'flex', p:0, flexDirection:'column'}}>
                    <ListItem sx={{p:'.2rem'}}>
                        <ListItemText sx={{color:'#fff',cursor:'pointer',textAlign:{md:'left',xs:'center'},':hover':{color:'hsl(136, 65%, 51%)'}}} primary='Careers' />
                    </ListItem>
                    <ListItem sx={{p:'.2rem'}}>
                        <ListItemText sx={{color:'#fff',cursor:'pointer',textAlign:{md:'left',xs:'center'},':hover':{color:'hsl(136, 65%, 51%)'}}} primary='About' />
                    </ListItem>
                    <ListItem sx={{p:'.2rem'}}>
                        <ListItemText sx={{color:'#fff',cursor:'pointer',textAlign:{md:'left',xs:'center'},':hover':{color:'hsl(136, 65%, 51%)'}}} primary='Privacy Policy' />
                    </ListItem>
                </List>
            </Box>
            <Box >
                <Button component='button' sx={{borderRadius:'30px', color:'#fff',textTransform:'none',p:'10px 25px',backgroundImage: 'linear-gradient(to right, hsl(136, 65%, 51%) , hsl(192, 70%, 51%))'}}>Request Invite</Button>
                <Typography sx={{color:'#b8b8b8', fontSize:'10px', fontWeight:'300',mt:{md:'2rem',xs:'1rem'}}}>
                © Copyright.All rights reserved
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
