import { makeStyles } from "@mui/styles"
import { Box, Typography } from '@mui/material';

const projectStyle = makeStyles(theme => ({
    root: {
        color: 'white'
    },
    normalProjects: {},
    startUp: {},
}))

const Projects = () => {
    const useStyle = projectStyle();

    return (
        <Box component='div' id='projects' className={useStyle.root}>
            <Box component='div' className={useStyle.first}>
                <Typography variant='h4'>
                    Web Projects
                </Typography>
                <Box component='section' className={useStyle.normalProjects}>
                    <Box component='div' className={useStyle.smallCard}>
                        <img src="/" alt="iBlog" />
                        <Typography>iBlog</Typography>
                        <Box component='div' className={useStyle.desc}>
                            A generic blogging app capable of basic CRUD operations. 
                            Built with: Supabase, HTML, CSS, React
                        </Box>
                </Box>
                </Box>
            </Box>
            <Box component='div' className={useStyle.normalProjects}>
                <Typography variant='h4'>
                    Start-Up projects
                </Typography>
                <Box component='section' className={useStyle.startUp}>
                    <Box component='div' className={useStyle.Card}>Project Verdure</Box>
                    <Box component='div' className={useStyle.Card}>Instrunet&trade;</Box>
                    <Box component='div' className={useStyle.Card}>IdeaHub</Box>
                    <Box component='div' className={useStyle.Card}>Lone Pair</Box>
                    <Box component='div' className={useStyle.Card}>Cova&trade;</Box>
                    <Box component='div' className={useStyle.Card}>Top Sales</Box>
                    <Box component='div' className={useStyle.Card}>Democrats</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects
