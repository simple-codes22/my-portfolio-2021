import { Box, Toolbar, AppBar, Avatar, 
    // Drawer,
    //  IconButton
     } from "@mui/material";
import React from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import One from './../Static/Images/One.png'; // This is actually my photo, i really don't know why i named it "One" I hope to change it during production
import { makeStyles } from '@mui/styles';
// import {List, ListItem, ListItemText} from "@mui/material";
import { 
    BrowserRouter as Router,
    // Route,
    Link,
    // Routes,
} from "react-router-dom";
import Intro from './Home/Intro';
import About from './Home/About';
import Stacks from './Home/Stacks';
import Projects from './Home/Projects';
import Contact from './Home/Contact';
import { resumeUrl } from "../Backend/supabaseClient";
// import { useState } from "react";


const NavStyle = makeStyles(theme => ({
    root: {
        position: 'static',
        border: "none",
        outline: '0',
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
    },
    main: {
        cursor: 'default',
        letterSpacing: '1.4px',
        // color: '#f5efe7'
        color: '#eedfce',
        [theme.breakpoints.down('tablet')]: {
            fontSize: '12px !important',
            letterSpacing: '.8px !important',
        },
        [theme.breakpoints.down(400)]: {
            fontSize: '10px !important',
            letterSpacing: '.6px !important',
        }
    },
    avatar: {
        margin: '10px !important',
        [theme.breakpoints.down('tablet')]: {
            margin: '5px !important',
            width: '27px !important',
            height: '27px !important',
        },
        [themebreakpoints.down(400)]: {
            width: '24px !important',
            height: '24px !important',
        }
    }
    ,
    linkList: {
        position: 'absolute',
        right: '50px',
    },
    link: {
        display:'inline-block',
        color:'white',
        margin: '10px',
        textDecoration:'none',
        transition: 'all .3s ease',
        '& svg': {
            fill: '#fff'
        },
        '&:hover': {
            color: '#040405'
        },
        [theme.breakpoints.down('tablet')]: {
            display: 'none',
        }
    }, altLink: {
        display:'inline-block',
        color:'white',
        margin: '10px',
        textDecoration:'none',
        transition: 'all .3s ease',
        '& svg': {
            fill: '#fff'
        }
    },
    mainView: {
        position: "relative",
        // height: '100vh',
        '& > div': {
            // width: '100%',
            // height: '100vh',
            padding: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#22242b'
        }
    },
    menuBar: {
        display:'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        '& svg': {
            fill: '#ffffffe2',
        },
        [theme.breakpoints.up('tablet')]: {
            display: 'none !important'
        },
        [theme.breakpoints.up(468)]: {
            '& svg': {
                height: '30px',
                width: '30px',
            }
        },
    },
}))

const Navigation = () => {
    const useStyle = NavStyle();

    // const [drawerState, setState] = useState(false);
    // Remember you haven't decided on the routing pattern 👆👆👆👆
    // const changeState = () => setState(false);
    // const List = () => (
    //     <Box 
    //         role="presentation"
    //         onClick={setState(false)}
    //     >
    //     <List>
    //         <ListItem button key='Home'>
    //             <ListItemText primary='Home' />
    //         </ListItem>
    //         <ListItem button key='Projects'>
    //             <ListItemText primary='Projects' />
    //         </ListItem>
    //         <ListItem button href='/#contact' key='Contact'>
    //             <ListItemText primary='Contact' />
    //         </ListItem>
    //         <ListItem button key='Resume'>
    //             <ListItemText primary='Resume' />
    //         </ListItem>
    //     </List>
    //     </Box>
    // );

    return (
    <Router>
        <AppBar position="static" color='primary' elevation={0} className={useStyle.root}>
            <Toolbar>
                <Avatar src={One} sx={{ width: 47, height: 47 }} className={useStyle.avatar} />
                <Box className={useStyle.main}>SIMEON AKANBI</Box>
                <Box className={useStyle.linkList}>
                    <Link to="/" className={useStyle.link}>Home</Link>
                    <Link to="/Projects" className={useStyle.link}>Projects</Link>
                    <Link to="/" className={useStyle.link}>Contact</Link>
                    <a 
                        href={resumeUrl} 
                        target='_blank' 
                        rel='noreferrer'
                        className={useStyle.link}
                    >
                        Résumé
                    </a>
                        {/* <IconButton className={useStyle.menuBar} onClick={() => setState(true)}> */}
                            {/* <MenuIcon /> */}
                        {/* </IconButton> */}
                        {/* <Drawer anchor="right" open={drawerState} > */}
                            {/* <List /> */}
                        {/* </Drawer> */}
                    {/* Note: I initially wanted to put a download icon beside the resume link */}
                </Box>
            </Toolbar>
        </AppBar>
        <main className={useStyle.mainView}>
            <Intro />
            <About />
            <Stacks />
            <Projects />
            <Contact />
        </main>
    </Router>

    )
}

export default Navigation
