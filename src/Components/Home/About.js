import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";


const aboutStyle = makeStyles(theme => ({
    root: {
        position: 'static',
        background: '#000000e1',
        color: 'white'
    }
}))

const About = () => {
    const useStyle = aboutStyle();
    return (
        <Box component='div' className={useStyle.root}>
            About
        </Box>
    )
}

export default About
