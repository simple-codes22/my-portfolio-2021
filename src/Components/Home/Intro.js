import { makeStyles, } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import Social from './misc/Social';



const introStyle = makeStyles(theme => ({
    root: {
        color: '#fff !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column !important',
        // position: 'relative',
        background: '#22242b !important',
        [theme.breakpoints.down(400)]: {
            height: '80vh'
        }
    },
    main: {
        left: '30px !important',
        flexDirection: 'column !important',
        height: '100vh !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        background: '#22242b !important',
        [theme.breakpoints.down(400)]: {
            justifyContent: 'flex-start !important',
            height: '80vh',
        }
    },
    Title: {
        fontSize: '47px !important',
        textAlign:"center !important",
        width: '950px !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '38px !important',
            width: '820px !important'
        },
        [theme.breakpoints.down('mini')]: {
        fontSize: '33px !important',
        width: '700px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            fontSize: '24px !important',
            width: '600px !important',
        },
        [theme.breakpoints.down('smart')]: {
            fontSize: '20px !important',
            width: '520px !important',
        },
        [theme.breakpoints.down(530)]: {
            width: '430px !important',
            fontSize: '16px !important',
        },
        [theme.breakpoints.down(425)]: {
            width: '340px !important',
            fontSize: '33px !important',
            marginTop: '15vh',
        },
        [theme.breakpoints.down(380)]: {
            width: '280px !important',
        }
    },
    statement: {
        margin: '20px !important',
        fontSize: '1.14rem !important',
        width: '800px !important',
        textAlign: 'center !important',
        color: '#ffffffa2 !important',
        [theme.breakpoints.down('laptop')]: {
            width: '700px !important',
            fontSize: '16.32px !important',
        },
        [theme.breakpoints.down('mini')]: {
            width: '600px !important',
            fontSize: '12.8px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            fontSize: '11.2px !important',
            width: '430px !important',
        },
        [theme.breakpoints.down('smart')]: {
            fontSize: '8px !important',
            width: '360px !important',
        },
        [theme.breakpoints.down(530)]: {
            width: '250px !important',
            fontSize: '6.4px !important'
        },
        [theme.breakpoints.down(425)]: {
            width: '230px !important',
            fontSize: '12px !important',
            color: '#ffffffb5'
        }
    },
    projectBtn: {
        background: '#635bfc !important',
        letterSpacing: '1.8px !important',
        margin: '40px !important',
        width: '160px !important',
        height: '55px !important',
        '&:hover': {
            background: 'white !important',
            color: '#635bfc !important'
        },
        [theme.breakpoints.down('laptop')]: {
            width: '140px !important',
            height: '45px !important',
            fontSize: '14.08px',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '100px !important',
            height: '45px !important',
            fontSize: '8px !important',
        },
        [theme.breakpoints.down('smart')]: {
            margin: '30px !important',
            width: '80px !important',
            height: '25px !important',
            fontSize: '5px !important',
        },
        [theme.breakpoints.down(400)]: {
            width: '100px !important',
            height: '45px !important',
            fontSize: '10px !important',
        }
    }
}))

const Intro = () => {
    const useStyle = introStyle();
    return (
        <Box component='div' className={useStyle.root} id='intro'> {/* Simeon remember the id attr. you put here 👈👈👈 */}
            <Box component='div' className={useStyle.main}>
                <Typography 
                    variant='h3' 
                    data-aos="fade-in"
                    data-aos-delay='300'
                    data-aos-duration='1200'
                    className={useStyle.Title}
                >
                    A Web Developer, Critical Thinker and Passionate Problem Solver
                </Typography>
                <Typography
                    variant='body1' 
                    data-aos='fade-up'
                    data-aos-duration='1500' 
                    className={useStyle.statement}
                >
                    I'm a frontend and backend developer and enthusiast passionate about providing solutions to general issues using code.
                    I make sure goals are achieved and users have a wonderful experience.
                </Typography>
                <Button 
                    color="secondary" 
                    href='/#projects'
                    style={{animation: 'socialIntro 3s ease'}}
                    className={useStyle.projectBtn}
                >
                    My Projects
                </Button>
            </Box>
            <Social />
        </Box>
    )
}

export default Intro
