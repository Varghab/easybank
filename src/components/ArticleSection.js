import { Box, Typography } from '@mui/material'
import React from 'react'
import CashImage from '../assets/images/image-currency.jpg'
import RestaurantImage from '../assets/images/image-restaurant.jpg'
import FlightImage from '../assets/images/image-plane.jpg'
import ConfettiImage from '../assets/images/image-confetti.jpg'

const ArticleSection = () => {
    return (
        <Box sx={{maxWidth:'1200px',width:'100%', marginInline:'auto'}}>
            <Box sx={{maxWidth:'35rem', width:'90%', marginInline:{md:'0',xs:'auto'}, textAlign:{md:'left',xs:'center'}}}>
                <Typography variant='h1' sx={{fontSize:{md:'2.5rem',xs:'2rem', fontWeight:'300', color:'hsl(233, 26%, 24%)', letterSpacing:1}}}>Latest Articles</Typography>
            </Box>
            <Box sx={{display:'flex', gap:2.5,alignItems:{md:'normal',xs:'center', flexWrap:'wrap'}, padding:{md:0,xs:'0 1rem'}, mt:{md:'3rem',xs:'1.2rem'}}}>
            <Box component='article' className='article' tabIndex='0' sx={{boxShadow:'2px 0px 5px 1px rgb(223, 223, 223)', marginInline:'auto',flex:{md:'20%',sm:'40%',xs:'90%'},bgcolor:'#fff', borderRadius:'.6rem'}}>
                    <Box sx={{display:'block',width:'100%',aspectRatio:'1/0.67',marginInline:{md:'0', xs:'auto'},borderRadius:'.6rem .6rem 0 0'}} alt='currency' component='img' src={CashImage}></Box>
                    <Box sx={{maxWidth:'90%', m:'1rem auto'}}>
                        <Typography sx={{color:'hsl(233, 8%, 62%)', fontSize:'.8rem'}}>By Clare Robinson</Typography>
                        <Typography variant='subtitle1' sx={{lineHeight:'1.3',color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300',transitionDuration:'0.2s',':hover':{color:'#23FFB5'}}}>
                        Receive money in any currency with no fees 
                        </Typography>
                        <Typography variant='subtitle1' sx={{mt:'1rem',color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … 
                        </Typography>
                    </Box>
                </Box>
                <Box component='article' className='article' tabIndex='0' sx={{boxShadow:'2px 0px 5px 1px rgb(223, 223, 223)',marginInline:'auto',flex:{md:'20%',sm:'40%',xs:'90%'}, bgcolor:'#fff', borderRadius:'.6rem'}}>
                    <Box sx={{display:'block',width:'100%',marginInline:{md:'0', xs:'auto'}, borderRadius:'.6rem .6rem 0 0'}} alt='restaurant' component='img' src={RestaurantImage}></Box>
                    <Box sx={{maxWidth:'90%', m:'1rem auto'}}>
                        <Typography sx={{color:'hsl(233, 8%, 62%)', fontSize:'.8rem'}}>By Varghab Shib</Typography>
                        <Typography variant='subtitle1' sx={{lineHeight:'1.3',color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300',transitionDuration:'0.2s',':hover':{color:'#23FFB5'}}}>
                        Know your money! 
                        </Typography>
                        <Typography variant='subtitle1' sx={{mt:'1rem',color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                        </Typography>
                    </Box>
                </Box>
                <Box component='article' className='article' tabIndex='0' sx={{boxShadow:'2px 0px 5px 1px rgb(223, 223, 223)', marginInline:'auto',flex:{md:'20%',sm:'40%',xs:'90%'},bgcolor:'#fff', borderRadius:'.6rem'}}>
                    <Box sx={{display:'block',width:'100%',marginInline:{md:'0', xs:'auto'}, borderRadius:'.6rem .6rem 0 0'}} alt='flight' component='img' src={FlightImage}></Box>
                    <Box sx={{maxWidth:'90%', m:'1rem auto'}}>
                        <Typography sx={{color:'hsl(233, 8%, 62%)', fontSize:'.8rem'}}>By Jagriti Debbarma</Typography>
                        <Typography variant='subtitle1' sx={{lineHeight:'1.3',color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300',transitionDuration:'0.2s',':hover':{color:'#23FFB5'}}}>
                        Take your Easybank card wherever you go
                        </Typography>
                        <Typography variant='subtitle1' sx={{mt:'1rem',color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
                        </Typography>
                    </Box>
                </Box>
                <Box component='article' className='article' tabIndex='0' sx={{boxShadow:'2px 0px 5px 1px rgb(223, 223, 223)', marginInline:'auto',flex:{md:'20%',sm:'40%',xs:'90%'},bgcolor:'#fff', borderRadius:'.6rem'}}>
                    <Box sx={{display:'block',width:'100%',marginInline:{md:'0', xs:'auto'}, borderRadius:'.6rem .6rem 0 0'}} alt='confetti' component='img' src={ConfettiImage}></Box>
                    <Box sx={{maxWidth:'90%', m:'1rem auto'}}>
                        <Typography sx={{color:'hsl(233, 8%, 62%)', fontSize:'.8rem'}}>By Jagriti Debbarma</Typography>
                        <Typography variant='subtitle1' sx={{lineHeight:'1.3',color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300',transitionDuration:'0.2s',':hover':{color:'#23FFB5'}}}>
                        Our invite-only Beta accounts are now live! 
                        </Typography>
                        <Typography variant='subtitle1' sx={{mt:'1rem',color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... 
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ArticleSection
