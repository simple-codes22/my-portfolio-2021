import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Twitter, LinkedIn, GitHub, Facebook, } from  '@mui/icons-material'

const socialStyle = makeStyles(theme => ({
    root: {
        position: 'absolute',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        animation: 'socialIntro 3s ease',
    },
    iconSpace: {
        border: '.1px solid white',
        padding: '10px',
        cursor: 'pointer',
        transition: 'all .3s ease-in-out',
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            background: '#f5f5f5',
            borderColor: '#f5f5f5',
        },
        '&:hover svg': {fill: '#0e0c2b'}
    },
}))

const Social = () => {
    const useStyle = socialStyle();
    return (
        <Box component='div' className={useStyle.root}>
                <a href='https://www.github.com/' target='_blank' className={`${useStyle.iconSpace} ${useStyle.GitHubIcon}`}><GitHub /></a>
                <a href='https://www.linkedin.com/' target='_blank' className={`${useStyle.iconSpace}  ${useStyle.LinkedInIcon}`}><LinkedIn /></a>
                <a href='https://www.twitter.com/' target='_blank' className={`${useStyle.iconSpace}  ${useStyle.TwitterIcon}`}><Twitter /></a>
                <a href='https://www.facebook.com/' target='_blank' className={`${useStyle.iconSpace}  ${useStyle.FacebookIcon}`}><Facebook /></a>
        </Box>
    )
}

export default Social