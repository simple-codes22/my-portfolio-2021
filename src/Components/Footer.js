import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook, FileDownloadOutlined } from '@mui/icons-material';

const footerStyle = makeStyles(theme => ({
    root: {
        background: '#22242b !important',
        color: 'white !important',
        height: '60vh !important',
        width: '100% !important',
        display: 'flex !important',
        justifyContent:"center  !important",
        alignItems: 'center !important',
        position: 'relative !important',
    },
    socialIcons: {
        position:'absolute !important',
        right: '100px !important',
        bottom: '20px !important',
    },
    tradeMark: {
        fontSize: '13px !important',
        position:'absolute !important',
        left: '80px !important',
        bottom: '20px !important',
    },
    iconLinks: {
        textDecoration: 'none !important',
        color:'white !important',
        margin: '7px !important',
        transition: '.3s ease all !important',
        '& > svg': {
            transition: '.3s ease-in-out all !important',
        },
        '&:hover > svg': {
            fill: '#9a94ff !important'
        }
    },
    alias: {
        letterSpacing: '1.4px !important',
        fontSize: '1.2rem !important',
    },
    extras: {
        display: 'flex !important',
        flexDirection: 'row !important',

    },
    nav: {
        display: 'flex !important',
        justifyContent: 'flex-start !important',
        alignItems: 'flex-start !important',
        flexDirection: 'column !important',
        marginLeft: '450px !important',
        marginBottom: '10px !important',
        // position: 'absolute !important',
        // right: '100px !important',
    },
    navCover: {
        margin: '10px !important',
    },
    navLinks: {
        color: 'white !important',
        fontSize: '15.2px !important',
        textDecoration: 'none !important'
    },
    notes: {
        position: 'absolute !important',
        left: '80px !important',
    },
    desc: {
        marginTop: '30px !important',
        width: '400px !important',
        fontSize: '13px !important',

    }
}))

const Footer = () => {
    const useStyle = footerStyle();

    return (
        <Box component='div' className={useStyle.root}>
                <Box component='section' className={useStyle.extras}>
                    <Box component='div' className={useStyle.notes}>
                        <Typography color="#eedfce" variant='body1' className={useStyle.alias}>SIMEON AKANBI</Typography>
                        <Typography className={useStyle.desc}>I'm a frontend and backend developer and enthusiast passionate about providing solutions to general issues using code.</Typography>
                    </Box>
                    <Box component='div' className={useStyle.nav}>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#home'>Home</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#about'>About</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#stacks'>Stacks</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#projects'>Projects</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#contact'>Contact me</a></Typography>
                        <Button href='' variant='contained' style={{
                            height: '32px !important',
                            width: '88px !important',
                            marginLeft: '9px !important',
                            fontSize: '14 !important',
                            textTransform:'capitalize !important',
                        }} endIcon={<FileDownloadOutlined />}>Resume</Button>
                    </Box>
                </Box>
            <Box component='div' className={useStyle.credits}>
                <Box component='div' className={useStyle.tradeMark}>&copy; 2021 Simeon Akanbi. All rights reserved.</Box>
                <Box component='div' className={useStyle.socialIcons}>
                    <a className={useStyle.iconLinks} href='https://www.github.com/simple-codes22'><GitHub /></a>
                    <a className={useStyle.iconLinks} href='https://www.github.com/simple-codes22'><LinkedIn /></a>
                    <a className={useStyle.iconLinks} href='https://www.twitter.com/simple-codes'><Twitter /></a>
                    <a className={useStyle.iconLinks} href='https://www.facebook.com/'><Facebook /></a>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
