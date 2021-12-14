import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook, FileDownloadOutlined } from '@mui/icons-material';

const footerStyle = makeStyles(theme => ({
    root: {
        background: '#22242b',
        color: 'white',
        height: '60vh',
        width: '100%',
        display: 'flex',
        justifyContent:"center",
        alignItems: 'center',
        position: 'relative',
    },
    socialIcons: {
        position:'absolute',
        right: '100px',
        bottom: '20px',
    },
    tradeMark: {
        fontSize: '13px',
        position:'absolute',
        left: '80px',
        bottom: '20px',
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
        fontSize: '1.2rem',
    },
    extras: {
        display: 'flex',
        flexDirection: 'row',

    },
    nav: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: '450px',
        marginBottom: '10px',
        // position: 'absolute',
        // right: '100px',
    },
    navCover: {
        margin: '10px',
    },
    navLinks: {
        color: 'white',
        fontSize: '15.2px',
        textDecoration: 'none'
    },
    notes: {
        position: 'absolute',
        left: '80px',
    },
    desc: {
        marginTop: '30px',
        width: '400px',
        fontSize: '13px',

    }
}))

const Footer = () => {
    const useStyle = footerStyle();

    return (
        <Box component='div' className={useStyle.root}>
                <Box component='section' className={useStyle.extras}>
                    <Box component='div' className={useStyle.notes}>
                        <Typography variant='body1' className={useStyle.alias}>SIMEON AKANBI</Typography>
                        <Typography className={useStyle.desc}>I'm a frontend and backend developer and enthusiast passionate about providing solutions to general issues using code.</Typography>
                    </Box>
                    <Box component='div' className={useStyle.nav}>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#home'>Home</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#home'>About</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#home'>Stacks</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#home'>Projects</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#contact'>Contact me</a></Typography>
                        <Button variant='contained' style={{
                            height: '32px',
                            width: '88px',
                            marginLeft: '9px',
                            fontSize: '14',
                            textTransform:'capitalize',
                        }} endIcon={<FileDownloadOutlined />}>Resume</Button>
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
