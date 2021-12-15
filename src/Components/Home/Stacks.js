import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';
import { Cards } from "./misc/Cards";

const stackStyle = makeStyles(theme => ({
    root: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        textAlign: 'center',
        margin: "30px",
        fontSize: '3rem',
    },
    Info: {
        // margin: '20px',
        fontSize: "1.37rem",
        width: '800px',
        textAlign: 'center',
    }
}))

const Stacks = () => {
    const useStyle = stackStyle();
    return (
        <Box component='div' className={useStyle.root}>
            <Box component='div'>
                <Typography variant='h4' className={useStyle.Title}>Tech Stacks</Typography>
                <Typography variant='body1' className={useStyle.Info}>In my journey as a web developer, I've developed creative and responsive websites various web technologies for both frontend and backend.</Typography>

            </Box>
            <Cards />
        </Box>
    )
}

export default Stacks
