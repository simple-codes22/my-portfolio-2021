import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import One from '../../Static/Images/One.png';


const aboutStyle = makeStyles(theme => ({
    root: {
        position: 'static !important',
       // background: '#000000e1 !important',
        color: 'white !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        // flex: '1',
    },
    aboutImage: {
        width:'700px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        [theme.breakpoints.down('laptop')]: {
            width: '600px !important',
            height: '700px !important'
        },
        [theme.breakpoints.down('mini')]: {
            width: '550px !important',
            height: '650px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '500px !important',
            height: '600px !important',
        },
        [theme.breakpoints.down(650)]: {
            width: '450px !important',
            height: '550px !important',
        },
        [theme.breakpoints.down(400)]: {
            display: 'none !important',
        }
    },
    aboutSection: {
        width: '700px !important',
        margin: '10px !important',
        [theme.breakpoints.down('mini')]: {
            width: '640px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '800px !important',
        },[theme.breakpoints.down(400)]: {
            width: '100vh !important',
        }
    },
    Title: {
        margin: "30px 0px !important",
        fontSize: '3rem !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '2.4rem !important',
        },
        [theme.breakpoints.down('tablet')]: {
            fontsize: '2.25rem !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '2rem !important',
        },
        [theme.breakpoints.down(400)]: {
            fontSize: '2rem !important',
            textAlign: 'center !important',
        },
    },
    inBold: {
        fontSize: '23px !important',
        fontWeight: 'bold !important',
        margin: '10px 0px !important',
        textAlign: 'justify-all !important',
        letterSpacing: '1px !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '18px !important',
            letterSpacing: '.6px !important',
        },
        [theme.breakpoints.down('mini')]: {
            fontSize: '12px !important',
            letterSpacing: '.4px !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '9px !important',
            letterSpacing: '.25px !important',
        },[theme.breakpoints.down(400)]: {
            textAlign: 'center !important',
            fontSize: '15px !important',
            letterSpacing: '.3px !important',
        }
    },
    normal: {
        textAlign: 'justify !important',
        fontSize: '1.11rem !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '.8rem !important',
        },
        [theme.breakpoints.down('mini')]: {
            fontSize: '.58rem !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '.48rem !important',
        },[theme.breakpoints.down(400)]: {
            textAlign: 'center !important',
            margin: '5px !important',
            fontSize:'.65rem !important',
        }
    },
    mainImage: {
        width: '350px !important',
        height: '450px !important',
        borderRadius: '10px !important',
        [theme.breakpoints.down('laptop')]: {
            width: '315px !important',
            height: '415px !important',
        },
        [theme.breakpoints.down('mini')]: {
            width: '280px !important',
            height: '380px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '230px !important',
            height: '300px !important',
        },
        [theme.breakpoints.down(650)]: {
            width: '200px !important',
            height: '260px !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '170px !important',
            height: '220px !important',
        },[theme.breakpoints.down(400)]: {
            display: 'none',
        }
    }
}))

const About = () => {
    const useStyle = aboutStyle();
    return (
        <Box component='div' className={useStyle.root}>
            <Box 
                component='div' 
                data-aos='fade-right'
                data-aos-delay='300'
                data-aos-duration='1300'
                className={useStyle.aboutImage}
            >
            <img src={One} alt='Simeon' className={useStyle.mainImage} />
            </Box>
            <Box component='div' className={useStyle.aboutSection}>
                <Typography
                    data-aos='fade-in' 
                    data-aos-delay='500'
                    data-aos-duration='1400'
                    variant='h4' 
                    className={useStyle.Title}
                >
                    About me
                </Typography>
                <Typography
                    data-aos='fade-up'
                    data-aos-delay='700'
                    data-aos-duration='1400'
                    variant='body1' 
                    className={useStyle.Content}
                >
                    <Typography variant='body1' className={useStyle.inBold}>
                        Hello I'm Simeon, a passionate developer based in Kaduna, Nigeria. I'm a young student interested in problem solving and communicating ideas through code.
                    </Typography>
                    <Typography variant='body1' className={useStyle.normal}>
                        My first year (currently) as a web developer has widened my scope of critical thinking and creativity in order to achieve desired goals, and through this acquired skill, 
                        I wish to cooperate with wonderful clients to assist them at solving issues.
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default About
