import React from 'react'
import {Box} from '@mui/material'
import Navbar from './Navbar'
import Hero from './Hero'
import HeroBelowMobile from '../assets/images/bg-intro-mobile.svg'
import HeroBelow from '../assets/images/bg-intro-desktop.svg'
import MidSection from './MidSection'
import ArticleSection from './ArticleSection'
import Footer from './Footer'


const Layout = () => {
    return (
        <Box component='main'>
            <Box sx={{position:'fixed',bgcolor:'#fff', width:'100%', zIndex:2}}>
                <Navbar />
            </Box>
            <Box sx={{backgroundImage:{md:`url(${HeroBelow})`, xs:`url(${HeroBelowMobile})`}, backgroundPositionX:{md:'35rem', xs:'right'},backgroundRepeat:'no-repeat',backgroundPositionY:{md:'-13rem', xs:'-3.5rem'}, backgroundClip:'center', backgroundSize:{md:'80rem', xs:'26rem'}}}>
                <Hero />
            </Box>
            <Box sx={{bgcolor:'hsl(0, 0%, 98%)',p:'4rem 0'}}>
                <MidSection />
            </Box>
            <Box sx={{bgcolor:'hsl(0, 0%, 98%)',p:'4rem 0'}}>
                <ArticleSection />
            </Box>
            <Box sx={{bgcolor:'hsl(233, 26%, 24%)',p:'4rem'}}>
                <Footer />
            </Box>
        </Box>
    )
}

export default Layout
