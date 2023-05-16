import { Box, Typography } from '@mui/material'
import React from 'react'
import OnlineBankingIcon from '../assets/images/icon-online.svg'
import SimpleBudgetingIcon from '../assets/images/icon-budgeting.svg'
import FastOnboardingIcon from '../assets/images/icon-onboarding.svg'
import OpenApiIcon from '../assets/images/icon-api.svg'

const MidSection = () => {
    return (
        <Box component='section' sx={{maxWidth:'1200px',width:'100%', marginInline:'auto', textAlign:{md:'left',xs:'center'}}}>
            <Box sx={{maxWidth:'35rem', width:'90%', marginInline:{md:'0',xs:'auto'}}}>
                <Typography variant='h1' sx={{fontSize:{md:'2.5rem',xs:'2rem', fontWeight:'300', color:'hsl(233, 26%, 24%)'}}}>Why choose Easybank?</Typography>
                <Typography sx={{color:'hsl(233, 8%, 62%)', mt:'1rem'}} variant='subtitle1'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Typography>
            </Box>
            <Box sx={{mt:'3rem', display:'flex', gap:2.5, flexDirection:{md:'row', xs:'column'}, alignItems:{md:'normal',xs:'center'}}}>
                <Box sx={{maxWidth:'30rem', width:'90%'}}>
                    <Box sx={{display:'block',width:'4.5rem',marginInline:{md:'0', xs:'auto'}}} alt='online banking icon' component='img' src={OnlineBankingIcon}></Box>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300', m:'1rem 0'}}>
                        Online Banking
                    </Typography>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                    </Typography>
                </Box>
                <Box sx={{maxWidth:'30rem', width:'90%'}}>
                    <Box sx={{display:'block',width:'4.5rem',marginInline:{md:'0', xs:'auto'} }} alt='simple budgeting icon' component='img' src={SimpleBudgetingIcon}></Box>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300', m:'1rem 0'}}>
                        Simple Budgeting 
                    </Typography>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. 
                    </Typography>
                </Box>
                <Box sx={{maxWidth:'30rem', width:'90%'}}>
                    <Box sx={{display:'block',width:'4.5rem',marginInline:{md:'0', xs:'auto'}}} alt='fast onboarding icon' component='img' src={FastOnboardingIcon}></Box>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300', m:'1rem 0'}}>
                        Fast Onboarding 
                    </Typography>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                    </Typography>
                </Box>
                <Box sx={{maxWidth:'30rem', width:'90%'}}>
                    <Box sx={{display:'block',width:'4.5rem',marginInline:{md:'0', xs:'auto'}}} alt='open api icon' component='img' src={OpenApiIcon}></Box>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 26%, 24%)', fontSize:'1.5rem', fontWeight:'300', m:'1rem 0'}}>
                        Open API 
                    </Typography>
                    <Typography variant='subtitle1' sx={{color:'hsl(233, 8%, 62%)', fontSize:'1rem', fontWeight:'300'}}>
                        Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                    </Typography>
                </Box>
                
            </Box>
        </Box>
    )
}

export default MidSection
