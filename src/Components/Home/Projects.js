import { makeStyles } from "@mui/styles"
import { Box, Button, Typography } from '@mui/material';
import { GitHub } from "@mui/icons-material";
import PreviewIcon from '@mui/icons-material/Preview';
import ConstructionIcon from '@mui/icons-material/Construction';
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
        margin: '20px !important',
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
        width: '325px !important',
        height: '360px !important',
        // border: '1px solid white !important',
        background: '#0601148d !important',
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
        margin: '8px !important',
        fontSize: '13px !important',
        fontFamily: 'Noto Sans, sans-serif !important'
    },
    desc: {
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        textAlign: 'center !important',
        margin: '3px !important',
        width: '290px !important',
        fontSize: '14px !important',
    },
    PName: { // Project's Name
        fontSize: '19px !important',
        fontFamily:'Source Code Pro, monospace !important',
        margin: '4px !important',
        letterSpacing: '1px !important',
        textAlign: 'center !important',
        color: '#fffffff0'
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
    startUp: {
        margin: '10px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column !important',

    },
    Card: {
        display: 'flex !important',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column !important',
        // border: '1px solid white',
        borderRadius: '3px !important',
        margin: '10px !important',
        width: '325px !important',
        height: '300px !important',
        overflow: 'hidden !important',
        background: '#0601149d !important',
        // color: 'black',
        transition: 'all .3s !important',
        boxShadow: '0px 8px 6px -6px rgb(15 0 68 / 58%) !important',
        '& img': {
            justifySelf: 'flex-start !important',
            width: '325px !important',
            height: '210px !important',
            background: 'white !important',
            // border: '1px solid white',
        },
        '&:hover': {
            background: '#1c03639d !important',
            boxShadow: '0px 8px 6px -6px rgb(15 0 68 / 58%) !important',
        }
    },
    startupTitle: {
        textAlign: 'center !important',
        margin: '10px !important',
        fontSize: '22px !important',
        fontFamily:'Source Code Pro, monospace !important',
        letterSpacing: '.2px !important',
    },
    devStatement: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        fontSize: '14px !important',
        letterSpacing: '.15px !important',
        color: '#ffffff6e !important'
    }
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
    const [startups] = useState({
        topSection: [
            {
                title_: 'Project Verdure',
                imageSrc: myScreenshot,
                src: myScreenshot,
                state: 'development',
            },
            {
                title_: 'Instrunet',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
            {
                title_: 'IdeaHub',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
            {
                title_: 'Lone Pair',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
        ],
        bottomSection: [
            {
                title_: 'Cova',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
            {
                title_: 'Top Sales',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
            {
                title_: 'Democrats',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
            {
                title_: 'Haggle',
                imageSrc: myScreenshot,
                src: '',
                state: 'development',
            },
        ]
    }) 
    const useStyle = projectStyle();

    return (
        <Box component='div' id='projects' className={useStyle.root}>
            <Box component='div' className={useStyle.first}>
                <Typography 
                    className={useStyle.subtitle} 
                    data-aos='fade-in'
                    data-aos-delay='200'
                    data-aos-duration='1300'
                    data-aos-once='false'
                    variant='h4'
                >
                    Web Projects
                </Typography>
                <Box component='section' className={useStyle.normalProjects}>
                    <Box
                        component='div' 
                        data-aos='fade-up'
                        data-aos-delay='600'
                        data-aos-duration='1500'
                        data-aos-once='false'
                        className={useStyle.ProjectSection}
                    >
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
                    <Box
                        component='div' 
                        data-aos='fade-up'
                        data-aos-delay='600'
                        data-aos-duration='1500'
                        data-aos-once='false'
                        className={useStyle.ProjectSection}
                    >
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
                <Typography 
                    className={useStyle.subtitle} 
                    data-aos='fade-in'
                    data-aos-delay='200'
                    data-aos-duration='1300'
                    data-aos-once='false'
                    variant='h4'
                >
                    Start-Up projects
                </Typography>
                <Box component='section' className={useStyle.startUp}>
                    <Box
                        component='div' 
                        data-aos='fade-up'
                        data-aos-delay='300'
                        data-aos-duration='1500'
                        data-aos-once='false'
                        className={useStyle.ProjectSection}
                    >
                        {startups.topSection.map(elem => {
                            if (elem.state === 'development') {
                                return (
                                    <Box component='div' className={useStyle.Card}>
                                        <Box component='div' className={`${useStyle.image} ${useStyle.Development}`}>
                                            <img src={elem.imageSrc} alt={elem.title_} />
                                        </Box>
                                        <Box component='div' className={useStyle.startupTitle}>{elem.title_}</Box>
                                        <Box component='div' className={useStyle.devStatement}><ConstructionIcon /> <span>In Development</span></Box>
                                    </Box>
                                )
                            } else {
                                return (
                                    <Box component='div' className={useStyle.Card}>
                                        <Box component='div' className={useStyle.image}>
                                            <img src={elem.imageSrc} alt={elem.title_} />
                                        </Box>
                                        <Box component='div' className={useStyle.startupTitle}>{elem.title_}</Box>
                                    </Box>
                                )
                            }
                        })}
                    </Box>
                    <Box
                        component='div' 
                        data-aos='fade-in'
                        data-aos-delay='600'
                        data-aos-duration='1500'
                        data-aos-once='false'
                        className={useStyle.ProjectSection}
                    >
                        {startups.bottomSection.map(elem => {
                            if (elem.state === 'development') {
                                return (
                                    <Box component='div' className={useStyle.Card}>
                                        <Box component='div' className={`${useStyle.image} ${useStyle.Development}`}>
                                            <img src={elem.imageSrc} alt={elem.title_} />
                                        </Box>
                                        <Box component='div' className={useStyle.startupTitle}>{elem.title_}</Box>
                                        <Box component='div' className={useStyle.devStatement}><ConstructionIcon /> <span>In Development</span></Box>
                                    </Box>
                                )
                            } else {
                                return (
                                    <Box component='div' className={useStyle.Card}>
                                        <Box component='div' className={useStyle.image}>
                                            <img src={elem.imageSrc} alt={elem.title_} />
                                        </Box>
                                        <Box component='div' className={useStyle.startupTitle}>{elem.title_}</Box>
                                    </Box>
                                )
                            }
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects
