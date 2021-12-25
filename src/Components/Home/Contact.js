import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const contactStyle = makeStyles(theme => ({
    root: {
        color: 'white'
    },
    main: {
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        margin: 0,
    },
    Title: {
        // alignSelf:'flex-start',
        // position: 'relative',
        // left: '150px',
        fontSize: '3rem'
    },
    Info: {
        margin: '20px',
        fontSize: "1.37rem",
        width: '55%',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px',
    },
    textBox: {
        margin: '20px',
    },
    textField: {
        borderRadius: '0',
        outlineColor: 'white',
        borderColor: 'white !important',
        width: '300px',
        outline: 'white',
        margin: '14px',
        // borderBottomColor: 'white',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff60',
            borderRadius: '2px',
            color: 'white',
        },
        '&:focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue !important'
        }
    },
    mainText: {
        color: '#ececec',
        borderColor: '#ffffff63 !important',
    },
    textarea: {
        width: '635px',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff63',
            borderRadius: '2px',
            color: 'white',
        },
        '&:focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue !important'
        }
    }

}))

const Contact = () => {
    const useStyle = contactStyle();

    return (
        <Box component='div' className={useStyle.root}>
            <Box component='section' className={useStyle.main}>
                <Typography variant='h4' className={useStyle.Title}>
                    Get In Touch
                </Typography>
                <Typography variant='body1' className={useStyle.Info}>
                    If you want to get in touch with me about a project collaboration or you just want to say hi, 
                    kindly fill the form below and I'll get back to you as soon as possible.
                </Typography>
                <Box component='form' className={useStyle.form}>
                    <Box component='div' className={useStyle.textBox}>
                        <TextField className={useStyle.textField}label='Full Name' InputLabelProps={{style: {color: '#fff'}}} inputProps={{className: useStyle.mainText}} required type='text' variant='outlined' />
                        <TextField className={useStyle.textField} type='email' InputLabelProps={{style: {color: '#ffffff'}}} inputProps={{className: useStyle.mainText}} label='E-Mail' required variant='outlined' />
                    </Box>
                    {/* <Box component='div' className={useStyle.textBox}>
                    <TextField className={useStyle.emailField} type='email' InputLabelProps={{style: {color: '#ffffff94'}}} inputProps={{className: useStyle.mainText}} variant='outlined'></TextField>
                    </Box> */}
                    <Box component='div' className={useStyle.textBox}>
                        <TextField label='Your Message' required className={useStyle.textarea} rows="10" InputLabelProps={{style: {color: '#fff'}}} multiline inputProps={{className: useStyle.mainText}} variant='outlined'></TextField>
                    </Box>
                    <Button variant='contained'  endIcon={<SendIcon />} onClick={(elem) => {
                        elem.preventDefault();
                    }}>Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact
