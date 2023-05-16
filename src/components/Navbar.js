import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Hamburger from '../assets/images/icon-hamburger.svg'
import Close from '../assets/images/icon-close.svg'
import Menubar from './Menubar'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <Box role='nav' sx={{boxSizing:'border-box',position:'relative',flexWrap:'wrap', display:'flex', justifyContent:'space-between',alignItems:'center',maxWidth:'1200px', width:'100%',marginInline:'auto', p:{md:'0',xs:'1rem 1.5rem'}}}>
            <Box>
                <Box role='img' alt='easybank logo' component='img' src={Logo}></Box>
            </Box>
            <Box sx={{display:{md:'block', xs:'none'}}}>
                <List sx={{display:'flex'}}>
                    <ListItem>
                        <ListItemText tabIndex='0' role='menuitem' className='navItem' sx={{color:'#b8b8b8',cursor:'pointer'}} primary='Home' />
                    </ListItem>
                    <ListItem>
                        <ListItemText tabIndex = '0' role='menuitem' className='navItem' sx={{color:'#b8b8b8',cursor:'pointer'}} primary='About' />
                    </ListItem>
                    <ListItem>
                        <ListItemText tabIndex = '0' role='menuitem' className='navItem' sx={{color:'#b8b8b8',cursor:'pointer'}} primary='Contact' />
                    </ListItem>
                    <ListItem>
                        <ListItemText tabIndex = '0' role='menuitem' className='navItem' sx={{color:'#b8b8b8',cursor:'pointer'}} primary='Blog' />
                    </ListItem>
                    <ListItem>
                        <ListItemText tabIndex = '0' role='menuitem' className='navItem' sx={{color:'#b8b8b8',cursor:'pointer'}} primary='Careers' />
                    </ListItem>
                </List>
            </Box>
            <Box sx={{mr:'1rem', display:{md:'block',xs:'none'}}}>
                <Button component='button' sx={{borderRadius:'30px', color:'#fff',textTransform:'none',p:'10px 25px',backgroundImage: 'linear-gradient(to right, hsl(136, 65%, 51%) , hsl(192, 70%, 51%))',':hover':{backgroundImage: 'linear-gradient(to right, hsl(136, 65%, 61%) , hsl(192, 70%, 61%))'}}}>Request Invite</Button>
            </Box>
            {!toggleMenu?<Box alt='menu icon' component='img' onClick={()=>setToggleMenu((e)=>!e)} src={Hamburger} sx={{display:{md:'none',xs:'block'}}}></Box>:<Box alt='close icon' component='img' onClick={()=>setToggleMenu((e)=>!e)} src={Close} sx={{display:{md:'none',xs:'block'}}}></Box>}
            {toggleMenu&&<Menubar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />}
        </Box>
    )
}

export default Navbar
