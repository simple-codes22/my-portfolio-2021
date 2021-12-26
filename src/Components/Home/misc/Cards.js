import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
// import { Avatar } from "@mui/material"
import CSS from '../../../Static/SVGs/CSS.svg'
import HTML from '../../../Static/SVGs/HTML.svg'
import Python from '../../../Static/SVGs/Python.svg'
import JavaScript from '../../../Static/SVGs/JavaScript.svg'
import Django from '../../../Static/SVGs/Django.svg'
import MySQL from '../../../Static/SVGs/MySQL.svg'
import React from '../../../Static/SVGs/React.svg'
import Supabase from '../../../Static/SVGs/Supabase.svg'


const cardStyle = makeStyles(theme => ({
    cardSection: {
        margin: '30px',
    },
    root: {
        height: '260px',
        width: '220px',
        // border: '1px solid white',
        borderRadius: '3px',
        margin: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        // backdropFilter: 'blur(20px)',
        background: '#080f3636',
        boxShadow: '0px 0px 10px #0a0b207b',
    },
    image: {
        width: '100px',
        height: '100px',
        margin: '30px',
    },
    langName: {
        fontSize: '1.2rem',
        fontFamily: ''
    },
    division: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
}))

export const Cards = () => {
    const useStyle = cardStyle()
    return (
        <Box component='div' className={useStyle.cardSection}>
            <Box style={{display: 'flex', }} component='div'>
                <HtmlCard />
                <CssCard />
                <JsCard />
                <PythonCard />
            </Box>
            <Box style={{display: 'flex', }} component='div'>
                <DjangoCard />
                <ReactCard />
                <MySQLCard />
                <SupabaseCard />
            </Box>
        </Box>
    )
}

const HtmlCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={HTML} alt='HTML' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>HTML</Typography>
        </Box>
    )
}

const CssCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={CSS} alt='Css' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>CSS</Typography>
        </Box>
    )
}

export const JsCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={JavaScript} alt='JavaScript' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>JavaScript</Typography>
        </Box>
    )
}
export const PythonCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={Python} alt='Python' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>Python</Typography>
        </Box>
    )
}
export const DjangoCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={Django} alt='Django' className={useStyle.image} />
            <Typography>Django</Typography>
        </Box>
    )
}
export const ReactCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={React} alt='React' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>ReactJS</Typography>
        </Box>
    )
}
export const MySQLCard = () => {
    const useStyle = cardStyle();
    return (
        <Box component='div' className={useStyle.root}>
            <img src={MySQL} alt='HTML' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>MySQL</Typography>
        </Box>
    )
}
export const SupabaseCard = () => {
    const useStyle = cardStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <img src={Supabase} alt='HTML' className={useStyle.image} />
            <Typography component='p' className={useStyle.langName}>Supabase</Typography>
        </Box>
    )
}
