import { makeStyles } from "@mui/styles"
import { Box, Button, Typography } from '@mui/material';
import { GitHub } from "@mui/icons-material";
import PreviewIcon from '@mui/icons-material/Preview';
import { useState } from "react";
import myScreenshot from "../../Static/Images/projects/Screenshot (77).png";

const projectStyle = makeStyles(theme => ({
    root: {
        color: 'white !important',
        display: 'flex !important',
        flexDirection: 'column !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        position: 'relative !important',
        overflow: 'hidden !important'
    },
    first: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column !important',
    },
    subtitle: {
        textAlign: 'center !important',
        letterSpacing: '.3px !important',
        fontSize: '1.7rem !important',
    },
    normalProjects: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column !important'

    },
    smallCard: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column !important',
        width: '295px !important',
        height: '330px !important',
        // border: '1px solid white !important',
        background: '#080f368e !important',
        margin: '15px !important',
        borderRadius: '3px !important',
        boxShadow: '0px 0px 10px #0a0b207b !important',
        // overflow: 'hidden !important',
        '& img': {
            width: '285px !important',
            height: '150px !important',
            // border: '1px solid green !important',
            // margin: '2px !important',
        }
    },
    anchors: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
    },
    anchorBtns: {
        width:'96px !important',
        height: '30px !important',
        margin: '6px !important',
        fontSize: '13px !important',
        fontFamily: 'Noto Sans, sans-serif !important'
    },
    desc: {
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        textAlign: 'center !important',
        margin: '3px !important',
        fontSize: '14px !important',
    },
    PName: { // Project's Name
        fontSize: '20px !important',
        fontFamily:'Ubuntu Mono, monospace !important',
        margin: '1px !important',
        letterSpacing: '1px !important'
    },
    langUsed: {
        color: '#dfddddea !important',
        fontFamily: 'Source Code Pro, monospace !important',
        fontSize: '.8rem !important',
        textAlign: 'center !important',
    },
    ProjectSection: {
        display: 'flex !important',
    },
    startUp: {},
}))

const Projects = () => {
    const [projects] = useState({
        top: [{
                    title_: "iBlog",
                    imageSrc: myScreenshot,
                    desc_: 'A generic blogging app capable of basic CRUD operations.',
                    frontend: 'ReactJS',
                    backend: 'Supabase',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Netflix Clone',
                    imageSrc: myScreenshot,
                    desc_: "A project inspired by the world's largest movie streaming site.",
                    frontend: 'ReactJS',
                    backend: 'Django',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Music player',
                    imageSrc: myScreenshot,
                    desc_: 'A music player made in the early days of my journey.',
                    frontend: 'Pure JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                }],
        bottom: [{
                    title_: 'E-Commerce Site',
                    imageSrc: myScreenshot,
                    desc_: 'A simple E-Commerce site built with ReactJS and Django.',
                    frontend: 'ReactJS',
                    backend: 'Django/Flask',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Groove (landing Page)',
                    imageSrc: myScreenshot,
                    desc_: 'My first ever landing page completed as a developer.',
                    frontend: 'HTML, CSS and JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'FutureView (Landing page)',
                    imageSrc: myScreenshot,
                    desc_: 'A generic landing page making use of pure JavaScript.',
                    frontend: 'HTML, CSS and JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                }],
    })
    const useStyle = projectStyle();

    return (
        <Box component='div' id='projects' className={useStyle.root}>
            <Box component='div' className={useStyle.first}>
                <Typography className={useStyle.subtitle} variant='h4'>
                    Web Projects
                </Typography>
                <Box component='section' className={useStyle.normalProjects}>
                    <Box component='div'className={useStyle.ProjectSection}>
                    {projects.top.map(elem => { // An iteration of all the projects 
                        return (
                            <Box key={elem.title} component='div' className={useStyle.smallCard}>
                                <img src={elem.imageSrc} alt={elem.title_} />
                                <Typography className={useStyle.PName}>{elem.title_}</Typography> {/* Projects's Name */}
                                <Box component='div' className={useStyle.desc}>
                                    {elem.desc_}
                                </Box>
                                    <Box className={useStyle.langUsed}>
                                        Frontend: {elem.frontend}
                                        <br></br>
                                        Backend: {elem.backend}
                                    </Box>
                                <Box component='div' className={useStyle.anchors}>
                                    <Button className={useStyle.anchorBtns} variant='contained' color='primary' endIcon={<PreviewIcon />}>Preview</Button>
                                    <Button className={useStyle.anchorBtns} href={elem.code} target='_blank' variant='contained' color='secondary' endIcon={<GitHub />}>code</Button>
                                </Box>
                            </Box>
                        )
                    })
                    }
                    </Box>
                    <Box component='div' className={useStyle.ProjectSection}>
                    {projects.bottom.map(elem => { // An iteration of all the projects 
                        return (
                            <Box key={elem.title} component='div' className={useStyle.smallCard}>
                                <img src={elem.imageSrc} alt={elem.title_} />
                                <Typography className={useStyle.PName}>{elem.title_}</Typography> {/* Projects's Name */}
                                <Box component='div' className={useStyle.desc}>
                                    {elem.desc_}
                                </Box>
                                    <Box className={useStyle.langUsed}>
                                        Frontend: {elem.frontend}
                                        <br></br>
                                        Backend: {elem.backend}
                                    </Box>
                                <Box component='div' className={useStyle.anchors}>
                                    <Button className={useStyle.anchorBtns} variant='contained' color='primary' endIcon={<PreviewIcon />}>Preview</Button>
                                    <Button className={useStyle.anchorBtns} href={elem.code} target='_blank' variant='contained' color='secondary' endIcon={<GitHub />}>code</Button>
                                </Box>
                            </Box>
                        )
                    })
                    }
                    </Box>
                </Box>
            </Box>
            <Box component='div' className={useStyle.second}>
                <Typography className={useStyle.subtitle} variant='h4'>
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
