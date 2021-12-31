import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';
import { Cards } from "./misc/Cards";

const stackStyle = makeStyles(theme => ({
    root: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        textAlign: 'center !important',
        margin: "30px !important",
        fontSize: '3rem !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '2.4rem !important',
        },
        [theme.breakpoints.down('tablet')]: {
            fontsize: '2.25rem !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '2rem !important',
        }
    },
    Info: {
        // margin: '20px',
        fontSize: "1.37rem !important",
        width: '800px !important',
        textAlign: 'center !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '1.3rem !important',
            width: '760px !important',
        },
        [theme.breakpoints.down('mini')]: {
            width: '700px !important',
            fontSize: '1rem !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '635px !important',
            fontSize: '.86rem !important',
        },
        [theme.breakpoints.down(650)]: {
            width: '600px !important',
            fontSize: '.8rem !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '530px !important',
            fontSize: '.7rem !important',
        }
    }
}))

const Stacks = () => {
    const useStyle = stackStyle();
    return (
        <Box component='div' className={useStyle.root}>
            <Box component='div'>
                <Typography
                    variant='h4'
                    data-aos='fade-in'
                    data-aos-delay='500'
                    data-aos-duration='1400'
                    className={useStyle.Title}
                >
                    Tech Stacks
                </Typography>
                <Typography 
                    variant='body1' 
                    data-aos='fade-up'
                    data-aos-delay='700'
                    data-aos-duration='1400'
                    className={useStyle.Info}
                >
                    In my journey as a web developer, I've developed creative and responsive websites various web technologies for both frontend and backend.
                </Typography>

            </Box>
            <Cards />
        </Box>
    )
}

export default Stacks
