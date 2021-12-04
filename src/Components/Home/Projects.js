import { makeStyles } from "@mui/styles"
import { Box } from '@mui/material';

const projectStyle = makeStyles(theme => ({
    root: {
        color: 'white'
    }
}))

const Projects = () => {
    const useStyle = projectStyle();

    return (
        <Box component='div' id='projects' className={useStyle.root}>
            Projects
        </Box>
    )
}

export default Projects
