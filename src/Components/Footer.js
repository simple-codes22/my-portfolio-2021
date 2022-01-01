import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook, FileDownloadOutlined } from '@mui/icons-material';
import { resumeUrl } from '../Backend/supabaseClient';

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
        [theme.breakpoints.down('mini')]: {
            right: '80px !important',
        },
        [theme.breakpoints.down('smart')]: {
            right: '40px !important',
        } // Do here
    },
    tradeMark: {
        fontSize: '13px !important',
        position:'absolute !important',
        left: '80px !important',
        bottom: '20px !important',
        [theme.breakpoints.down(1260)]: {
            fontSize: '12.4px !important',
        },
        [theme.breakpoints.down('laptop')]: {
            fontSize: '11.5px !important',
        },
        [theme.breakpoints.down('mini')]: {
            fontSize: '10px !important',
        } // Do here
        ,[theme.breakpoints.down('smart')]: {
            
        } // Do here
    },
    iconLinks: {
        textDecoration: 'none !important',
        color:'white !important',
        margin: '7px !important',
        transition: '.3s ease all !important',
        '& > svg': {
            transition: '.3s ease-in-out all !important',
            [theme.breakpoints.down(1260)]: {
                height: '20px !important',
                width: '20px !important',
            },
            [theme.breakpoints.down('laptop')]: {
                height: '18px !important',
                width: '18px !important',
            },
            [theme.breakpoints.down('mini')]: {
                height: '16px !important'
            }, // Do here
            [theme.breakpoints.down('smart')]: {
                
            } // Do here
        },
        '&:hover > svg': {
            fill: '#9a94ff !important'
        },
        [theme.breakpoints.down(1260)]: {
            margin: '6.5px !important',
        },
        [theme.breakpoints.down('laptop')]: {
            margin: '6px !important',
        },
        [theme.breakpoints.down('smart')]: {} // Do here
    },
    alias: {
        letterSpacing: '1.4px !important',
        fontSize: '1.2rem !important',
        [theme.breakpoints.down(1260)]: {
            fontSize: '1.13rem !important',
        },
        [theme.breakpoints.down('laptop')]: {
            fontSize: '1rem !important'
        },
        [theme.breakpoints.down('mini')]: {
            fontSize: '.85rem !important'
        }, // Do here
        [theme.breakpoints.down('smart')]: {} // Do here
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
    },
    navCover: {
        margin: '10px !important',
        [theme.breakpoints.down(1260)]: {
            margin: '9px !important',
        },
        [theme.breakpoints.down('laptop')]: {
            margin: '8.6px !important',
        },[theme.breakpoints.down('smart')]: {} // Do here
    },
    navLinks: {
        color: 'white !important',
        fontSize: '15.2px !important',
        textDecoration: 'none !important',
        [theme.breakpoints.down(1260)]: {
            fontSize: '13px !important',
        },
        [theme.breakpoints.down('laptop')]: {
            fontSize: '12.5px !important',
        },
        [theme.breakpoints.down('mini')]: {
            fontSize: '12px !important',
        }, // Do here
        [theme.breakpoints.down('smart')]: {
            fontSize: '10px !important',
        } // Do here
    },
    notes: {
        position: 'absolute !important',
        left: '80px !important',
        [theme.breakpoints.down('mini')]: {
            left: '70px !important',
        }, // Do here
        [theme.breakpoints.down('smart')]: {} // Do here
    },
    desc: {
        marginTop: '30px !important',
        width: '400px !important',
        fontSize: '13px !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '12px !important',
        },
        [theme.breakpoints.down('mini')]: {
            fontSize: '11px !important',
        }, // Do here
        [theme.breakpoints.down('smart')]: {
            fontSize: '8px !important',
            width: '340px !important',
        } // Do here
    },
    resBtn: {
        height: '32px !important',
        width: '90px !important',
        marginLeft: '9px !important',
        fontSize: '14px !important',
        textTransform:'capitalize !important',
        [theme.breakpoints.down(1260)]: {
            width: '85px !important',
            height: '29px !important',
            fontSize: '13px !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '75px !important',
            height: '23px !important',
            fontsize: ''
        } // Do here
        
    }
}))

const Footer = () => {
    const useStyle = footerStyle();

    return (
        <Box component='div' className={useStyle.root}>
                <Box component='section' className={useStyle.extras}>
                    <Box component='div' className={useStyle.notes}>
                        <Typography 
                            color="#eedfce" 
                            variant='body1' 
                            data-aos='fade-in' 
                            data-aos-delay='200' 
                            data-aos-duration='1350' 
                            data-aos-once='true' 
                            className={useStyle.alias}
                        >
                            SIMEON AKANBI
                        </Typography>
                        <Typography className={useStyle.desc}>I'm a frontend and backend developer and enthusiast passionate about providing solutions to general issues using code.</Typography>
                    </Box>
                    <Box component='div' className={useStyle.nav}>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#home'>Home</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#about'>About</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#stacks'>Stacks</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#projects'>Projects</a></Typography>
                        <Typography variant='body2' className={useStyle.navCover}><a className={useStyle.navLinks} href='#contact'>Contact me</a></Typography>
                        <Button 
                            href={resumeUrl}
                            target='_blank'
                            rel='noreferrer'
                            variant='contained' 
                            className={useStyle.resBtn} endIcon={<FileDownloadOutlined />}>Resume</Button>
                    </Box>
                </Box>
            <Box component='div' className={useStyle.credits}>
                <Box component='div' className={useStyle.tradeMark}>&copy; 2022 Simeon Akanbi. All rights reserved.</Box>
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
