import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const footerStyle = makeStyles(theme => ({
    root: {
        background: '#22242b',
        color: 'white',
        height: '300px',
        display: 'flex',
        justifyContent:"center",
        alignItems: 'center',
    }
}))

const Footer = () => {
    const useStyle = footerStyle();

    return (
        <Box component='div' className={useStyle.root}>
            
        </Box>
    )
}

export default Footer
