import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import One from '../../Static/Images/One.png';


const aboutStyle = makeStyles(theme => ({
    root: {
        position: 'static',
        background: '#000000e1',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
    },
    aboutImage: {
        width:'700px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutSection: {
        width: '700px',
        margin: '10px',
    },
    Title: {
        margin: "30px 0px",
        fontSize: '3rem',
    },
    inBold: {
        fontSize: '23px',
        fontWeight: 'bold',
        margin: '10px 0px',
        textAlign: 'justify-all',
        letterSpacing: '1px',
    },
    normal: {
        textAlign: 'justify',
        fontSize: '1.11rem',
    },
    mainImage: {
        width: '300px',
        height: '400px',
        borderRadius: '10px',
    }
}))

const About = () => {
    const useStyle = aboutStyle();
    return (
        <Box component='div' className={useStyle.root}>
            <Box 
                component='div' 
                data-aos='fade-right'
                data-aos-delay='300'
                data-aos-duration='1300'
                className={useStyle.aboutImage}
            >
            <img src={One} alt='Simeon' className={useStyle.mainImage} />
            </Box>
            <Box component='div' className={useStyle.aboutSection}>
                <Typography
                    data-aos='fade-in' 
                    data-aos-delay='500'
                    data-aos-duration='1400'
                    variant='h4' 
                    className={useStyle.Title}
                >
                    About me
                </Typography>
                <Typography
                    data-aos='fade-up'
                    data-aos-delay='700'
                    data-aos-duration='1400'
                    variant='body1' 
                    className={useStyle.Content}
                >
                    <Typography variant='body1' className={useStyle.inBold}>
                        Hello I'm Simeon, a passionate developer based in Kaduna, Nigeria. I'm a young student interested in problem solving and communicating ideas through code.
                    </Typography>
                    <Typography variant='body1' className={useStyle.normal}>
                        My first year (currently) as a web developer has widened my scope of critical thinking and creativity in order to achieve desired goals, and through this acquired skill, 
                        I wish to cooperate with wonderful clients to assist them at solving issues.
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default About
