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
        position: 'relative',
        background: '#22242b',
    },
    main: {
        left: '30px',
        flexDirection: 'column',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#22242b'
    },
    greeting: {
        fontSize: '19px',
    },
    Title: {
        fontSize: '47px',
        textAlign:"center",
        width: '1050px',
    },
    statement: {
        margin: '20px',
        fontSize: '1.14rem',
        width: '800px',
        textAlign: 'center',
        color: '#ffffffa2'
    },
    projectBtn: {
        background: '#635bfc',
        letterSpacing: '1.8px',
        margin: '40px',
        width: '160px',
        height: '55px',
        '&:hover': {
            background: 'white',
            color: '#635bfc'
        }
    }
}))

const Intro = () => {
    const useStyle = introStyle();
    return (
        <Box component='div' className={useStyle.root} id='intro'> {/* Simeon remember the id attr. you put here 👈👈👈 */}
            <Box component='div' className={useStyle.main}>
                <Typography variant='h3' className={useStyle.Title}>
                    A Web Developer, Critical Thinker and Passionate Problem Solver
                </Typography>
                <Typography variant='body1' className={useStyle.statement}>
                    I'm a frontend and backend developer and enthusiast passionate about providing solutions to general issues using code.
                    I make sure goals are achieved and users have a wonderful experience.
                </Typography>
                <Button color="secondary" href='/#projects' className={useStyle.projectBtn}>My Projects</Button>
            </Box>
            <Social />
        </Box>
    )
}

export default Intro
