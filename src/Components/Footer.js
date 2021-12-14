import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

const footerStyle = makeStyles(theme => ({
    root: {
        background: '#22242b',
        color: 'white',
        height: '300px',
        display: 'flex',
        justifyContent:"center",
        alignItems: 'center',
        position: 'relative',
    },
    credits: {
        
    },
    socialIcons: {
        position:'absolute',
        right: '100px',
        bottom: '40px',
    },
    tradeMark: {
        fontSize: '13px',
        position:'absolute',
        left: '80px',
        bottom: '40px',
    },
    iconLinks: {
        textDecoration: 'none',
        color:'white',
        margin: '7px',
        transition: '.3s ease all',
        '& > svg': {
            transition: '.3s ease-in-out all',
        },
        '&:hover > svg': {
            fill: '#9a94ff'
        }
    },
    alias: {
        letterSpacing: '1.4px',
    },
    extras: {
        display: 'flex',
        flexDirection: 'row',
    },
    navigation: {
        display: 'flex',
        flexDirection: 'column',
        '&  div': {
            margin: '5px',
        }
    },
    navLinks: {
        color: 'white',
    }
}))

const Footer = () => {
    const useStyle = footerStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <Box component='div' className={useStyle.bottomNav}>
                <Box component='section' className={useStyle.extras}>
                    <Box component='div' className={useStyle.notes}>
                        <Typography variant='body1' className={useStyle.alias}>SIMEON AKANBI</Typography>
                        <Typography></Typography>
                    </Box>
                    <Box component='div' classname={useStyle.navigation}>
                        <Box component='div'><a className={useStyle.navLinks} href='#home'>Home</a></Box>
                        <Box component='div'><a className={useStyle.navLinks} href='#home'>About</a></Box>
                        <Box component='div'><a className={useStyle.navLinks} href='#home'>Stacks</a></Box>
                        <Box component='div'><a className={useStyle.navLinks} href='#home'>Projects</a></Box>
                        <Box component='div'><a className={useStyle.navLinks} href=''>Contact me</a></Box>
                        <Button>Resume</Button>
                    </Box>
                </Box>
            </Box>
            <Box component='div' className={useStyle.credits}>
                <Box component='div' className={useStyle.tradeMark}>&copy; 2021 Simeon Akanbi. All rights reserved.</Box>
                <Box component='div' className={useStyle.socialIcons}>
                    <a className={useStyle.iconLinks} href='https://www.github.com/simple-codes22'><GitHub /></a>
                    <a className={useStyle.iconLinks} href='https://www.github.com/simple-codes22'><LinkedIn /></a>
                    <a className={useStyle.iconLinks} href='https://www.twitter.com/'><Twitter /></a>
                    <a className={useStyle.iconLinks} href='https://www.facebook.com/'><Facebook /></a>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
