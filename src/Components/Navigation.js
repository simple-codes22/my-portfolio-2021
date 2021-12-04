import { Box, Toolbar, AppBar, Avatar } from "@mui/material";
import One from './../Static/Images/One.png'; // This is actually my photo, i really don't know why i named it "One" I hope to change it during production
// import useState from 'react'
import { makeStyles } from '@mui/styles';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import Intro from './Home/Intro';
import About from './Home/About';
import Stacks from './Home/Stacks';
import Projects from './Home/Projects';
import Contact from './Home/Contact'


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
        color: '#f5efe7'
    },
    avatar: {
        margin: '10px',
    }
    ,
    linkList: {
        position: 'absolute',
        right: '50px',
    },
    link: {
        color:'white',
        margin: '10px',
        textDecoration:'none',
        transition: 'color .3s ease',
        '& svg': {
            fill: '#fff'
        },
        '&:hover': {
            color: '#040405'
        }
    },
    mainView: {
        position: "relative",
        // height: '100vh',
        '& div': {
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#22242b'
        }
    }
}))

const Navigation = () => {
    const useStyle = NavStyle();
    // const [clicking, setClick] = useState('Home');
    // const Intro = () => {
    //     return ()
    // }
    // Remember you haven't decided on the routing pattern 👆👆👆👆

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
                    <Link to="/" className={useStyle.link}>Résumé</Link> 
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
