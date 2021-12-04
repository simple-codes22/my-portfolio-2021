import { makeStyles, } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';

const introStyle = makeStyles(theme => ({
    root: {
        color: '#fff',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    main: {
        // position: 'absolute',
        left: '30px',
        background:'black',
        alignItems: 'flex-start',
        // alignItems: 'center',
        flexDirection: 'column',
    },
    greeting: {
        fontSize: '19px',
    },
    Title: {
        fontSize: '50px',
    }
}))

const Intro = () => {
    const useStyle = introStyle();
    return (
        <Box component='div' className={useStyle.root}>
            <Box component='div' className={useStyle.main}>
                <Typography variant='caption' className={useStyle.greeting}>
                    Hi 👋, I'm
                </Typography>
                <Typography variant='h3' className={useStyle.Title}>
                    Simeon Akanbi
                </Typography>
                <Typography variant='caption' className={useStyle.subTitle}>
                    Full Stack Developer
                </Typography>
                <Typography variant='body1' className={useStyle.statement}>
                    I'm a passionate web developer with both frontend and backend skills based in Nigeria {/* Could be changed later */}
                </Typography>
                <Button>PROJECTS</Button>
            </Box>
        </Box>
    )
}

export default Intro
