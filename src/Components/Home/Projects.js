import { makeStyles } from "@mui/styles"
import { Box, Button, IconButton, Typography } from '@mui/material';
import { GitHub } from "@mui/icons-material";
import PreviewIcon from '@mui/icons-material/Preview';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useState } from "react";
import ComingSoon from "../../Static/Images/projects/ComingSoon.jpg";
import Netflix from "../../Static/Images/projects/Netflix.png";
import iBlog from "../../Static/Images/projects/iBlog.png";
import ECommerce from "../../Static/Images/projects/E-Commerce.png";
import FutureView from "../../Static/Images/projects/FutureView.png"
import Groove from "../../Static/Images/projects/Groove.png"
import MusicPlayer from "../../Static/Images/projects/MPlayer.png";

const projectStyle = makeStyles(theme => ({
    root: {
        color: 'white !important',
        display: 'flex !important',
        flexDirection: 'column !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        position: 'relative !important',
        overflow: 'hidden !important',
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
        flexDirection: 'column !important',
    },
    smallCard: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column !important',
        width: '335px !important',
        height: '360px !important',
        background: '#0601148d !important',
        margin: '15px !important',
        borderRadius: '3px !important',
        boxShadow: '0px 8px 6px -6px rgb(15 0 68 / 58%) !important',
        transition: 'all .3s !important',
        overflow: 'hidden !important',
        '& img': {
            width: '100% !important',
            height: '202px !important',
            [theme.breakpoints.down('tablet')]: {
                height: '97px !important',
            },
            [theme.breakpoints.down(400)]: {
                height:'55px !important',
            }
        },
        '&:hover': {
            background: '#1c03639d !important',
            boxShadow: '0px 8px 6px -6px rgb(15 0 68 / 58%) !important',
        },
        [theme.breakpoints.down('laptop')]: { // For the tablet
            width: '280px !important',
            height:'315px !Important',
        },
        [theme.breakpoints.down(910)]: { // For the mobile phone
            width: '230px !important',
            height: '265px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '170px !important',
            height: '205px !important',
        },
        [theme.breakpoints.down(400)]: {
            width: '95px !important',
            height: '115px !important',
            margin: '10px !important',
        }
    },
    anchors: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        [theme.breakpoints.down(400)]: {
            display: 'none !important'
        }
    },
    iconAnchors: {
        display: 'none !important',
        [theme.breakpoints.down(400)]: {
            display: 'flex !important',
            justifyContent: 'center !important',
            alignItems: 'center !important',
        }
    },
    anchorBtns: {
        width:'96px !important',
        height: '30px !important',
        margin: '8px !important',
        fontSize: '13px !important',
        fontFamily: 'Noto Sans, sans-serif !important',
        [theme.breakpoints.down('laptop')]: { // For the tablet
            width: '86px !important',
            height: '28px !important',
            fontSize: '10px !important',
        },
        [theme.breakpoints.down(910)]: {
            width: '76px !important',
            height: '26px !important',
            fontSize: '7px !important',
        },
        [theme.breakpoints.down('tablet')]: { // For the mobile phone
            width: '60px !important',
            height: '16px !important',
            fontSize: '4px !important',
            borderRadius: '1.5px !important',
            '& svg': {
                height: '12px !important',
                width: '12px !important',
            }
        }, [theme.breakpoints.down(400)]: {
            width: '20px !important',
            height: '20px !important',
            margin: '3px !important',
        }
    },
    desc: {
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        textAlign: 'center !important',
        margin: '3px !important',
        width: '290px !important',
        fontSize: '14px !important',
        [theme.breakpoints.down('laptop')]: { // For the tablet
            fontSize: '12px !important',
            width: '250px !important',
        },
        [theme.breakpoints.down(910)]: { // For the mobile phone
            fontSize: '10px !important',
            width: '210px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            fontSize: '8px !important',
            width: '170px !important',
        }, [theme.breakpoints.down(400)]: {
            display: 'none !important',
        }
    },
    PName: { // Project's Name
        fontSize: '19px !important',
        fontFamily:'Source Code Pro, monospace !important',
        margin: '4px !important',
        letterSpacing: '1px !important',
        textAlign: 'center !important',
        color: '#fffffff0',
        [theme.breakpoints.down('laptop')]: { // For the tablet
            fontSize: '16px !important',
            letterSpacing: '.8px !important',
        },
        [theme.breakpoints.down(910)]: {
            fontSize: '13px !important',
            letterSpacing: '.6px !important',
        },
        [theme.breakpoints.down('tablet')]: { // For the mobile phone
            fontSize: '10px !important',
            letterSpacing: '.4px !important',
        }, [theme.breakpoints.down(400)]: {
            fontSize: '7.5px !important',
        }
    },
    langUsed: {
        color: '#dfddddea !important',
        fontFamily: 'Source Code Pro, monospace !important',
        fontSize: '.8rem !important',
        textAlign: 'center !important',
        [theme.breakpoints.down('laptop')]: { // For the tablet
            fontSize: '.66rem !important',
        },
        [theme.breakpoints.down(910)]: {
            fontSize: '.5rem !important',
        },
        [theme.breakpoints.down('tablet')]: { // For the mobile phone
            fontSize: '.44rem !important',
        }, [theme.breakpoints.down(400)]: {
            fontSize: '.36rem !important', // Come back for this 👈👈
        }
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
            opacity: '.5',
            [theme.breakpoints.down(1500)]: {
                width: '300px !important',
                height: '185px !important',
            },
            [theme.breakpoints.down(1245)]: {
                width: '270px !important',
                height: '155px !important',
            },
            [theme.breakpoints.down(1135)]: {
                width: '240px !important',
                height: '125px !important'
            },
            [theme.breakpoints.down(900)]: {
                width: '180px !important',
                height: '95px !important',
            },
            [theme.breakpoints.down('tablet')]: {
                width: '150px !important',
                height: '85px !important',
            },
            [theme.breakpoints.down(650)]: {
                width: '130px !important',
                height: '80px !important',
            },
            [theme.breakpoints.down(400)]: {
                width: '100% !important',
                height: '55px !important',
            }
        },
        '&:hover': {
            background: '#1c03639d !important',
            boxShadow: '0px 8px 6px -6px rgb(15 0 68 / 58%) !important',
        },
        [theme.breakpoints.down(1500)]: { // For the tablet
            width: '300px !important',
            height: '275px !important',
            margin: '7px !important',
        },
        [theme.breakpoints.down(1245)]: { // For the mobile phone
            width: '270px !important',
            height: '245px !important',
        },
        [theme.breakpoints.down(1135)]: {
            width: '240px !important',
            height: '215px !important',
        },
        [theme.breakpoints.down('laptop')]: {
            width: '210px !important',
            height: '195px !important',
        }, 
        [theme.breakpoints.down(900)]: {
            width: '180px !important',
            height: '165px !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '150px !important',
            height: '155px !important',
        },
        [theme.breakpoints.down(650)]: {
            width: '130px !important',
            height: '140px !important',
        }, 
        [theme.breakpoints.down(400)]: {
            width: '84px !important',
            height: '100px !important',
            margin: '3px !important',
        }
    },
    startupTitle: {
        textAlign: 'center !important',
        margin: '10px !important',
        fontSize: '22px !important',
        fontFamily:'Source Code Pro, monospace !important',
        letterSpacing: '.2px !important',
        [theme.breakpoints.down(1300)]: { // For the desktop
            fontSize: '19px !important',
        },
        [theme.breakpoints.down(1135)]: {
            fontSize: '17.5px !important'
        },
        [theme.breakpoints.down('laptop')]: { // For the tablet
            fontSize: '14px !important',
            margin: '8px !important',
        },
        [theme.breakpoints.down('tablet')]: { // For the mobile phone
            fontSize: '12px !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '8px !important',
        },[theme.breakpoints.down(400)]: {
            margin: '4px !important',
        }
    },
    devStatement: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        fontSize: '14px !important',
        letterSpacing: '.15px !important',
        color: '#ffffff6e !important',
        [theme.breakpoints.down(1300)]: { // For the desktop
            fontSize: '10px !important',
        },
        [theme.breakpoints.down('laptop')]: { // For the tablet
            fontSize: '7.5px !important',
        },
        [theme.breakpoints.down('tablet')]: { // For the mobile phone
            fontSize: '6px !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '4.5px !important',
        },
        [theme.breakpoints.down(400)]: {
            '& svg': {
                height: '15px !important',
                width: '15px !important',
            }
        }
    }
}))

