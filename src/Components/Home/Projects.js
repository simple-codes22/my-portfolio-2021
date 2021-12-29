import { makeStyles } from "@mui/styles"
import { Box, Button, Typography } from '@mui/material';
import { GitHub } from "@mui/icons-material";
import PreviewIcon from '@mui/icons-material/Preview';
import { useState } from "react";
import myScreenshot from "../../Static/Images/projects/Screenshot (77).png";

const projectStyle = makeStyles(theme => ({
    root: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    first: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    subtitle: {
        textAlign: 'center',
        letterSpacing: '.3px',
        fontSize: '1.7rem',
    },
    normalProjects: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    smallCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '295px',
        height: '330px',
        // border: '1px solid white',
        background: '#080f368e',
        margin: '15px',
        borderRadius: '3px',
        boxShadow: '0px 0px 10px #0a0b207b',
        // overflow: 'hidden',
        '& img': {
            width: '285px',
            height: '150px',
            // border: '1px solid green',
            // margin: '2px',
        }
    },
    anchors: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    anchorBtns: {
        width:'96px !important',
        height: '30px !important',
        margin: '6px',
        fontSize: '13px',
        fontFamily: 'Noto Sans, sans-serif !important'
    },
    desc: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '3px',
    },
    PName: { // Project's Name
        fontSize: '20px',
        fontFamily:'Ubuntu Mono, monospace !important',
        margin: '1px',
        letterSpacing: '1px'
    },
    langUsed: {
        color: '#dfddddea',
        fontFamily: 'Source Code Pro, monospace !important',
        fontSize: '.8rem',
        textAlign: 'center',
    },
    ProjectSection: {
        display: 'flex',
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
                    code: 'https://www.github..com/',
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
                    desc_: 'A music player made in the early days of my journey',
                    frontend: 'Pure JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                }],
        bottom: [{
                    title_: 'E-Commerce Site',
                    imageSrc: myScreenshot,
                    desc_: '',
                    frontend: 'ReactJS',
                    backend: 'Django/Flask',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Groove (landing Page)',
                    imageSrc: myScreenshot,
                    desc_: 'My first ever landing page',
                    frontend: 'HTML, CSS and JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'FutureView (Landing page)',
                    imageSrc: myScreenshot,
                    desc_: '',
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
