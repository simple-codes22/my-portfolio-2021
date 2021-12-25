import { makeStyles, } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import Social from './misc/Social';



const introStyle = makeStyles(theme => ({
    root: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // position: 'relative',
        background: '#22242b',
    },
    main: {
        left: '30px !important',
        flexDirection: 'column !important',
        height: '100vh !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        background: '#22242b !important'
    },
    greeting: {
        fontSize: '19px !important',
    },
    Title: {
        fontSize: '47px !important',
        textAlign:"center !important",
        width: '1050px !important',
    },
    statement: {
        margin: '20px !important',
        fontSize: '1.14rem !important',
        width: '800px !important',
        textAlign: 'center !important',
        color: '#ffffffa2 !important'
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