const Projects = () => {
    const [projects] = useState({
        top: [{
                    title_: "iBlog",
                    imageSrc: iBlog,
                    desc_: 'A generic blogging app capable of basic CRUD operations.',
                    frontend: 'ReactJS',
                    backend: 'Supabase',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Netflix Clone',
                    imageSrc: Netflix,
                    desc_: "A project inspired by the world's largest movie streaming site.",
                    frontend: 'ReactJS',
                    backend: 'Django',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Music player',
                    imageSrc: MusicPlayer,
                    desc_: 'A music player made in the early days of my journey.',
                    frontend: 'Pure JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                }],
        bottom: [{
                    title_: 'E-Commerce Site',
                    imageSrc: ECommerce,
                    desc_: 'A simple E-Commerce site built with ReactJS and Django.',
                    frontend: 'ReactJS',
                    backend: 'Django/Flask',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'Groove (landing Page)',
                    imageSrc: Groove,
                    desc_: 'My first ever landing page completed as a developer.',
                    frontend: 'HTML, CSS and JavaScript',
                    backend: 'None',
                    code: 'https://www.github.com/',
                },
                {
                    title_: 'FutureView (Landing page)',
                    imageSrc: FutureView,
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
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
            {
                title_: 'Instrunet',
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
            {
                title_: 'IdeaHub',
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
            {
                title_: 'Lone Pair',
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
        ],
        bottomSection: [
            {
                title_: 'Cova',
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
            {
                title_: 'Top Sales',
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
            {
                title_: 'Democrats',
                imageSrc: ComingSoon,
                src: '',
                state: 'development',
            },
            {
                title_: 'Haggle',
                imageSrc: ComingSoon,
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
                                <Box component='div' className={useStyle.iconAnchors}>
                                    <IconButton className={useStyle.anchorBtns}  color="primary"><PreviewIcon /></IconButton>
                                    <IconButton className={useStyle.anchorBtns} color="secondary"><GitHub /></IconButton>
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
                                <Box component='div' className={useStyle.iconAnchors}>
                                    <IconButton className={useStyle.anchorBtns} color='primary'><PreviewIcon /></IconButton>
                                    <IconButton className={useStyle.anchorBtns} color='secondary'><GitHub /></IconButton>
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
                                    <Box key={elem.title_} component='div' className={useStyle.Card}>
                                        <Box component='div' className={`${useStyle.image} ${useStyle.Development}`}>
                                            <img src={elem.imageSrc} alt={elem.title_} />
                                        </Box>
                                        <Box component='div' className={useStyle.startupTitle}>{elem.title_}</Box>
                                        <Box component='div' className={useStyle.devStatement}><ConstructionIcon /> <span>In Development</span></Box>
                                    </Box>
                                )
                            } else {
                                return (
                                    <Box key={elem.title_} component='div' className={useStyle.Card}>
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
                                    <Box component='div' key={elem.title_} className={useStyle.Card}>
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
